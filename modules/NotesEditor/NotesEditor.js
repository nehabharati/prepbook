import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Table from '@tiptap/extension-table';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import { EditorContent, useEditor } from '@tiptap/react';
import { CustomTableCell } from './TableCell';
import { MenuBar } from './Menubar';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Sidebar } from '../../elements';
// import styles from './NotesEditor.module.css';

export const NotesEditor = () => {
  const [content, setContent] = useState(`
    <h3>
      Devs Just Want to Have Fun by Cyndi Lauper
    </h3>
    <p>
      I come home in the morning light<br>
      My mother says, <mark>“When you gonna live your life right?”</mark><br>
      Oh mother dear we’re not the fortunate ones<br>
      And devs, they wanna have fun<br>
      Oh devs just want to have fun</p>
    <p>
      The phone rings in the middle of the night<br>
      My father yells, "What you gonna do with your life?"<br>
      Oh daddy dear, you know you’re still number one<br>
      But <s>girls</s>devs, they wanna have fun<br>
      Oh devs just want to have
    </p>
    <p>
      That’s all they really want<br>
      Some fun<br>
      When the working day is done<br>
      Oh devs, they wanna have fun<br>
      Oh devs just wanna have fun<br>
      (devs, they wanna, wanna have fun, devs wanna have)
    </p>
  `);
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
    content: content,
  });

  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-10/12 m-4 p-8">
        <MenuBar editor={editor} />
        <div className="p-4 border border-black rounded-md border-t-0">
          <EditorContent editor={editor} className="focus:outline-0" />
        </div>
      </div>
    </div>
  );
};
