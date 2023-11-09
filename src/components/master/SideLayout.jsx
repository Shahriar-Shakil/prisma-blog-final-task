"use client";
import { useState } from "react";
import HeaderDashboard from "./HeaderDashboard";
import SideNav from "./SideNav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <SideNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="lg:pl-72">
          <HeaderDashboard setSidebarOpen={setSidebarOpen} />
          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Your content */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
