"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavbarLink=(items)=>{
  const pathname=usePathname();
    return (
        <>
           <Link
             className={`flex flex-row items-center  justify-center lg:justify-start rounded-md h-12 focus:outline-none pr-3.5  lg:pr-6 font-semibold text-gray-500 hover:text-primary-400 cursor-pointer ${
              pathname===items.href?"bg-blue-400 text-white" :"bg-none"
             }`}
             href={items.href} 
           >
             <span className="inline-flex justify-center items-center ml-3.5 size-4">
              {items.icon}
             </span>
             <span className="ml-0 lg:ml-2 text-md tracking-wide truncate capitalize hidden lg:block">
               {items.label}
             </span>
           </Link></>
    )
}
export default NavbarLink;