import { Icons } from '@/components/icons';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen gap-28">
      <div className="flex-1 flex flex-col items-end ">
        <h1 className="text-4xl">digital shrine</h1>
        <Icons />
      </div>
      <div className="flex-1 flex ">
        <Image
          src={'https://github.com/DeadBoyPiotrek.png'}
          width={200}
          height={200}
          alt="DeadBoyPiotrek"
        />
      </div>
    </div>
  );
};

export default Home;
