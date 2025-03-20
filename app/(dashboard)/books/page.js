import Search from "@/components/Search"
import SelectOption from "@/components/SelectOption";
import { getAllBook, getAllCategoryBook, getBookByName } from "@/service/controllerBook"
import Link from "next/link";
async function Books({ searchParams }) {
  const data = await getAllBook();
  const category = await getAllCategoryBook();

  // const bookName=await getBookByName(name);
  const dataList = [...data];
  const dataListCategory = [...category];
  const book =(await searchParams).catId || '';

  const name =(await searchParams).title || '';
  const bookName = await getBookByName(name);
  const dataListName=[...bookName];
  console.log("book", book);
  const filteredBooks = () => {
    if (book === "") {
      if (bookName === "") {
        console.log("get all")
        return dataList;
      } else {
        if (dataListName.length === 0) {
          console.log("search not found")
          return [];
        }
        console.log("get name success")
        console.log("datanameList==========", dataListName);
        return dataListName;
      }
    }
    else {
      return dataList.filter(cart => String(cart.id) === String(book));
    }
    // else if (book === ""&&bookName !== "") {
    //   return dataListName.filter(n => String(n.book_title) === String(name));
    // }

  };

  return (
    <>
      <Search />
      <div className=" flex justify-center items-center  mt-5 " >
        <div className="w-[86%] min-h-[90vh] rounded-2xl bg-white   border ">
          <div className="w-[95%] min-h-[30px]  m-auto mt-7 flex justify-between">
            <button className="p-3 bg-gray-200 text-blue-500 rounded-xl font-medium" type="button"> {book !== "" ? dataListCategory.filter(cart => String(cart.id) === String(book)).map(c => (
              <p>{c.book_cate_name}</p>
            )) : "Books"} </button>
            <SelectOption dataListCategory={dataListCategory} />
          </div>
          <div className='flex overflow-y-scroll flex-wrap gap-8 max-h-[79vh] mt-8 w-[95%] m-auto'>
            {filteredBooks().map((bk) => (
              <div className="flex bg-gray-100 shadow-lg rounded-2xl p-6 w-[350px] items-center gap-4 relative" key={bk.id}>
                {/* Book Cover */}
                <div className="flex flex-col items-center ">
                  <img
                    src={bk.image}
                    alt="Book 1"
                    className="w-24 h-36 object-cover rounded-lg shadow-md  "
                  />
                  <Link href={`/detail?type=book&title=${bk.book_title}&id=${bk.id}&catId=${bk.book_cate_id}`}>
                    <button className="mt-3 bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                      Read detail
                    </button>
                  </Link>
                </div>

                {/* Book Info */}
                <div className="flex-1">
                  <h2 className="text-md font-bold text-gray-800">  {bk.book_title}</h2>
                  <p className="text-gray-600 text-sm mt-1 indent-2 line-clamp-2">
                    {bk.description}
                  </p>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Books