import { Playground } from '../../../modules';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Code() {
  const [codeValue, setCodeValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    readDB();
  }, []);

  const readDB = async () => {
    try {
      const response = await fetch('/api/code', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      setCodeValue(await response.json());
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
    <div className="relative mb-4 w-full">
      <Playground codeText={codeValue} />
    </div>
  );
}
