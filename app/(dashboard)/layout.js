
"use client"
import '@/style/globals.css';

import DashboardSideBar from "@/components/DashboardSideBar";
import Search from "@/components/Search"
import Cards from "@/components/Cards";
const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="grid grid-cols-12 bg-gray-100 ">
                <aside className="col-span-2 bg-blue-200">
                    <DashboardSideBar />
                </aside>
                <section className="col-span-10 ">
                   
                    {children}
                </section>
            </div>
        </>
    );
}
export default DashboardLayout