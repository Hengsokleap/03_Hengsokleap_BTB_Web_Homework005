import profile from "@/asset/profile.jpg";
import NavbarLink from "./NavbarLink";
import Image from "next/image";
import Link from "next/link";
import dataBooks from "@/data/dataBook";
const DashboardSideBar = () => {
  return (
    <div className="w-full min-h-[100vh] bg-gray-200 ">
      {/* SideBar */}
      <div className="col-span-1 bg-white min-h-[100vh]">
        <div className="p-2 h-full w-full flex flex-col bg-white dark:bg-gray-900 border-r border-r-gray-200">
          {/* Logo */}
          <a href="#">
            <div className="min-h-[20vh] w-full mb-6">
              <div className="w-full h-full flex items-center justify-center mb-2">
                <div className="w-[60%] h-[80%] " alt="profile">
                  <Image
                    src={profile}
                    className="w-full h-full object-cover rounded-full"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="w-full h-[10%] text-center ">
                <p className="font-medium text-2xl">Cute Monster</p>
                <p>CusteMonster@gmail.com</p>
              </div>
            </div>
          </a>
          <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden flex-grow pt-2 justify-between ">
            <div className="flex flex-col  space-y-1 mx-1 lg:mt-1 ">
              {dataBooks.map((items, index) => (
                <NavbarLink {...items} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* View Content */}
      <div className="col-span-6 bg-white" />
    </div>
  );
};
export default DashboardSideBar;
