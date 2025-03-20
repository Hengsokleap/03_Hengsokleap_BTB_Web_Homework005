import React from 'react'
import Search from '@/components/Search';
import Link from 'next/link';
import Image from 'next/image';
function Dashboard() {
    return (
        <>
            <Search />
            <div className=" flex justify-center items-center  mt-5 ">
                <div className="w-[86%] min-h-[60vh] rounded-2xl bg-white   border ">
                    <div className="w-[95%] h-[min-h-100px]  m-auto mt-7">
                        <button className="p-3 bg-gray-200 text-blue-500 rounded-xl font-medium" type="button">Home Page</button>
                    </div>
                    <div className='w-[95%] h-[80%]  m-auto '>
                        <div className='w-full min-h-[60vh]  flex justify-center items-center gap-10'>
                            <Link className="relative w-[300px] min-h-[400px] bg-gray-100 group rounded-2xl" href="/books">
                            
                                <div
                                    className="absolute inset-0 bg-[url('@/asset/books.png')] bg-cover bg-center rounded-2xl"
                                />

                            
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                                    <h2 className="text-white text-xl font-semibold">Books</h2>
                                </div>

                                <button className="absolute bg-white p-3 rounded-full left-4 top-4 w-[100px] text-blue-700 font-medium">
                                    Book
                                </button>
                            </Link>
                            <Link className="relative w-[300px] min-h-[400px] bg-gray-100 group rounded-2xl" href="/cartoon">
                             
                                <div
                                    className="absolute inset-0 bg-[url('@/asset/cartoon.png')] bg-cover bg-center rounded-2xl"
                                />

                             
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                                    <h2 className="text-white text-xl font-semibold">Old school cartoon</h2>
                                </div>

                        
                                <button className="absolute bg-gray-50 text-blue-700 w-[100px] rounded-full font-medium p-3  left-4 top-4">
                                    Book
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Dashboard;

