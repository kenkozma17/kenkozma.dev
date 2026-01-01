import { remark } from 'remark';
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';
import { ThoughtMeta } from '@/types/thoughts';


export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'md-pages'); 
  const files = fs.readdirSync(postsDirectory)

  const paths = files
    .map(file => file.replace('.md', ''))
    .filter(slug => slug !== 'index')
    .map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export type ParamsType = {
  slug: string;
};

interface PageProps {
  contentHtml: string
  meta: ThoughtMeta
}

export async function getStaticProps({ params }: { params: ParamsType }) {
  const postsDir = path.join(process.cwd(), 'md-pages');
  const fullPath = path.join(postsDir, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      meta: data as ThoughtMeta
    }
  };
}

export default function Page({ contentHtml }: PageProps) {
  return (
    <section className="md-content">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
}
