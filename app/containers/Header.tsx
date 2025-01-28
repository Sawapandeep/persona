'use client'

import Image from "next/image";
import VercelLogo from "@/public/vercel.svg";

const Header = () => {

return (
       <div id="headerSection" className=" w-full  top-0 absolute">
              <div id="Landing_Page_Nav_Container" className="px-32">
                     <div id="Landing_Page_Nav_Menu_Wrapper" className="py-4 relative z-[2]">
                            <div id="Landing_Page_Nav_Content_Wrapper" className="flex flex-row justify-between items-center">
                                   <div id="Logo">
                                          <Image src={VercelLogo} className="h-8 w-auto " alt="logo"/>
                                   </div>
                                   <div id="Landing_Page_Nav_List_Wrapper" className="fixed w-[250px] p-6 bg-transparent ">
                                          <div id="Landing_Page_Nav_Menu_List" className="flex flex-row">
                                                 <li>Demo</li>
                                                 <li>Features</li>
                                          </div>
                                   </div>
                                   <div id="Landing_Page_Nav_Button" className="bg-white absolute rounded-xl text-black">Suggest</div>
                            </div>
                     </div>
              </div>
       </div>
);
}
export default Header;