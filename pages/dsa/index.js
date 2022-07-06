import { DsaList } from '../../modules';
import { useRouter } from 'next/router';

export default function DSA() {
  const router = useRouter();
  console.log(router);
  return (
    <div className="w-100">
      <DsaList />
    </div>
  );
}
