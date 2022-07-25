import { useRouter } from 'next/router';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export const Back = () => {
  let router = useRouter();
  return (
    <h4
      className="my-4 mx-6 text-xl cursor-pointer"
      onClick={() => router.back()}
    >
      <BsFillArrowLeftCircleFill />
    </h4>
  );
};
