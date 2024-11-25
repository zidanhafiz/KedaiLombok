import { ReactNode, ButtonHTMLAttributes } from "react";

export default function Button({ children, ...props }: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className='px-6 py-2 font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary/30 focus:ring-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-x-2'
      {...props}
    >
      {children}
    </button>
  );
}
