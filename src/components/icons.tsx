'use client';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiAlignLeft } from 'react-icons/fi';

const handleClickCopy = async () => {
  await navigator.clipboard.writeText('piotr.turski.work@gmail.com');
};

export const Icons = () => {
  return (
    <div className="flex items-center text-3xl w-40 gap-4 mt-2">
      <Link href="https://github.com/DeadBoyPiotrek" target="_blank">
        <AiFillGithub />
      </Link>
      <button onClick={handleClickCopy}>
        <MdOutlineMailOutline />
      </button>
      <Link href="https://digital-shrine.vercel.app" target="_blank">
        <FiAlignLeft />
      </Link>
    </div>
  );
};
