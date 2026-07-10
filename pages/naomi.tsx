import Head from 'next/head'

export default function NaomiPage() {
  return (
    <section className="md-content naomi">
      <Head>
        <title>Ken Kozma - Looking For Baby Sitter</title>
        <meta name="description" content="Looking for a reliable, caring babysitter for Naomi with flexible schedule details and important information." />
      </Head>

      <h1>Looking For a Babysitter for Naomi</h1>

      <div className="mb-4 overflow-hidden rounded-md border border-[#D3D3D3] bg-[#fdfcf8]">
        <img
          className="h-auto w-full object-cover"
          src="/naomi.jpeg"
          alt="Naomi sitting at a table with a blue ocean in the background"
        />
      </div>

      <p>
        We are looking for a dependable, warm, and attentive babysitter to help care for Naomi.
        The right person will be patient, responsible, and comfortable creating a safe, calm, and
        engaging environment. This role is ideal for someone who enjoys working with children and
        can provide consistent support for a family with a busy schedule.
      </p>

      <h2 className="mt-[.85rem] mb-[.5rem]">Important Details</h2>
      <ul className="mb-4">
        <li>Flexible weekday availability for a maximum of 4 hours/day 3-4x per week.</li>
        <li>Prior childcare experience and solid references are highly valued.</li>
        <li>Comfort with light meal prep and playtime routines is a plus.</li>
        <li>Must be reliable, punctual, and able to communicate clearly.</li>
      </ul>

      <h2 className="mt-[.85rem] mb-[.5rem]">Additional Information</h2>
      <p>
        Pay and scheduling can be discussed with the right candidate. If you are interested,
        please reach out with a short introduction, your availability, and any relevant experience.
        We appreciate thoughtful replies and look forward to finding someone who feels like a good
        fit for Naomi and the family.
      </p>
    </section>
  )
}