import { GetStaticProps, GetStaticPaths } from 'next';
import { PROJECTS_PAGE } from '@/data/siteContent';
import { ThoughtMeta } from '@/types/thoughts';

export type ParamsType = {
  slug: string;
};

interface PageProps {
  contentHtml: string
  meta: ThoughtMeta
}

const STATIC_PAGES: Record<string, { contentHtml: string; meta: ThoughtMeta }> = {
  projects: {
    contentHtml: PROJECTS_PAGE.contentHtml,
    meta: PROJECTS_PAGE.meta,
  },
};

export const getStaticPaths: GetStaticPaths<ParamsType> = async () => {
  return {
    paths: Object.keys(STATIC_PAGES).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, ParamsType> = async ({ params }) => {
  const slug = params?.slug ?? '';
  const page = STATIC_PAGES[slug];

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: page,
  };
};

export default function Page({ contentHtml }: PageProps) {
  return (
    <section className="md-content">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
}
