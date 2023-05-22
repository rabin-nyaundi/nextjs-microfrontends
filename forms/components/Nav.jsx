import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="flex ">
      <ul className=" flex items-center justify-center p-2 gap-8 text-xl">
        <li className="p-1 text-base">
          <Link className="p-10" href={"/"}>Home</Link>
        </li>
        <li className="p-1 text-base">
          <Link href={"/forms"}>Form Builder</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
