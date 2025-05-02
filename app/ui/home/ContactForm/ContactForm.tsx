import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CiMail } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";

interface ContactFormField {
  value: string;
  href: string;
  icon: any;
}

const items: ContactFormField[] = [
  {
    value: "Email",
    href: "mailto:contact@skilldocs.pl",
    icon: CiMail,
  },
  {
    value: "Phone",
    href: "tel:+48 570 804 478",
    icon: MdOutlinePhone,
  },
  {
    value: "Wincentego Rzymowskiego 30/323, 02-697, Warszawa",
    href: "https://www.google.com/maps/dir//Wincentego+Rzymowskiego+30+02-697+Warszawa+%D0%9F%D0%BE%D0%BB%D1%8C%D1%88%D0%B0/@52.1746775,21.0033335,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x471932de534b640f:0xea5f991f3e4573e8",
    icon: FiMapPin,
  },
];

const BookCallForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="lg" className="sm:max-w-48 md:hidden">
          Book a call
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-justify">Book call</DialogTitle>
          <DialogDescription className="text-justify">
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col items-center gap-4">
          <Input
            id="name"
            className="w-full"
            type="text"
            placeholder="Your name"
            name="name"
          />
          <PhoneNumberInput />
        </form>
        <div className="grid grid-cols-4 items-center gap-4"></div>
      </DialogContent>
    </Dialog>
  );
};

const ContactForm = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h2>Contact Us</h2>
      <Separator />
      {items.map((item) => {
        return (
          <div className="flex gap-2" key={item.value}>
            <item.icon className="relative top-1 size-4" />
            <a>{item.value}</a>
          </div>
        );
      })}

      <BookCallForm />
    </div>
  );
};

export default ContactForm;
