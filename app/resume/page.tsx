export default async function Resume() {
  return (
    <section className="resume">
      <h1>Ken Kozma</h1>
      <p className="text-[1.45rem]">Senior Front End Developer</p>

      <h2 className="mt-[.85rem] mb-[.5rem]">Skills</h2>
      <section className="pt-[.5rem] border-t border-[#D3D3D3]">
        <p><span className="font-bold">Languages:</span> HTML5, CSS3, SCSS, JavaScript (ES6+), PHP, Python, MySQL, MariaDB</p>
        <p><span className="font-bold">Frameworks & Libraries:</span> TypeScript, Node.js, GSAP, React/NextJS, Vue/NuxtJS, Vuex/Pinia, Tailwind CSS, GraphQL</p>
        <p><span className="font-bold">Tools:</span> NPM, Vite, Gulp/Webpack, Git, Figma, Docker, Linux, Jest</p>
        <p><span className="font-bold">Core Skills:</span> DOM Manipulation, WCAG 2.1 compliance, Animation-driven UI development, Cross-functional collaboration</p>
      </section>

      <h2 className="mt-[.85rem] mb-[.5rem]">Experience</h2>
      <section className="pt-[.5rem] border-t border-[#D3D3D3]"> 
        <div className="flex justify-between items-end">
          <h3>Senior Front End Developer</h3>
          <p>Dec 2023 - Present</p>
        </div>
        <p><a href="https://vitaminisgood.com">Vitamin Inc.</a> — Baltimore, MD</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Developed a WordPress plugin to facilitate integration between an e-commerce website and NetSuite, enabling automated synchronization of products and orders across both platforms.
          </li>
          <li>
            Audited and remediated accessibility issues (WCAG 2.1) on 15+ client websites with Lighthouse to meet compliance requirements.
          </li>
          <li>
            Maintained and developed performance-optimized, animation-driven websites, leveraging GSAP, modern JavaScript, and CSS to create immersive, interactive experiences.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="flex justify-between items-end">
          <h3>Front End Developer</h3>
          <p>Feb 2023 - July 2023</p>
        </div>
        <p><a href="https://leasecake.com">Leasecake</a> — Winter Park, FL</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Conducted code reviews and mentorship sessions with junior developers, enhancing debugging speed and overall team proficiency.
          </li>
          <li>
            Directed the transition of the primary Leasecake lease management codebase to Vue 3 (Composition API), addressing compatibility issues and enhancing maintainability.
          </li>
          <li>
            Built automated UI tests using Vue Test Utils and Jest to validate component behavior before production releases.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="flex justify-between items-end">
          <h3>Front End Engineer (Contract)</h3>
          <p>Apr 2022 - Feb 2023</p>
        </div>
        <p><a href="https://quevis.com">Quevis</a> — Los Angeles, CA</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Worked alongside back-end engineers to integrate a Swagger-documented API into a server-side rendered interactive dashboard utilizing Nuxt.js, enabling streamlined content management for musical artists across the world.          
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="flex justify-between items-end">
          <h3>Full Stack PHP Developer</h3>
          <p>Apr 2019 - Apr 2022</p>
        </div>
        <p><a href="https://liquidfish.com">liquidfish</a> — Oklahoma City, OK</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Directed the full lifecycle delivery of 30+ high-traffic, scalable web applications, ensuring ADA compliance and strong SEO performance for enterprise clients and public figures.       
          </li>
          <li>
            Developed a Vue-based booking web application, with integrations in Twilio SMS and Stripe to automate reservations and improve user communication.
          </li>
          <li>
            Implemented a Storybook-driven component library of reusable UI components built with Vue.js and Tailwind CSS, reducing development turnaround time by 25% across all client websites.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="flex justify-between items-end">
          <h3>Full Stack PHP Developer</h3>
          <p>Apr 2022 - Feb 2023</p>
        </div>
        <p><a href="https://provinceofcatanduanes.gov.ph/">Provincial Capitol of Catanduanes</a> — The Philippines</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Built a Python-based web scraping system with Flask and Beautiful Soup to collect and analyze province-level data.     
          </li>
        </ul>
      </section>

      <h2 className="mt-[.85rem] mb-[.5rem]">Education</h2>
      <section className="pt-[.5rem] border-t border-[#D3D3D3]">
        <div className="flex justify-between items-end">
          <h3>Bachelors of Science, Information Technology </h3>
          <p>March 2018</p>
        </div>
        <p><a href="https://catsu.edu.ph/">Catanduanes State University</a> — The Philippines</p>
      </section>
    </section>
  );
}