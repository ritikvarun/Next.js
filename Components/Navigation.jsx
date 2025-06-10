import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <header className="grid grid-cols-2">
        <div className="">Arjun rk</div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
