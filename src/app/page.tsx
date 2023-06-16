import { Icons } from '@/components/icons';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-screen h-screen sm:gap-28 gap-14">
      <div className="flex-1 flex items-end justify-end">
        <div>
          <h1 className="text-4xl mb-2">Hi, I&apos;m Piotrek</h1>
          <Icons />
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="max-w-xs ">
          <Image
            src={'https://github.com/DeadBoyPiotrek.png'}
            width={200}
            height={200}
            alt="DeadBoyPiotrek"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
