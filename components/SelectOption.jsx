"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation"; 
function SelectOption({ dataListCategory }) {
  const router = useRouter();
  const pathname = usePathname(); 
  const handleChange = (event) => {
  const selectedId = event.target.value;
    if (selectedId&& pathname=="/cartoon") {
      router.replace(`/cartoon?catId=${selectedId}`);
    }else if(selectedId&& pathname=="/books"){
      router.replace(`/books?catId=${selectedId}`); 
    }
  };

  return (
    <div>
      <p>Current Pathname: {pathname}</p> 
      <select
        name="categories"
        id="categories"
        className="bg-gray-200 p-3 font-medium text-blue-500 rounded-xl"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>Select Category</option>
        {pathname==="/cartoon"?dataListCategory.map((ct) => (
          <option key={ct.id} value={ct.id}>
            {ct.cartoon_genre}
          </option>
        )):dataListCategory.map(bk=>(
          <option key={bk.id} value={bk.id}>
          {bk.book_cate_name}
        </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOption;
