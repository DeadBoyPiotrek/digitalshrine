import { Icons } from '@/components/icons';
import { Scene } from '@/components/scene';
import Image from 'next/image';
import { Suspense } from 'react';

export const metadata = {
  title: 'digital shrine',
  description: 'Home page',
};

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-screen h-screen sm:gap-28 gap-14">
      <div className=" flex sm:items-end items-center justify-end  ">
        <div>
          <h1 className="text-4xl mb-2">Hi, I&apos;m Piotrek</h1>
          <Icons />
        </div>
      </div>
      <div className="flex min-w-[300px] h-[400px] items-center justify-center ">
        <Suspense
          fallback={
            <Image
              src={'https://github.com/DeadBoyPiotrek.png'}
              alt="github avatar"
              width={200}
              height={200}
            />
          }
        >
          <Scene />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
