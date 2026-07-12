import Head from "next/head";
import { GetStaticProps } from 'next';
import { THOUGHTS } from '@/data/siteContent';

export type metaType = {
  title: string;
  description: string;
  date: string;
};

export type Thought = {
  slug: string;
  contentHtml: string;
  excerpt: string;
  meta: metaType;
};

/* ----------------------------
   Build-time data
----------------------------- */
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      thoughts: THOUGHTS,
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
            <a className="underline-offset-[3px]" href={`/thoughts/${thought.slug}`}>
              {thought.meta.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
