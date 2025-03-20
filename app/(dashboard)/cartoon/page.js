
import React from 'react'
import { FaRegEye } from "react-icons/fa";
import Search from '@/components/Search';
import Link from 'next/link';
import SelectOption from '@/components/SelectOption';
import { allCartoon, allCategoryCartoon, getCartoonByName } from '@/service/cartoon';
async function Cartoon({ searchParams }) {
  const data = await allCartoon();
  const dataList = [...data];
  const cartoon = (await searchParams).catId || '';
  const cartoonName =(await searchParams).title || '';
  const dataCategory = await allCategoryCartoon();
  const dataListCategory = [...dataCategory]
  const dataName = await getCartoonByName(cartoonName);
  const dataListName = [...dataName];
  const filteredCartoons = () => {
    if (cartoon === "") {
      if (cartoonName === "") {
        return dataList;
      } else {
        if (dataListName.length === 0) {
          return [];
        }
        return dataListName;
      }
    }
    else {
      return dataList.filter(cart => String(cart.ct_genre_id) === String(cartoon));
    }

  };
  return (
    <>
      <Search />
      <div className="flex justify-center items-center mt-5">
        <div className="w-[86%] min-h-[90vh] rounded-2xl bg-white border">
          <div className="w-[95%] min-h-[30px] m-auto mt-7 flex justify-between">
            <button
              className="p-3 bg-gray-200 text-blue-500 rounded-xl font-medium"
              type="button"
            >
              {cartoon !== "" ? dataListCategory.filter(cart => String(cart.id) === String(cartoon)).map(c => (
                <p key={c.id}>{c.cartoon_genre}</p>
              )) : "Old school cartoon"}
            </button>
            <SelectOption dataListCategory={dataListCategory} />
          </div>
          <div className="flex overflow-y-scroll flex-wrap gap-8 max-h-[78vh] mt-8 w-[95%] m-auto">
            {filteredCartoons().map((el) => (
              <Link
                href={`/detail?type=cartoon&title=${el.ct_title}&id=${el.id}&catId=${el.ct_genre_id}`}
                className="w-[23%] h-[400px] rounded-2xl"
                key={el.id}
              >
                <div className="w-full h-[75%]">
                  <img
                    src={el.image}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-medium">{el.ct_title}</p>
                  <div className="flex items-center gap-2 text-blue-500">
                    <FaRegEye />
                    <p className="font-medium">{el.view_count} times | {el.published_year.split('-')[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartoon;

