import { GetStaticProps } from 'next';
import { ABOUT_PAGE } from '@/data/siteContent';
import { ThoughtMeta } from '@/types/thoughts';

interface PageProps {
  contentHtml: string
  meta: ThoughtMeta
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      contentHtml: ABOUT_PAGE.contentHtml,
      meta: ABOUT_PAGE.meta as ThoughtMeta,
    },
  };
};

export default function Index({ contentHtml }: PageProps) {
  return (
    <section className="md-content">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
}
