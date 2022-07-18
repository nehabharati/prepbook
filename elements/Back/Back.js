import { useRouter } from 'next/router';

export const Back = () => {
  let router = useRouter();
  return (
    <h4 className="my-4 mx-5" onClick={() => router.back()}>
      Back
    </h4>
  );
};
