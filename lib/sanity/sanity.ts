import { createClient } from "next-sanity";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-07-11";
const useCdn = process.env.NODE_ENV === "production"; // `false` if you want to ensure fresh data

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
