"use client";
import Button from "@/components/Button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body className='max-w-[768px] mx-auto text-center my-20 flex flex-col items-center'>
        <h2 className='text-2xl font-bold'>Oops! Terjadi kesalahan</h2>
        <p className='text-sm text-gray-500 my-4'>{error.message}</p>
        <Button onClick={() => reset()}>Coba lagi</Button>
      </body>
    </html>
  );
}
