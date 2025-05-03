import { client } from "@/lib/sanity/sanity";
import Intro from "./ui/home/Intro";
import HomeLayout from "./ui/Layout/HomeLayout";

async function getBlogs() {
  const query = `
  *[_type == "blog"] | order(_createdAt desc)
  {
    title,
    smallDescription,
    content,
    "currentSlug": slug.current
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  // const data = await getBlogs();
  // console.log("data: ", data);
  return (
    <HomeLayout>
      <Intro />
    </HomeLayout>
  );
}
