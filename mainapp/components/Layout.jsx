import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Logo from "public/vercel.svg";

const Footer = dynamic(() => import("forms/footer"), {
  ssr: false,
});
const NavBar = dynamic(() => import("forms/nav"), {
  ssr: false,
});

function Layout({ children }) {
  return (
    <div className="flex relative min-h-screen w-full flex-col items-center">
      <div className="flex w-full h-20 justify-around bg-slate-300 p-8">
        <div className="logo flex justify-center items-center">
          <Image className="" src={Logo} alt="logo" />
        </div>
        <NavBar />
      </div>
      <div className="flex-1 flex h-auto justify-center items-center w-full p-8 bg-gray-200">
        <div className="prose flex flex-col w-full">{children}</div>
      </div>
      <div className="flex justify-center items-center p-10 absolute bottom-0 w-full bg-slate-500">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
