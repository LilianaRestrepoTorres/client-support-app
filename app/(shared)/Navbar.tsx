import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex items-center justify-between w-full px-4 py-2 bg-wh-900 text-wh-10">
        <div className="flex items-center justify-between gap-10">
          <Link href="/">Home</Link>
          <Link href="/tickets">Tickets</Link>
        </div>
        <div></div>
      </nav>
      <hr className="mx-10 border-1" />
    </header>
  );
};

export default Navbar;
