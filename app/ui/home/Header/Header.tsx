"use client";

import { useState } from "react";
import { headerTabs, contactNumbers } from "./contsant";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdMenu } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex w-full justify-between">
      <h1 className="text-2xl font-bold">AutoPartner</h1>
      <PhoneNumbers />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MdMenu size={24} className="size-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" showCloseButton={false}>
          <ul className="flex flex-col items-start">
            {headerTabs.map((tab) => (
              <li
                key={tab.title}
                className="pl-4 h-12 w-full flex items-center border-b border-neutral-300 border-collapse"
              >
                <a href={tab.url} className="hover:underline font-semibold">
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
    <div className="flex flex-col">
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
    <nav className="hidden md:flex items-center gap-4 h-full w-full justify-between px-11">
      <h1 className="text-2xl font-bold">AutoPartner</h1>
      <ul className="flex space-x-4 h-16 items-center gap-5">
        {headerTabs.map((tab) => (
          <li key={tab.title} className="w-fit m-0">
            <a href={tab.url} className="hover:underline">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 h-full w-fit items-center">
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
    <div className="relative h-16">
      <header className="fixed w-full flex items-center justify-between p-2 bg-neutral-50 text-primary h-16">
        <DesktopNav />
        <MobileNav />
      </header>
    </div>
  );
};

export default Header;
