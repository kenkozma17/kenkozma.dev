import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const thoughtsDirectory = path.join(process.cwd(), 'thoughts');

export type Thought = {
  slug: string;
  content: string;
  meta: metaType;
};

export type metaType = {
  title: string,
  description: string,
  date: string,
  slug: string,
};

export function getAllThoughts(): Thought[] {
  const fileNames = fs.readdirSync(thoughtsDirectory);

  return fileNames
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
}

export default function Thoughts() {
  const thoughts = getAllThoughts();
  return (
    <section className="md-content thoughts">
      <h1>Thoughts</h1>
      <p>This is the stuff</p>
      <hr />
      <ul>
        {thoughts.map((thought, index) => (
          <li className="" key={index}>
            <span className="mr-[2.15rem]">{thought.meta.date}</span>
            <a href={"/thoughts/" + thought.meta.slug }>
              {thought.meta.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}