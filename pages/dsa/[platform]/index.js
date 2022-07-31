import { QuestionList } from '../../../modules';
import { useEffect, useState } from 'react';

export default function Platform() {
  const [problems, setProblems] = useState(null);
  useEffect(() => {
    readDB();
  }, []);

  const readDB = async () => {
    try {
      const response = await fetch('/api/problems', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      setProblems(await response.json());
      if (response.status !== 200) {
        console.log('something went wrong');
        //set an error banner here
      } else {
        console.log('form submitted successfully !!!');
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error retrieving', error);
    }
  };

  return (
    <div className="relative">
      <QuestionList problems={problems} />
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
