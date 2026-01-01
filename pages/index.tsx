import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';
import { ThoughtMeta } from '@/types/thoughts';

export type ParamsType = {
  slug: string;
};

interface PageProps {
  contentHtml: string
  meta: ThoughtMeta
}

export async function getStaticProps({ params }: { params: ParamsType }) {
  const postsDir = path.join(process.cwd(), 'md-pages');
  const fullPath = path.join(postsDir, `index.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      meta: data as ThoughtMeta
    }
  };
} 

export default function Index({ contentHtml }: PageProps) {
  return (
    <section className="md-content">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
}
