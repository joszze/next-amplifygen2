import Link from "next/link";
import { FC } from "react";
import { cn } from "../utils/cn";

const Navbar: FC<{ className?: string }> = ({ className }) => {
  return (
    <nav>
      <ul className={cn("flex items-center justify-between gap-4", className)}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/upload">Upload</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
