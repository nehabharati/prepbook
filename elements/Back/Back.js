import { useRouter } from 'next/router';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export const Back = () => {
  let router = useRouter();
  return (
    <div
      className="mb-4 mx-6 text-xl cursor-pointer"
      onClick={() => router.back()}
    >
      <BsFillArrowLeftCircleFill />
    </div>
  );
};
