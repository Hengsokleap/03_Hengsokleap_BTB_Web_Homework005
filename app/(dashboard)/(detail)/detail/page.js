
import { getCartoonById, getCategoryCartoonById } from '@/service/cartoon';
import React from 'react'
import { FaRegEye } from "react-icons/fa";
import Breadpage from '@/components/Breadpage';
import { getBookById, getCategoryBookById } from '@/service/controllerBook';
async function ProductDetail({ searchParams }) {
    const detail = (await searchParams).id || '';
    const catId=(await searchParams).catId||'';
    const type=(await searchParams).type||'';
    if(type==="cartoon"){
        const data = await getCartoonById(detail);
        const category=await getCategoryCartoonById(catId);
        return (
            <>
              <Breadpage data= {data} category={category} type={type}/>
              
                <div className=' max-h-[79vh] mt-8 w-[95%] m-auto'>
                    <div className="  rounded-2xl p-6 w-full items-center gap-4 relative" >
                        <div className="flex flex-col items-center float-end bottom-4 w-[300px] h-[300px] z-20">
                            <img
                                src={data.payload.image}
                                alt="Book 1"
                                className="w-full h-full object-cover rounded-lg shadow-md  "
                            />
    
                        </div>
                    </div>
                    <div className=' bg-white min-h-[150] rounded-2xl shadow-lg p-5  top-[70px] z-0 '>
                        <h2 className="text-xl font-bold text-gray-800 flex mb-3"> {data.payload.ct_title}</h2>
                        <p className='mb-3'>By <span className='font-xl text-blue-400 font-medium'>{data.payload.ct_creator}</span> </p>
                        <div className="flex items-center gap-2 text-blue-400">
                                            <FaRegEye />
                                            <p className="font-medium">{data.payload.view_count} times | {data.payload.published_year.split('-')[0]}</p> 
                                          </div>
                        <p className="text-gray-600 text-sm mt-1  min-h-[140px] w-[70%]">
                            {data.payload.ct_description}
                        </p>
                    </div>
                </div>
            </>
        )
    }else if(type==="book"){
        const data = await getBookById(detail);
        const category=await getCategoryBookById(catId);
        return (
            <>
              <Breadpage data= {data} category={category}/>
                <div className=' max-h-[79vh] mt-8 w-[95%] m-auto'>
                    <div className="  rounded-2xl p-6 w-full items-center gap-4 relative" >
                        <div className="flex flex-col items-center float-end bottom-4 w-[300px] h-[300px] z-20">
                            <img
                                src={data.payload.image}
                                alt="Book 1"
                                className="w-full h-full object-cover rounded-lg shadow-md  "
                            />
    
                        </div>
                    </div>
                    <div className=' bg-white min-h-[150] rounded-2xl shadow-lg p-5  top-[70px] z-0 '>
                        <h2 className="text-xl font-bold text-gray-800 flex mb-3"> {data.payload.book_title}</h2>
                        <p className='mb-3'>By <span className='font-xl text-blue-400'>{data.payload.book_author}</span> </p>
                        <p className="text-gray-600 text-sm mt-1  min-h-[140px] w-[70%]">
                            {data.payload.description}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductDetail