'use client';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiAlignLeft } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import toast, { Toaster } from 'react-hot-toast';
const handleClickCopy = async () => {
  await navigator.clipboard.writeText('piotr.turski.work@gmail.com');
};

export const Icons = () => {
  return (
    <div className="flex items-center text-3xl w-40 gap-4 mt-2">
      <Toaster
        toastOptions={{
          icon: '🎉',
        }}
      />
      <Tooltip
        id="email-tooltip"
        place="bottom"
        variant="light"
        style={{ fontSize: '1rem' }}
      />

      <Link
        className="hidden lg:block"
        href="https://github.com/DeadBoyPiotrek"
        data-tooltip-content="GitHub"
        data-tooltip-id="email-tooltip"
        aria-label="GitHub profile"
      >
        <AiFillGithub />
      </Link>
      <Link
        className="lg:hidden sm:block text-xl"
        href="https://github.com/DeadBoyPiotrek"
      >
        github
      </Link>
      <button
        className="hidden lg:block"
        onClick={() => {
          handleClickCopy();
          toast.success('Email Copied!');
        }}
        data-tooltip-content="Email"
        data-tooltip-id="email-tooltip"
        aria-label="Email"
      >
        <MdOutlineMailOutline />
      </button>
      <button
        className="lg:hidden sm:block text-xl"
        onClick={() => {
          handleClickCopy();
          toast.success('Email Copied!');
        }}
      >
        email
      </button>
      <Link
        className="hidden lg:block"
        href="https://digital-shrine.vercel.app"
        data-tooltip-content="Blog"
        data-tooltip-id="email-tooltip"
        aria-label="blog"
      >
        <FiAlignLeft />
      </Link>
      <Link
        className="lg:hidden sm:block text-xl"
        href="https://digital-shrine.vercel.app"
      >
        blog
      </Link>
    </div>
  );
};
