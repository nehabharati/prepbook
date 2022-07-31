import { PlatformList } from '../../modules';

export default function DSA() {
  return (
    <div className="w-100">
      <PlatformList />
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
