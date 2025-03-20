export const getAllBook = async () => {
    const req = (await fetch("https://nextjs-homework005.vercel.app/api/book")).json()
    const res = await req;
    return res.payload;
}
export const getAllCategoryBook = async () => {
    const req = (await fetch("https://nextjs-homework005.vercel.app/api/book_category")).json()
    const res = await req;
    return res.payload;
}
// export const getBookById = async (id) => {
//     const req = (await fetch("https://nextjs-homework005.vercel.app/api/book/${id}")).json()
//     const res = await req;
//     return res.payload;
// }
// export const getCategoryBookById = async (id) => {
//     const req = (await fetch("https://nextjs-homework005.vercel.app/api/book_category/search?query=${id}")).json()
//     const res = await req;
//     return res.payload;
// }
export const getBookById = async (id) => {
    const req = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`);
    const data = await req.json(); 
    return data;
}
export const  getCategoryBookById = async (id) => {
    const req = await fetch(`https://nextjs-homework005.vercel.app/api/book_category/search?query=${id}`);
    const data = await req.json(); 
    return data;
}
export const  getBookByName = async (name) => {
    const req = await fetch(`https://nextjs-homework005.vercel.app/api/book?search=${name}`);
    const data = await req.json(); 
    return data.payload;
}