import { NotesList } from '../../modules';
import { useState, useEffect } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    readDB();
  }, []);

  const readDB = async () => {
    try {
      const response = await fetch('/api/notes', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log(await response.json());
      setNotes(await response.json());
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
    <div>
      <NotesList notes={notes} />
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
