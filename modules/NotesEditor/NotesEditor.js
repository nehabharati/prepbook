import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Table from '@tiptap/extension-table';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import { EditorContent, useEditor } from '@tiptap/react';
import { CustomTableCell } from './TableCell';
import { MenuBar } from './Menubar';
import StarterKit from '@tiptap/starter-kit';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs';
import { Back, Sidebar } from '../../elements';

export const NotesEditor = ({ text }) => {
  const router = useRouter();
  const { note } = router.query;
  const ref = useRef(null);
  const [noteText, setNoteText] = useState(text);
  const [content, setContent] = useState('');

  useEffect(() => {
    setNoteText(text);
  }, [text]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let title = note?.split('-').join(' ');
    const body = { title: title, text: content };

    try {
      const response = await fetch('/api/noteText', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log('something went wrong');
      } else {
        window.location.reload();
        console.log('form submitted successfully !!!');
      }
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      // Default TableCell
      // TableCell,
      // Custom TableCell with backgroundColor attribute
      CustomTableCell,
    ],
    content: noteText,

    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-10/12 py-6">
        <Back />
        <div className="flex justify-between items-center mb-4">
          <h1 className="mx-6 capitalize">{note?.split('-').join(' ')}</h1>
          <button
            className="bg-black px-2 py-2 mx-6  rounded-lg text-white"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
        <MenuBar editor={editor} />

        <div className="p-4 mx-6 border border-black rounded-md border-t-0">
          <EditorContent editor={editor} className="focus:outline-0" />
        </div>

        <div className="m-6">
          <h4>Previous note</h4>
          <div className="bg-stone-100 my-2 p-2 rounded-lg">
            <div ref={ref} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
        <div className="flex items-baseline my-2 mx-6">
          <p>Want to share this with the world? Tweet it </p>
          <button className="bg-blue-400 rounded-lg px-2 py-1 mx-2 text-white capitalize">
            <a
              href={`https://twitter.com/intent/tweet?text=${ref?.current?.textContent}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
