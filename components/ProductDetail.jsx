import React from 'react'

function ProductDetail() {
  return (
    <div className='flex overflow-y-scroll flex-wrap gap-8 max-h-[79vh] mt-8 w-[95%] m-auto'>
              <div className="flex bg-gray-100 shadow-lg rounded-2xl p-6 w-[350px] items-center gap-4 relative" key={index}>
              <div className="flex flex-col items-center ">
                <img 
                  src={bk.image}
                  alt="Book 1" 
                  className="w-24 h-36 object-cover rounded-lg shadow-md  "
                />
                <button className="mt-3 bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  Read full article
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-md font-bold text-gray-800"> sdfsdfg</h2>
                <p className="text-gray-600 text-sm mt-1 indent-2 line-clamp-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque doloremque neque quis praesentium omnis quam mollitia illum sed nostrum autem.
                </p>
              </div>
            </div>
      </div>
  )
}

export default product-detail