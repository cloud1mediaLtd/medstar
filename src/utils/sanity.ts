import { createClient } from "@sanity/client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

if (
  !import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
  !import.meta.env.PUBLIC_SANITY_DATASET
) {
  throw new Error("Did you forget to run sanity init --env?");
}

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20", // date of setup
});

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getCourses(courseType?: string): Promise<Course[]> {
  let query = `*[_type == "course"`;
  if (courseType) {
    query += ` && courseType == $courseType`;
  }
  query += ` && defined(slug.current)] | order(_createdAt desc)`;

  const params = courseType ? { courseType } : {};

  return await client.fetch(query, params);
}

export async function getCourse(slug: string): Promise<Course> {
  return await client.fetch(
    groq`*[_type == "course" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getHero(): Promise<Hero> {
  return await client.fetch(groq`*[_type == "hero"][0]`);
}

export async function getAbout(): Promise<About> {
  return await client.fetch(groq`*[_type == "about"][0]`);
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
  categories: Array<string>;
  readTime: string;
}

export interface Course {
  _type: "course";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
  courseType: Array<string>;
  courseDate: Array<string>;
}

export interface Hero {
  _type: "hero";
  title?: string;
  mainImage?: ImageAsset;
  paragraph?: string;
  linkA?: string;
  linkB?: string;
}

export interface About {
  _type: "about";
  who?: string;
  points?: Array<string>;
  linkA?: string;
  linkB?: string;
  sessions?: Array<string>;
  faculty?: Array<string>;
  offering?: Array<string>;
}
