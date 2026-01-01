// pages/thoughts/[slug].tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ThoughtMeta } from '@/types/thoughts';

const thoughtsDirectory = path.join(process.cwd(), 'thoughts');

export type ThoughtPageProps = {
  contentHtml: string;
  meta: ThoughtMeta;
};

/* ----------------------------
   Get all paths
----------------------------- */
export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(thoughtsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));

  const paths = files.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false }; // fallback false = 404 for unknown
};

/* ----------------------------
   Get data for each path
----------------------------- */
export const getStaticProps: GetStaticProps<ThoughtPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const fullPath = path.join(thoughtsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      meta: data as ThoughtMeta,
    },
  };
};

/* ----------------------------
   Page component
----------------------------- */
interface Props {
  contentHtml: string;
  meta: ThoughtMeta;
}

export default function ThoughtPage({ contentHtml, meta }: Props) {
  return (
    <section className="md-content thoughts">
      <h1>{meta.title}</h1>
      <p>{meta.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
}
