"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderMenu from "./header-menu";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { Toggle } from "./ui/toggle";
import { Menu, X } from "lucide-react";

export const lists = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/store",
    title: "Our Store",
  },
  {
    href: "/menu",
    title: "Menu",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

const SiteHeader = () => {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[99] h-[62px] w-full bg-transparent shadow-sm transition-all md:h-[74px] 2xl:h-[86px]">
      <div className="mx-auto flex h-[62px] w-full max-w-screen-2xl items-center justify-between gap-4 px-[4%] md:h-[74px] 2xl:h-[86px]">
        <Link href="/">
          <div className="flex">
            <div className="relative h-[44px] w-[44px] md:h-[48px] md:w-[48px]">
              <Image fill src="/old-manila.png" alt="oldmanila" priority />
            </div>
          </div>
        </Link>
        <div className="flex h-12 items-center justify-between gap-3">
          <nav aria-label="primary">
            {/* <button className="md:hidden absolute top-7 right-6 flex flex-col justify-center items-center bg-transition z-[999]"></button> */}
            <div className="relative hidden md:block">
              <ul className="flex gap-3">
                {lists.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm transition-colors",
                        item.href.startsWith(`/${segment}`)
                          ? "font-medium text-foreground hover:text-foreground"
                          : "font-normal text-foreground/60 hover:text-foreground/80",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <HeaderMenu
            className={cn(
              isOpen
                ? "visible right-0 top-0 opacity-100 z-[99999] bg-white"
                : "invisible -top-4 right-[-1000px] opacity-0",
            )}
          />
          <div className="flex gap-2">
            <Toggle
              onClick={() => setIsOpen(!isOpen)}
              variant="outline"
              className="block md:hidden z-[999999]"
            >
              {isOpen ? (
                <X className="h-[1.5rem] w-[1.3rem]" />
              ) : (
                <Menu className="h-[1.5rem] w-[1.3rem]" />
              )}
            </Toggle>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
