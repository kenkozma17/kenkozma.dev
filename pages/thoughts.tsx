import Head from "next/head";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';

export type metaType = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type Thought = {
  slug: string;
  content: string;
  meta: metaType;
};

const thoughtsDirectory = path.join(process.cwd(), 'thoughts');

/* ----------------------------
   Build-time data
----------------------------- */
export const getStaticProps: GetStaticProps = async () => {
  const fileNames = fs.readdirSync(thoughtsDirectory);

  const thoughts: Thought[] = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(thoughtsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        meta: data as metaType,
      };
    });

  // Optionally sort by date descending
  thoughts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

  return {
    props: {
      thoughts,
    },
  };
};

/* ----------------------------
   Page component
----------------------------- */
interface ThoughtsPageProps {
  thoughts: Thought[];
}

export default function ThoughtsPage({ thoughts }: ThoughtsPageProps) {
  return (
    <section className="md-content thoughts">
      <Head>
        <title>Ken Kozma - Thoughts</title>
        <meta name="description" content="Writing on web development, agency work, personal projects, and hobbies—sharing lessons, ideas, and experiences beyond just code." />
      </Head>
      <h1>Thoughts</h1>
      <p>Welcome to my personal blog where I share what I think is interesting in life.</p>
      <hr />
      <ul>
        {thoughts.map((thought, index) => (
          <li className="flex md:mb-[.25rem] mb-[.45rem] items-start" key={index}>
            <span className="shrink-0 w-[6rem] inline-block mr-[1.15rem]">{thought.meta.date}</span>
            <a className="underline-offset-[3px]" href={`/thoughts/${thought.meta.slug}`}>
              {thought.meta.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
