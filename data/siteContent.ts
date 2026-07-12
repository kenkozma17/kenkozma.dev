import { ThoughtMeta } from '@/types/thoughts';

export type StaticPageContent = {
  meta: ThoughtMeta;
  contentHtml: string;
};

export type ThoughtContent = {
  slug: string;
  meta: ThoughtMeta;
  contentHtml: string;
  excerpt: string;
};

export const ABOUT_PAGE: StaticPageContent = {
  meta: {
    title: 'About Me',
    date: 'Jan 1, 2026',
    description:
      'An overview of my background as a web developer, including agency experience, technical strengths, and the approach I take to building thoughtful web experiences.',
  },
  contentHtml: `<h1>About</h1>
<p>My name is Ken Kozma and I am a full stack web developer living between the Philippines and the United States.</p>
<p>I have spent most of my career building interactive and functional web interfaces that solve business problems and provide external value for large businesses, public figures, and non-profit organizations. I thrive best in organized and remote environments where creativity and problem-solving can produce value.</p>
<p>In my free time, you will find me trying to balance being a father, running, and synchronizing naps with my little one.</p>
<p>Learn more about recent work at <a href="/projects">/projects</a> or what is on my mind at <a href="/thoughts">/thoughts</a>.</p>
<hr>
<div class="foot-links">
<p><a href="mailto:kenkozma17@gmail.com">Email</a> <a href="https://github.com">Github</a> <a href="https://linkedin.com/in/ken-koz">Linkedin</a></p>
</div>`,
};

export const PROJECTS_PAGE: StaticPageContent = {
  meta: {
    title: 'Projects',
    date: 'Dec 28, 2025',
    description:
      'A curated selection of web projects showcasing modern frontend development, performance-focused builds, animation-driven interfaces, and real-world client solutions.',
  },
  contentHtml: `<h1>Notable Projects</h1>
<h2>Commercial Projects</h2>
<p>A selection of web projects led or collaboratively delivered while working with digital agencies.</p>
<div class="unstyled-list">
<ul>
<li>001 <a href="https://blakegriffin.com/">Blake Griffin</a></li>
<li>002 <a href="https://www.braums.com/">Braum's</a></li>
<li>003 <a href="https://www.thebankofbennington.com/">Bank of Bennington</a></li>
<li>004 <a href="https://globalrefuge.org">Global Refuge</a></li>
<li>005 <a href="https://fnb-usda-map.liquidfish.com/">FNB Loan Eligibility Map</a></li>
<li>006 <a href="https://sod-calculator.liquidfish.com/">Maddison Square Turf Sod Calculator</a></li>
<li>007 <a href="https://venturetrailers.com">Venture Trailers</a></li>
<li>008 <a href="https://creditxpert.com">Credit Xpert</a></li>
<li>009 <a href="https://charmcityscreenprint.com/">Charm City Screen Print</a></li>
<li>010 <a href="https://cc-md.org">Catholic Charities</a></li>
<li>011 <a href="https://squierinc.com/">Squier Inc.</a></li>
<li>012 <a href="https://markcg.com/">Mark Construction</a></li>
<li>013 <a href="https://fisherarchitecture.com/">Fisher Architecture</a></li>
<li>014 <a href="https://dragonboatsbaltimore.org/">Dragon Boat Races Baltimore</a></li>
</ul>
</div>
<br />
<h2>Personal Projects</h2>
<h3>01 Accommodation Booking Web Platform</h3>
<p>An accommodation booking platform built using Laravel Inertia and PayMongo checkout.</p>
<p>Stack: Laravel, InertiaJS, Vue, SCSS, MySQL</p>
<hr>
<div class="foot-links">
<p><a href="https://github.com/kenkozma17/libot-accommodation-bookings">Github</a> <a href="https://booking.catmidinn.com/">Website</a></p>
</div>
<h3>02 My Portfolio Website (2026)</h3>
<p>My portfolio website running on Cloudflare Workers and OpenNext.</p>
<p>Stack: Next.js, Markdown, Cloudflare Workers, SSG</p>
<hr>
<div class="foot-links">
<p><a href="https://github.com/kenkozma17/kenkozma.dev">Github</a></p>
</div>
<h3>03 CocoMS</h3>
<p>A CMS built on Statamic intended to deliver websites quicker.</p>
<p>Stack: Laravel, PHP, Statamic</p>
<hr>
<div class="foot-links">
<p><a href="https://github.com/kenkozma17/cocomanagement">Github</a></p>
</div>
<h3>04 Patient Management System</h3>
<p>A patient management platform built for a small lab clinic to automate patient onboarding.</p>
<p>Stack: Laravel, InertiaJS, Vue, JavaScript, MySQL</p>
<hr>
<div class="foot-links">
<p><a href="https://github.com/kenkozma17/libot-patient-management">Github</a></p>
</div>
<h3>05 Baller Directory</h3>
<p>A directory to help coaches rate and reference football players in the Philippines.</p>
<p>Stack: Laravel, InertiaJS, Vue, SCSS, MySQL</p>
<hr>
<div class="foot-links">
<p><a href="https://github.com/kenkozma17/footballer-directory">Github</a></p>
</div>`,
};

export const THOUGHTS: ThoughtContent[] = [
  {
    slug: 'it-was-the-damn-phone',
    meta: {
      title: 'My Mom was right, It was the damn phone',
      date: 'Feb 6, 2026',
      description:
        'At beginning of Feburary, I tried implementing a strategy to cut my phone usage drastically.',
    },
    excerpt:
      'It has only been a few days, but the quality-of-life difference already feels massive.',
    contentHtml:
      '<p>It has only been 6 days so far and the difference in quality of life is massive. Stay tuned for the complete blog post by the end of the month.</p>',
  },
  {
    slug: '2026-goals',
    meta: {
      title: 'Bad habits of 2025',
      date: 'Jan 2, 2026',
      description:
        'Read a few activities I am attempting to stay away in 2026.',
    },
    excerpt:
      'Over the course of 2025, I identified habits I want to leave behind in 2026.',
    contentHtml: `<p>Over the course of 2025, I discovered a few bad habits that I want to detach from in 2026. The following items are those bad habits:</p>
<ol>
<li>Doom scrolling</li>
<li>Saying yes when I should not</li>
<li>Not sticking to a budget</li>
<li>Traveling without purpose</li>
<li>Not taking enough naps</li>
</ol>`,
  },
];