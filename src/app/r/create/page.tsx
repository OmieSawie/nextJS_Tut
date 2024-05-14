"use client"

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { subtle } from 'crypto';
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const Page = () => {
  const [input, setinput] = useState<string>('');
  const router = useRouter();
  return (
    <div className='container flex items-center h-full maz-w-3xl mx-auto'>
      <div className='relative bg-white w-full h-fit p-4 rounded-lg space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold'>Create a Community</h1>
        </div>
        <hr className='bg-zinc-500' />
        <div>
          <p className='text-lg font-medium'>Name</p>
          <p className='text-xs pb-2'>Community names along with capitalization cannot be changed.</p>
          <div className='relative'>
            <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400 p-2">r/</p>
            <Input className='pl-6' value={input} onChange={(e) => { setinput(e.target.value) }} />
          </div>
        </div>
        <div className='flex justify-end gap-4'>
          <Button variant='subtle' onClick={() => {router.back()} }>Cancel</Button>
          <Button>Create Community</Button>
        </div>
      </div>
    </div>
  )
}

export default Page;
