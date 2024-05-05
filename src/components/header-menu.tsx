import React from "react";
import { lists } from "./site-header";
import { cn } from "@/lib/utils";

type HeaderMenuProps = {
  className: string;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 z-50 w-full bg-transparent transition-all",
        className,
      )}
    >
      <div className="bg-background px-4 pb-12 pt-7 h-full flex justify-center items-center">
        <ul className="text-center">
          {lists.map((list) => (
            <li key={list.href} className="mb-2">
              <a
                href={list.href}
                className="relative text-sm text-center text-muted-foreground/60 transition-colors hover:text-muted-foreground/80"
              >
                {list.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
