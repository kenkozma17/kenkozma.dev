'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname(); 
  return (
    <nav className="xl:pr-[3.25rem] md:pr-[1.75rem] md:border-none md:pb-0 md:mb-0 mb-[1.5rem] pb-[1rem] border-b border-[#D3D3D3] side-nav">
      <ul className="flex md:flex-col flex-row md:justify-start justify-end gap-[1rem] md:gap-0 text-right font-[lora-sans]">
        <li className="text-[1.15rem]">
          <Link className={`transition-[color] duration-[350ms] 
              ${ pathname === "/" ? "text-[#000] hover:text-[#000]" : "text-[#808080]"}`} 
              href="/">
            about
          </Link>
        </li>
        <li className="text-[1.15rem]">
          <Link className={`transition-[color] duration-[350ms] 
              ${ pathname === "/resume" ? "text-[#000] hover:text-[#000]" : "text-[#808080]"}`} 
            href="/resume">
            resume
          </Link>
        </li>
        <li className="text-[1.15rem]">
          <Link className={`transition-[color] duration-[350ms] 
              ${ pathname === "/projects" ? "text-[#000] hover:text-[#000]" : "text-[#808080]"}`}  
            href="/projects">
            projects
          </Link>
        </li>
        <li className="text-[1.15rem]">
          <Link className={`transition-[color] duration-[350ms] 
              ${ pathname?.includes('/thoughts') ? "text-[#000] hover:text-[#000]" : "text-[#808080]"}`}  
            href="/thoughts">
            thoughts
          </Link>
        </li>
      </ul>
    </nav>
  );
}