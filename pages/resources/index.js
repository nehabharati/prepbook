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
      setResources(await response.json());
      if (response.status !== 200) {
        console.log('something went wrong');
      } else {
        console.log('Retrieved resources');
      }
    } catch (error) {
      console.log('there was an error retrieving', error);
    }
  };
  return (
    <>
      <ResourcesList resources={resources} />{' '}
      <div className="fixed bottom-0 p-5 py-10 w-full text-center">
        <a target="_blank" href="https://www.planetscale.com" className="mx-4">
          Planetscale
        </a>
        <a target="_blank" href="https://www.hashnode.com" className="mx-4">
          Hashnode
        </a>
      </div>
    </>
  );
}
