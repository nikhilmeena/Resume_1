import * as React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AVATAR =
  'https://storage.googleapis.com/storage.magicpath.ai/user/411803889998901248/assets/51b8bd30-1661-443c-8b35-491983f07630.jpeg';
const LINKEDIN = 'https://www.linkedin.com/in/nikhil-meena26';
const EMAIL = 'nikhilmeenaiit@gmail.com';
const PHONE = '+91 8800487634';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const;

const BRANDS = ['ICICI Bank', 'IIT Delhi', 'IIT Kanpur', 'iMobile Pay', 'Fintech', 'Payments'];

const SKILL_CARDS = [
  {
    title: 'Payments & fintech product',
    description:
      'Fund transfer, UPI, beneficiary management, and transaction flows — from discovery through launch on platforms serving millions of users.',
    tags: ['Fund Transfer', 'UPI', 'PRDs', 'Roadmapping'],
  },
  {
    title: 'Product & UX delivery',
    description:
      'Wireframes to shipped features in Figma. User stories, acceptance criteria, and cross-functional delivery with engineering and design.',
    tags: ['Figma', 'User Stories', 'Agile', 'JIRA'],
  },
  {
    title: 'Technical collaboration',
    description:
      'APIs, microservices, and system design basics. Hands-on API testing with Postman and close partnership with backend teams.',
    tags: ['APIs', 'Postman', 'Microservices', 'Python'],
  },
];

const EXPERIENCE = [
  {
    role: 'Product Analyst (TPM Track)',
    company: 'ICICI Bank Ltd.',
    period: 'Jul 2022 – Present',
    location: 'Hyderabad',
  },
];

const EXPERIENCE_BULLETS = [
  'Led product initiatives in the Payments (Funds Transfer) module for iMobile Pay.',
  'Spearheaded revamp of iMobile Pay focusing on payment flows and user experience.',
  'Redesigned beneficiary onboarding, reducing user drop-offs across the funnel.',
  'Optimized payment method selection, improving transaction success rates.',
  'Built scheduled payments and 1-year transaction history features.',
  'Defined PRDs, user stories, and acceptance criteria; tested APIs with Postman and JIRA.',
];

const PROJECTS = [
  {
    title: 'Funds Transfer Revamp',
    subtitle: 'iMobile Pay · End-to-end product',
    description:
      'Redesigned the full fund transfer journey — onboarding, payments, and history — improving UX, success rates, and system performance.',
    gradient: 'from-violet-600/20 via-fuchsia-500/10 to-orange-400/20',
  },
  {
    title: 'Credit Card Management',
    subtitle: 'User journeys & wireframes',
    description:
      'Designed personas, flows, and Figma wireframes to improve usability and feature discoverability through iterative design.',
    gradient: 'from-sky-600/20 via-indigo-500/10 to-violet-400/20',
  },
];

const ACHIEVEMENTS = [
  {
    quote: 'Pride of Nilgiri Award for outstanding contribution to hostel cultural life.',
    name: 'IIT Delhi',
    role: 'Hostel Association',
  },
  {
    quote: 'Rank #2 at Inter-IIT Cultural Meet — Street Play category.',
    name: 'Inter-IIT 2017',
    role: 'Cultural Meet',
  },
  {
    quote: 'Outstanding Contribution to Cultural Activities at IIT Delhi.',
    name: 'IIT Delhi',
    role: 'Cultural Activities',
  },
];

