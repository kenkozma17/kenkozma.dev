import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next';
import { THOUGHTS } from '@/data/siteContent';
import { ThoughtMeta } from '@/types/thoughts';

export type ThoughtPageProps = {
  contentHtml: string;
  meta: ThoughtMeta;
};

/* ----------------------------
   Get all paths
----------------------------- */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = THOUGHTS.map((thought) => ({
    params: { slug: thought.slug },
  }));

  return { paths, fallback: false }; // fallback false = 404 for unknown
};

/* ----------------------------
   Get data for each path
----------------------------- */
export const getStaticProps: GetStaticProps<ThoughtPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const thought = THOUGHTS.find((item) => item.slug === slug);

  if (!thought) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contentHtml: thought.contentHtml,
      meta: thought.meta as ThoughtMeta,
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
      <Head>
        <title>Ken Kozma — {meta.title}</title>
      </Head>
      <h1>{meta.title}</h1>
      <p>{meta.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
}
