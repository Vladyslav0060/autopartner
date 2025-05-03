"use client";

import { useEffect, useState } from "react";
import { headerTabs, contactNumbers } from "./contsant";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdMenu } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Logo from "@/public/images/logo/moovex-transparent.png";
import Image from "next/image";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-secondary-foreground flex w-full items-center justify-between md:hidden">
      <Image src={Logo} alt="Logo" className="max-w-[150px]" />
      <PhoneNumbers />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MdMenu className="size-9 text-black" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" showCloseButton={false}>
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          <ul className="flex flex-col items-start">
            {headerTabs.map((tab) => (
              <li
                key={tab.title}
                className="flex h-12 w-full border-collapse items-center border-b border-neutral-300 pl-4"
              >
                <a href={tab.url} className="font-semibold hover:underline">
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const PhoneNumbers = () => {
  return (
    <div className="flex flex-col text-black">
      {contactNumbers.map((number) => (
        <a key={number} href={`tel:${number}`}>
          {number}
        </a>
      ))}
    </div>
  );
};

const DesktopNav = () => {
  return (
    <nav className="hidden h-full w-full items-center justify-between gap-4 px-11 md:flex">
      <Image src={Logo} alt="Logo" className="max-w-[200px]" />
      <ul className="flex h-16 items-center gap-5 space-x-4">
        {headerTabs.map((tab) => (
          <li key={tab.title} className="m-0 w-fit">
            <a href={tab.url} className="hover:underline">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex h-full w-fit items-center gap-4">
        <div className="flex size-full">
          <PhoneNumbers />
        </div>
        <Separator orientation="vertical" className="!h-2/3" />
        <div>Social</div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="relative my-4 flex h-[90px] justify-center">
      <header className="fixed top-4 flex h-[90px] w-[95%] items-center justify-between rounded-3xl bg-white px-5 py-2.5 md:container">
        <DesktopNav />
        <MobileNav />
      </header>
    </div>
  );
};

export default Header;
