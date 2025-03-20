export const allCategoryCartoon = async () =>{
    const req = (await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre"))
    const res = await req.json();
    return res.payload;
}
export const allCartoon = async () =>{
    const req = (await fetch("https://nextjs-homework005.vercel.app/api/cartoon"))
    const res = await req.json();
    return res.payload;
}
export const getCartoonById = async (id) => {
    const req = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`);
    const data = await req.json(); 
    console.log(data)
    return data;
}
export const getCategoryCartoonById = async (id) => {
    const req = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${id}`);
    const data = await req.json(); 
    console.log(data)
    return data;
}
export const getCartoonByName = async (name) => {
    console.log("name in api ========",name)
    const req = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${name}`);
    const data = await req.json(); 
    console.log("cartoon name ==================================",data)
    return data.payload;
}

