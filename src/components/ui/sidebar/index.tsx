"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { menuOptions } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Separator } from "../separator";
import {
  Database,
  GitBranch,
  LucideMousePointerClick,
  Settings2Icon,
} from "lucide-react";
import { ModeToggle } from "../global/modeToggle";

type Props = {};

const MenuOptions = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="dark:bg-black h-screen flex overflow-y-scroll overflow-x-hidden items-center flex-col gap-10 py-6 px-2">
      <section className="flex flex-col items-center gap-8 ">
        <Link href="/" className="flex font-bold flex-row">
          Fuzzie
        </Link>
        <TooltipProvider>
          <ul className="flex flex-col gap-8">
            {menuOptions.map((menu) => (
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li key={menu.href}>
                    <Link
                      href={menu.href}
                      className={cn(
                        "group flex item-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        {
                          "dark:bg-[#2F006B] bg-[#EEE0FF]":
                            pathname === menu.href,
                        }
                      )}
                    >
                      <menu.Component selected={pathname === menu.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menu.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </TooltipProvider>
        <Separator />
        <div className="flex overflow-y-scroll item-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 border">
          <div className=" relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border dark:border-t-[#353346]">
            <LucideMousePointerClick size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-1/2 -bottom-[30px]" />
          </div>
          <div className=" relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border dark:border-t-[#353346]">
            <GitBranch size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-1/2 -bottom-[30px]" />
          </div>
          <div className=" relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border dark:border-t-[#353346]">
            <Settings2Icon size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-1/2 -bottom-[30px]" />
          </div>
          <div className=" relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border dark:border-t-[#353346]">
            <Database size={18} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-8">
        <ModeToggle />
      </section>
    </nav>
  );
};

export default MenuOptions;
