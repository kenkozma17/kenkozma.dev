import Head from 'next/head'
export default function Resume() {
  return (
    <section className="resume">
      <Head>
        <title>Ken Kozma - Resume</title>
        <meta name="description" content="Professional resume highlighting experience in modern web development, agency collaboration, and performance-driven frontend solutions." />
      </Head>

      <a target="_blank" className="text-[.85rem] inline-block mb-[1rem]" href="https://docs.google.com/document/d/17TPv7bBW-ZYM6PQNYr_QVVu4faVDMT1Yaqi3J0xFIAU/edit?usp=sharing">Download PDF</a>
      <h1>Ken Kozma</h1>
      <p className="text-[1.45rem]">Senior Front End Developer</p>

      <h2 className="mt-[.85rem] mb-[.5rem]">Skills</h2>
      <section className="pt-[.5rem] border-t border-[#D3D3D3]">
        <p><span className="font-bold">Languages:</span> HTML5, CSS3, SCSS, JavaScript (ES6+), PHP, Python, MySQL, MariaDB</p>
        <p><span className="font-bold">Frameworks & Libraries:</span> TypeScript, Node.js, GSAP, React/NextJS, Vue/NuxtJS, Vuex/Pinia, Tailwind CSS, GraphQL</p>
        <p><span className="font-bold">Tools:</span> NPM, Vite, Gulp/Webpack, Git, GitHub Actions, Figma, Docker, Webflow, Wordpress, Linux, Jest, Cursor, ESLint</p>
        <p><span className="font-bold">Core Skills:</span> Web Performance, WCAG and a11y Compliance, UI/UX Principles, E2E Testing, API Integration, Front End Tooling</p>
      </section>

      <h2 className="mt-[.85rem] mb-[.5rem]">Experience</h2>
      <section className="pt-[.5rem] border-t border-[#D3D3D3]"> 
        <div className="flex justify-between sm:items-end sm:flex-row flex-col">
          <h3>Senior Front End Developer</h3>
          <p>Dec 2023 - Present</p>
        </div>
        <p><a href="https://vitaminisgood.com">Vitamin Inc.</a> — Baltimore, MD</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Owned and drove numerous complex, large projects and development tasks, rapidly adapting to shifting priorities while maintaining clean, scalable, and maintainable code mainly using Laravel, Wordpress, JavaScript, GSAP and TypeScript.
          </li>
          <li>
            Collaborated seamlessly with the product and design team to convert complex design systems into responsive and SEO-friendly applications using scalable and well-documented frontend architecture within expected timelines.          </li>
          <li>
            Optimized and documented the internal process to ensure new and current client websites meet accessibility (WCAG), performance and quality standards using tools like Accessibee, Lighthouse and Google Analytics.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="flex justify-between sm:items-end sm:flex-row flex-col">
          <h3>Front End Developer</h3>
          <p>Feb 2023 - July 2023</p>
        </div>
        <p><a href="https://leasecake.com">Leasecake</a> — Winter Park, FL</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Led an important Vue 2 to Vue 3 migration for the official leasecake product by refactoring code to align with Composition API and TypeScript, updating dependencies and switching build tools to use Vite.
          </li>
          <li>
            Consistently developed and integrated complex, test-driven, customer-facing UI interfaces into a Laravel ecosystem using Vue 2, TypeScript, Tailwind CSS and Jest into the primary product codebase.
          </li>
          <li>
            Mentored junior engineers by hands-on troubleshooting realtime bugs and conducted code reviews to refine their ability to solve problems properly and in timely manners.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="flex justify-between sm:items-end sm:flex-row flex-col">
          <h3>Front End Engineer (Contract)</h3>
          <p>Apr 2022 - Feb 2023</p>
        </div>
        <p><a href="https://quevis.com">Quevis</a> — Los Angeles, CA</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Collaborated extensively with a remote product and engineering team to integrate an interactive dashboard interface using NextJS that consumed a RESTful API while also integrating third party services like Stripe and Twilio SMS, secured with token-based authentication.           
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="flex justify-between sm:items-end sm:flex-row flex-col">
          <h3>Full Stack PHP Developer</h3>
          <p>Apr 2019 - Apr 2022</p>
        </div>
        <p><a href="https://liquidfish.com">liquidfish</a> — Oklahoma City, OK</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Translated complex business logic and UI design requirements into clean, scalable and performant customer-facing websites and data-heavy dashboards deployed via CI/CD within a Linux environment built using Laravel, JavaScript, Vue and MySQL. 
          </li>
          <li>
            Adapted quickly in high-velocity environments, managing multiple roles across full-stack development, problem-solving, bug support and client communication to keep projects moving forward and out the door.
          </li>
          <li>
            Improved critical internal processes by initiating and integrating a UI component library into an in-house CMS to remove repetitive tasks and move quicker while scaffolding new web projects.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="flex justify-between sm:items-end sm:flex-row flex-col">
          <h3>Full Stack PHP Developer</h3>
          <p>Apr 2022 - Feb 2023</p>
        </div>
        <p><a href="https://provinceofcatanduanes.gov.ph/">Provincial Capitol of Catanduanes</a> — The Philippines</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Developed and deployed an internal web scraping tool built using Flask (Python) and Beautiful Soup to gather and run public social media data through targeted analytics.  
          </li>
        </ul>
      </section>

      <h2 className="mt-[.85rem] mb-[.5rem]">Commercial Projects</h2>
      <section className="pt-[.5rem] border-t border-[#D3D3D3]"> 
        <div className="flex justify-between sm:items-end sm:flex-row flex-col">
          <h3>Accommodation Booking Platform</h3>
        </div>
        <p>Laravel (Inertia), Vue, Tailwind, MySQL, PayMongo API</p>
        <ul className="mt-2 ml-4 highlights-list">
          <li>
            Developed a clean and minimal accommodation booking platform integrating the PayMongo Checkout API, supporting secure online payments for multiple local hotels.
          </li>
        </ul>
      </section>

      <h2 className="mt-[.85rem] mb-[.5rem]">Education</h2>
      <section className="pt-[.5rem] border-t border-[#D3D3D3]">
        <div className="flex justify-between sm:items-end sm:flex-row flex-col">
          <h3>Bachelors of Science, Information Technology </h3>
          <p>March 2018</p>
        </div>
        <p><a href="https://catsu.edu.ph/">Catanduanes State University</a> — The Philippines</p>
      </section>
    </section>
  );
}