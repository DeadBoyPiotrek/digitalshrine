'use client';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiAlignLeft } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';

const handleClickCopy = async () => {
  await navigator.clipboard.writeText('piotr.turski.work@gmail.com');
};

export const Icons = () => {
  return (
    <div className="flex items-center text-3xl w-40 gap-4 mt-2">
      <Tooltip
        id="email-tooltip"
        place="bottom"
        variant="light"
        style={{ fontSize: '1rem' }}
      />
      <Tooltip
        id="GitHub-tooltip"
        place="bottom"
        variant="light"
        style={{ fontSize: '1rem' }}
      />
      <Tooltip
        id="Blog-tooltip"
        place="bottom"
        variant="light"
        style={{ fontSize: '1rem' }}
      />

      <Link
        href="https://github.com/DeadBoyPiotrek"
        target="_blank"
        data-tooltip-content="GitHub"
        data-tooltip-id="email-tooltip"
      >
        <AiFillGithub />
      </Link>
      <button
        onClick={handleClickCopy}
        data-tooltip-content="Click to copy"
        data-tooltip-id="email-tooltip"
      >
        <MdOutlineMailOutline />
      </button>
      <Link
        href="https://digital-shrine.vercel.app"
        target="_blank"
        data-tooltip-content="Blog"
        data-tooltip-id="email-tooltip"
      >
        <FiAlignLeft />
      </Link>
    </div>
  );
};