const EDUCATION = [
  {
    degree: 'M.Tech, Chemical Engineering',
    school: 'IIT Kanpur',
    period: '2020 – 2022',
  },
  {
    degree: 'B.Tech, Chemical Engineering',
    school: 'IIT Delhi',
    period: '2016 – 2020',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function NavBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={AVATAR}
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-2 ring-neutral-100"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-neutral-900">Nikhil Kumar Meena</p>
            <p className="flex items-center gap-1.5 text-xs text-neutral-500">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for work
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>

        <a
          href="#contact"
          className="hidden rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 md:inline-flex"
        >
          Hire me
        </a>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-neutral-100 px-6 py-4 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-neutral-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-neutral-200 bg-neutral-50 py-5">
      <div className="marquee-track flex w-max gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-sm font-medium tracking-wide text-neutral-400 uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const [index, setIndex] = React.useState(0);
  const item = ACHIEVEMENTS[index];

  return (
    <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:p-12">
      <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
        <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">{item.quote}</p>
        <p className="mt-6 font-semibold text-neutral-900">{item.name}</p>
        <p className="text-sm text-neutral-500">{item.role}</p>
      </motion.div>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => setIndex((i) => (i === 0 ? ACHIEVEMENTS.length - 1 : i - 1))}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:border-neutral-400"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => setIndex((i) => (i + 1) % ACHIEVEMENTS.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:border-neutral-400"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(formState.subject || 'Portfolio inquiry')}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <NavBar />

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_340px]">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-sm text-neutral-500">🖐️ Hello, I am</p>
            <h1 className="max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
              Technical Product Manager &{' '}
              <span className="text-neutral-400">payments specialist</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              Technical Product Manager with experience in fintech payments and mobile banking.
              I build scalable payment systems, APIs, and microservices — driving end-to-end product
              development with cross-functional teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Hire me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-800 transition hover:border-neutral-400"
              >
                Discover my journey
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-100 shadow-2xl shadow-neutral-200/80">
              <img src={AVATAR} alt="Nikhil Kumar Meena" className="h-full w-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-lg whitespace-nowrap">
              3+ years in product · IIT alum
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee items={BRANDS} />

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div {...fadeUp} className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">What makes me different?</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              I blend product strategy and technical depth to ship high-impact financial products —
              turning complex payment flows into intuitive experiences for millions of users.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium transition hover:border-neutral-400"
              >
                <Download className="h-4 w-4" />
                View on LinkedIn
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-200"
              >
                Browse my work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {SKILL_CARDS.map((card, i) => (
              <motion.article
                key={card.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{card.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase">Experience</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">In a previous life</h2>
            <p className="mt-4 max-w-xl text-neutral-400">
              Product leadership in payments and mobile banking — plus engineering foundations from IIT.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {EXPERIENCE.map((job) => (
              <motion.div
                key={job.company}
                {...fadeUp}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8"
              >
                <p className="text-sm text-neutral-500">{job.period}</p>
                <h3 className="mt-2 text-2xl font-semibold">{job.role}</h3>
                <p className="mt-1 text-neutral-400">
                  At {job.company} · {job.location}
                </p>
              </motion.div>
            ))}
            {EDUCATION.map((edu) => (
              <motion.div
                key={edu.school}
                {...fadeUp}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8"
              >
                <p className="text-sm text-neutral-500">{edu.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{edu.degree}</h3>
                <p className="mt-1 text-neutral-400">{edu.school}</p>
              </motion.div>
            ))}
          </div>

          <motion.ul
            {...fadeUp}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {EXPERIENCE_BULLETS.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-neutral-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                {bullet}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Portfolio</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Showcasing my best work</h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-neutral-200"
            >
              <div
                className={cn(
                  'flex aspect-[16/10] items-end bg-gradient-to-br p-8',
                  project.gradient,
                )}
              >
                <div>
                  <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-16 overflow-hidden rounded-3xl bg-neutral-100 py-4">
          <div className="marquee-track flex w-max gap-8">
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <span key={i} className="whitespace-nowrap text-2xl font-bold text-neutral-300">
                {p.title} ·
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <motion.div {...fadeUp}>
          <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Recognition</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Achievements & highlights</h2>
        </motion.div>
        <motion.div {...fadeUp} className="mt-10">
          <TestimonialCarousel />
        </motion.div>
      </section>

      {/* Interests */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-neutral-500 uppercase tracking-widest">Beyond work</p>
          <p className="mt-3 text-xl text-neutral-700">Music · Fitness · Movies</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">How can I help you?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Got a product role or collaboration in mind? Reach out — I&apos;ll get back to you soon.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-neutral-700 transition hover:text-neutral-900"
                >
                  <Phone className="h-5 w-5 text-neutral-400" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-neutral-700 transition hover:text-neutral-900"
                >
                  <Mail className="h-5 w-5 text-neutral-400" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-700">
                <MapPin className="h-5 w-5 text-neutral-400" />
                Hyderabad, India
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-700 transition hover:text-neutral-900"
                >
                  <LinkedInIcon className="h-5 w-5 text-neutral-400" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-4">
              <label className="block">
                <span className="text-sm font-medium text-neutral-700">Name</span>
                <input
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-neutral-700">Email address</span>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-neutral-700">Subject</span>
                <input
                  value={formState.subject}
                  onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-neutral-700">Message</span>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="mt-1.5 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-400"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-neutral-900 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Send message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
          <div className="flex items-center gap-4">
            <img src={AVATAR} alt="" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold">Nikhil Kumar Meena</p>
              <p className="text-sm text-neutral-500">Technical Product Manager · Payments & fintech</p>
            </div>
          </div>
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Nikhil Kumar Meena</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
