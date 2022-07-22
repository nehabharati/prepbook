import { useState, useEffect } from 'react';
import { ResourcesList } from '../../modules';

export default function Resources() {
  const [resources, setResources] = useState(null);
  useEffect(() => {
    readDB();
  }, []);

  const readDB = async () => {
    try {
      const response = await fetch('/api/resources', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log(await response.json());
      setResources(await response.json());
      if (response.status !== 200) {
        console.log('something went wrong');
        //set an error banner here
      } else {
        console.log('Retrieved resources');
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error retrieving', error);
    }
  };
  return (
    <div>
      <ResourcesList resources={resources} />
    </div>
  );
}
