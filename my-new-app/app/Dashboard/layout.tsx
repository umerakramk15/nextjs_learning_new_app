import React from "react";
import Link from "next/link";

interface DashboardLayoutPropes {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutPropes> = (props) => {
  return (
    <div>
      <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About</li>
          <li>login</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen text-white bg-black w-[15vw] text-2xl">
          <ul className="pt-5 flex flex-col gap-5 px-3">
            <li>
              <Link href="/Dashboard"> Dashboard</Link>
            </li>
            <li>
              <Link href="/Dashboard/todos">Todos</Link>
            </li>
            <li>
              <Link href="/Dashboard/users">Users</Link>
            </li>
            <li>
              <Link href="/Dashboard/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="p-4 max-h-screen overflow-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
