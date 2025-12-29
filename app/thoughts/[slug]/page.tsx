import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';
import { ThoughtMeta } from '@/types/thoughts';

export async function getThoughts(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'thoughts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
 
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
 
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();
 
  return {
    slug,
    contentHtml,
    meta: data as ThoughtMeta
  };
}

export type paramsType = {
  slug: string;
};

interface PageProps {
  params: paramsType;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const thought = await getThoughts(slug);
  return (
    <section className="md-content">
      <div dangerouslySetInnerHTML={{ __html: thought.contentHtml }} />
    </section>
  );
}

