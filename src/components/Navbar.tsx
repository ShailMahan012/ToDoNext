import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-cyan-950 text-white p-3">
      <ul className="flex flex-row gap-4 list-none items-center">
        <li>
          <h1 className="mr-3.5">
            <Link href="/">To Do App</Link>
          </h1>
        </li>
        <li>
          <Link href="/Items">To Do Items</Link>
        </li>
        <li>
          <Link href="/New_item">Add New Item</Link>
        </li>
      </ul>
    </nav>
  );
}
