import React from 'react'
import book from '../../public/books.jpg'
const free = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6'>
            <h1 className='text-2xl font-bold'>Free offered courses</h1>
            <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className=' w-full md:flex md:space-x-8 space-y-10 md:space-y-0 p-10'>
                <div className=' space-y-3 flex-1 rounded-xl shadow-xl transform transition-transform hover:-translate-y-2'>
                    <img src={book} alt="" className='rounded-xl' />
                    <div className='p-3 h-full'>
                        <h3 className=' text-base font-bold'>Story Book <span className='rounded-xl px-2 bg-pink-600 text-white font-normal'>Free</span></h3>
                        <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between w-full px-3 py-2 pt-3 pb-7'>
                        <span className="cursor-default bg-transparent border-2 rounded-xl border-black px-2">$46</span>
                        <span className=" cursor-pointer bg-transparent border-2 rounded-xl border-black px-2">Buy Now</span>
                        </div>
                        </div>
                </div>
                <div className='space-y-3 flex-1 rounded-xl shadow-xl transform transition-transform hover:-translate-y-2'>
                    <img src={book} alt="" className='rounded-xl' />
                    <div className='p-3 h-full'>
                        <h3 className=' text-base font-bold'>Story Book <span className='rounded-xl px-2 bg-pink-600 text-white font-normal'>Free</span></h3>
                        <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between w-full px-3 py-2 pt-3 pb-7'>
                        <span className="cursor-default bg-transparent border-2 rounded-xl border-black px-2">$46</span>
                        <span className=" cursor-pointer bg-transparent border-2 rounded-xl border-black px-2">Buy Now</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 flex-1 rounded-xl shadow-xl transform transition-transform hover:-translate-y-2'>
                    <img src={book} alt="" className='rounded-xl' />
                    <div className='p-3 h-full'>
                        <h3 className=' text-base font-bold'>Story Book <span className='rounded-xl px-2 bg-pink-600 text-white font-normal'>Free</span></h3>
                        <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between w-full px-3 py-2 pt-3 pb-7'>
                        <span className="cursor-default bg-transparent border-2 rounded-xl border-black px-2">$46</span>
                        <span className=" cursor-pointer bg-transparent border-2 rounded-xl border-black px-2">Buy Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default free
