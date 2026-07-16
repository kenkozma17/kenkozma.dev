import Head from 'next/head'

export default function NaomiPage() {
  return (
    <section className="md-content naomi">
      <Head>
        <title>Ken Kozma - Hiring Part-Time Babysitter (Toddler)</title>
        <meta
          name="description"
          content="Hiring a kind, patient, trustworthy, and energetic babysitter to care for toddler Naomi."
        />
      </Head>

      <h1>Looking For: Part-Time Babysitter (Toddler)</h1>

      <div className="mb-4 overflow-hidden rounded-md border border-[#D3D3D3] bg-[#fdfcf8]">
        <img
          className="h-auto w-full object-cover"
          src="/naomi.jpeg"
          alt="Naomi sitting at a table with a blue ocean in the background"
        />
      </div>

      <p>
        We&apos;re looking for a <b>kind, patient, trustworthy, and energetic</b> babysitter to help care for
        our toddler, Naomi. We are looking for someone with a flexible schedule who can commit to a regular part-time
        schedule of <b>3-4 hours/day 3-5x/week</b>. Students or individuals with a flexible schedule are encouraged to apply as we don't follow
        a strict schedule and can work around your availability.
      </p>

      <h2 className="mt-[.85rem] mb-[.5rem]">Responsibilities</h2>
      <ul className="mb-4">
        <li>Primarily provide attentive care for Naomi throughout your shift.</li>
        <li>Cleaning and sanitizing the playpen and play mats.</li>
        <li>Wiping down and organizing toys.</li>
        <li>Tidying up Naomi&apos;s play area and putting away any clutter.</li>
      </ul>

      <h2 className="mt-[.85rem] mb-[.5rem]">While Caring for Naomi</h2>
      <p>We value interactive, intentional childcare. We&apos;d love someone who will:</p>
      <ul className="mb-4">
        <li>Offer Naomi water regularly throughout the day.</li>
        <li>Speak to her using proper words (no baby talk).</li>
        <li>Read books with her daily.</li>
        <li>Engage in interactive play and age-appropriate activities.</li>
        <li>No phone/tablet screen time. Listening to and singing nursery rhymes is encouraged.</li>
        <li>Take her for short outdoor walks (with mosquito repellent applied beforehand).</li>
        <li>
          Talk, play, and interact with her as much as possible to support her language, social,
          and cognitive development.
        </li>
      </ul>

      <h2 className="mt-[.85rem] mb-[.5rem]">We&apos;re Looking For Someone Who Is</h2>
      <ul className="mb-4">
        <li>Patient, gentle, and loving with children.</li>
        <li>Honest, dependable, and punctual.</li>
        <li>Clean and organized.</li>
        <li>Enjoys playing, reading, and engaging with toddlers.</li>
        <li>Has previous childcare experience (preferred).</li>
      </ul>

      <p><b>Starting salary:</b> <i>P130/hour</i> (negotiable based on initial performance and experience).</p>

      <p>
        If you genuinely enjoy spending time with children and creating a fun, safe, and nurturing
        environment, we&apos;d love to hear from you! Please reach out to us via <a href="mailto:kenkozma17@gmail.com">email</a>, <a href="tel:639690426656">phone</a> or <a href="https://m.me/kenkozma21">Facebook Messenger</a>.
      </p>
    </section>
  )
}