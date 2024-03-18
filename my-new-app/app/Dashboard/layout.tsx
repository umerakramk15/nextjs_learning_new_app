import React from "react";

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
            <li>Dashboard</li>
            <li>Credits</li>
            <li>Payments</li>
            <li>Profile</li>
          </ul>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
