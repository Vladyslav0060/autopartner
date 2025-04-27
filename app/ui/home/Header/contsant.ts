interface HeaderTabs {
  title: string;
  url: string;
}

const headerTabs: HeaderTabs[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Services",
    url: "/services",
  },
];

const contactNumbers: string[] = ["+1234567890", "+0987654321"];

export { headerTabs, contactNumbers };
