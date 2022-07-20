import { useRouter } from 'next/router';

export const Back = () => {
  let router = useRouter();
  return (
    <h4 className="my-4 mx-6" onClick={() => router.back()}>
      Back
    </h4>
  );
};
