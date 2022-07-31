import { useState, useEffect } from 'react';
import { NotesEditor } from '../../../modules';
import { useRouter } from 'next/router';

export default function Note() {
  const router = useRouter();
  const { note } = router.query;
  const [content, setContent] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    readDB();
  }, []);

  useEffect(() => {
    content[content.length - 1]?.title.toLowerCase() ===
    note?.toLowerCase().split('-').join(' ')
      ? setText(content[content.length - 1]?.text)
      : null;
  }, [content]);

  const readDB = async () => {
    try {
      const response = await fetch('/api/noteText', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log(await response.json());
      setContent(await response.json());
      if (response.status !== 200) {
        console.log('something went wrong');
        //set an error banner here
      } else {
        console.log('Retrieved notes');
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error retrieving', error);
    }
  };
  return (
    <div className="relative">
      <NotesEditor text={text} />
      <div className="fixed bottom-0 p-5 py-10 w-full text-center">
        <a target="_blank" href="https://www.planetscale.com" className="mx-4">
          Planetscale
        </a>
        <a target="_blank" href="https://www.hashnode.com" className="mx-4">
          Hashnode
        </a>
      </div>
    </div>
  );
}
