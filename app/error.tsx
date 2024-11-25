"use client";
import Button from "@/components/Button";
import { useEffect } from "react";
import { TbAlertCircle } from "react-icons/tb";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center my-20 gap-5'>
      <div className='p-3 text-sm font-medium text-primary rounded-full bg-primary/10'>
        <TbAlertCircle size={20} />
      </div>
      <h2 className='text-xl font-medium'>Maaf ada kesalaan teknis</h2>
      <p>{error?.message}</p>
      <Button onClick={() => reset()}>Coba lagi</Button>
    </div>
  );
}
