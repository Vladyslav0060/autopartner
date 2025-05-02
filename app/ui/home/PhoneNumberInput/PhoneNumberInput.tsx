"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import PlFlag from "@/public/images/flags/pl.svg";
import UaFlag from "@/public/images/flags/ua.svg";
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";
import { useMask } from "@react-input/mask";

enum CountryCode {
  PL = "+48",
  UA = "+38",
}

// Define the type for a single flag entry
type FlagEntry = {
  code: keyof typeof CountryCode; // The key should be a key from the CountryCode enum
  component: React.ComponentType; // The value should be a React component
};

// Create the flags variable as an array of FlagEntry objects
const flags: FlagEntry[] = [
  { code: "PL", component: PlFlag },
  { code: "UA", component: UaFlag },
];

interface PhoneNumberInputProps {
  className?: string;
}

const getKeyByValue = (value: string): keyof typeof CountryCode | undefined => {
  const keys = Object.keys(CountryCode) as Array<keyof typeof CountryCode>;
  for (const key of keys) {
    if (CountryCode[key] === value) {
      return key; // Return the key if the value matches
    }
  }
  return undefined; // Return undefined if no match is found
};

const PhoneNumberInput = ({ className }: PhoneNumberInputProps) => {
  const [countryCode, setCountryCode] = useState<CountryCode>(CountryCode.PL);
  const [inputValue, setInputValue] = useState<string>(countryCode);
  const inputRef = useMask({
    mask: `${countryCode} (___) ___-__-__`,
    replacement: { _: /\d/ },
    showMask: true,
  });
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  const [popOverOpen, setPopOverOpen] = useState(false);
  return (
    <div className={cn("flex w-full", className)}>
      <div className="w-16 rounded-l-md bg-blue-100">
        <Popover open={popOverOpen} onOpenChange={setPopOverOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="relative">
              <Image
                src={
                  flags.find((flag) => flag.code === getKeyByValue(countryCode))
                    ?.component as any
                }
                alt="flag"
                className="mr-2 h-4 w-5"
              />
              <GoTriangleDown className="absolute right-0 size-3" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="relative left-0 flex w-fit flex-col bg-blue-100 p-0">
            {flags.map((flag, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-full w-fit justify-start p-2"
                onClick={() => {
                  setCountryCode(index === 0 ? CountryCode.PL : CountryCode.UA);
                  setInputValue(CountryCode[flag.code]);
                  setPopOverOpen(false);
                }}
              >
                <Image
                  src={flag.component as any}
                  alt="flag"
                  className="h-4 w-4"
                />
                <span>{CountryCode[flag.code]}</span>
              </Button>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Your phone"
        name="phone"
        className="w-full rounded-l-none"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value as any);
        }}
      />
    </div>
  );
};
export default PhoneNumberInput;
