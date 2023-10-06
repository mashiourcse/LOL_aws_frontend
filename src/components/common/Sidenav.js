import React from 'react';

const Sidenav = () => {
  return (
    <nav
      id="sidenav-1"
      className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
      data-te-sidenav-position="absolute"
    >
      {/* ... rest of the code for the sidenav */}
    </nav>
  );
};

const SidenavToggle = () => {
  return (
    <button
      className="mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      data-te-sidenav-toggle-ref
      data-te-target="#sidenav-1"
      aria-controls="#sidenav-1"
      aria-haspopup="true"
    >
      <span className="block [&gt;svg]:h-5 [&gt;svg]:w-5 [&gt;svg]:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          {/* ... svg path */}
        </svg>
      </span>
    </button>
  );
};

const SideBar = () => {
  return (
    <>
      <Sidenav />
      <SidenavToggle />
    </>
  );
};

export default SideBar;
