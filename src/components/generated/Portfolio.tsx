import * as React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import MS_OFFICE_LOGO from '@/assets/logos/ms-office.svg';
import OPENSHIFT_LOGO from '@/assets/logos/openshift.svg';
import RESUME_PDF from '@/assets/Nikhil_Kumar_Meena_Resume.pdf';
import { cn } from '@/lib/utils';

const AVATAR =
  'https://storage.googleapis.com/storage.magicpath.ai/user/411803889998901248/assets/51b8bd30-1661-443c-8b35-491983f07630.jpeg';
const LINKEDIN = 'https://www.linkedin.com/in/nikhil-meena26';
const EMAIL = 'nikhilmeena769@gmail.com';
const PHONE = '+91 8800487634';
const LOCATION = 'Financial District, Hyderabad';
const RESUME_URL = RESUME_PDF;
const RESUME_FILENAME = 'Nikhil_Kumar_Meena_Resume.pdf';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

const BRANDS = ['ICICI Bank', 'IIT Delhi', 'IIT Kanpur', 'iMobile Pay', 'Fintech', 'Payments'];

const SKILL_CARDS = [
  {
    title: 'Product management',
    description:
      'Roadmapping, backlog prioritisation, user stories, and stakeholder management — driving Agile/Scrum delivery from discovery through production release.',
    tags: ['Roadmapping', 'Agile/Scrum', 'User Stories', 'JIRA'],
  },
  {
    title: 'Technical delivery',
    description:
      'REST APIs, Swagger/OpenAPI, and Postman testing across microservices deployed on Red Hat OpenShift.',
    tags: ['REST APIs', 'Microservices', 'Red Hat OpenShift', 'Postman'],
  },
  {
    title: 'Domain expertise',
    description:
      'Payments and mobile banking — Funds transfer, NPCI/NBBL integrations, RBI compliance, and PII masking for products serving millions of customers.',
    tags: ['Funds Transfer', 'Payments', 'NPCI/NBBL', 'RBI Compliance'],
  },
];

type Skill = {
  label: string;
  logo?: string;
  fallback: string;
};

const SKILLS: Skill[] = [
  { label: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB', fallback: 'Py' },
  { label: 'Agile methodologies', fallback: 'Ag' },
  { label: 'Jira', logo: 'https://cdn.simpleicons.org/jira/0052CC', fallback: 'Ji' },
  { label: 'Dynatrace', logo: 'https://cdn.simpleicons.org/dynatrace/00EAAB', fallback: 'Dy' },
  { label: 'Vulogx', fallback: 'Vx' },
  { label: 'OpenShift', logo: OPENSHIFT_LOGO, fallback: 'OS' },
  { label: 'MS Office', logo: MS_OFFICE_LOGO, fallback: 'MS' },
  { label: 'Prompt Engineering', fallback: 'PE' },
  { label: 'Postman', logo: 'https://cdn.simpleicons.org/postman/FF6C37', fallback: 'PM' },
  { label: 'Figma', logo: 'https://cdn.simpleicons.org/figma/0ACF83', fallback: 'Fg' },
  { label: 'ChatGPT', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg', fallback: 'CG' },
  { label: 'Cursor', fallback: 'Cu' },
  { label: 'Visual Studio Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', fallback: 'VS' },
  { label: 'SQL', fallback: 'SQL' },
  { label: 'REST APIs', fallback: 'API' },
  { label: 'Swagger/OpenAPI', logo: 'https://cdn.simpleicons.org/swagger/85EA2D', fallback: 'SW' },
  { label: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', fallback: 'GH' },
  { label: 'Linux', logo: 'https://cdn.simpleicons.org/linux/FCC624', fallback: 'Lx' },
];

type Experience = {
  role: string;
  period: string;
  company: string;
  points: string[];
};

const EXPERIENCE: Experience[] = [
  {
    role: 'Technical Product Manager',
    period: 'April 2025 – Present',
    company: 'ICICI Bank Ltd · iMobile Pay',
    points: [
      'Own strategic payment portfolio across Send Money, NBBL merchant integrations, and overseas fund transfer redirection — serving 10M+ iMobile Pay customers.',
      'Delivered NPCI-compliant NBBL integrations enabling merchant payments through QR Scan and Intent-based flows, expanding payment acceptance capabilities on iMobile Pay.',
      'Lead a team of 2 analysts and collaborate with 15+ engineers to drive product delivery, release governance, CI/CD adoption, and stakeholder management.',
      'Manage RBI audit observations, security mandates, and PII data-masking initiatives, ensuring regulatory compliance and the secure handling of customer information.',
    ],
  },
  {
    role: 'Technical Analyst',
    period: 'March 2023 – April 2025',
    company: 'ICICI Bank Ltd · iMobile Pay',
    points: [
      'Owned the end-to-end Send Money module supporting 10M+ customers and ~15M monthly transactions across funds transfer, beneficiary management, authentication, transaction history, and limit management.',
      'Managed delivery of Send Money enhancements across 31 sprints, leading backlog prioritisation, sprint planning, daily scrums, blocker resolution, and release sign-offs.',
      'Defined and validated 35+ API integrations through BRS documents, Swagger reviews, Postman testing, and technical sign-offs for UAT, CUG, and Production releases.',
      'Drove production stability through RCA and monitoring using Dynatrace and Vulogx, reducing Send Money dashboard latency from 3–4 seconds to under 1 second while maintaining <0.1% transaction failures.',
    ],
  },
  {
    role: 'Management Trainee',
    period: 'July 2022 – March 2023',
    company: 'ICICI Bank Ltd · iMobile Pay',
    points: [
      'Analysed business requirements for Send Money journeys in the iMobile Pay application.',
      'Created 50+ user stories and acceptance criteria, facilitating discussions across business, design, and technology teams.',
      'Conducted Figma walkthroughs to validate user journeys, identify gaps, and align requirements before development.',
      'Defined API requirements by mapping UI needs with backend systems such as DEH, IMPS Switch, Core Banking Systems, Falcon, and Apigee Gateway.',
    ],
  },
];

const CERTIFICATIONS = [
  { title: 'Testing Program L3', date: 'May 2026' },
  { title: 'DevOps L3', date: 'Feb 2026' },
  { title: 'Data Analytics & Data Visualization L2', date: 'Apr 2025' },
  { title: 'Technology Architecture L2', date: 'Feb 2025' },
  { title: 'Project Management Program', date: 'Jan 2025' },
];

const ICICI_FOCUS_AREAS = [
  {
    title: 'UI/UX Designing and User Journey',
    description:
      'Mapped customer journeys, created wireframes, and aligned user experience with business goals for seamless digital banking flows.',
  },
  {
    title: 'Microservice Designing',
    description:
      'Coordinated service boundaries, API contracts, and technical requirements with engineering teams for scalable banking systems.',
  },
  {
    title: 'Testing and Integration',
    description:
      'Led API validation, contract testing, and integration checks to ensure reliable connectivity across channels and services.',
  },
  {
    title: 'Monitoring',
    description:
      'Defined key metrics, dashboards, and alerting to track feature adoption, stability, and production performance.',
  },
  {
    title: 'Scrum for CRs or New Development',
    description:
      'Managed sprint planning, change requests, and backlog refinement to deliver new features and product enhancements on time.',
  },
];

const ICICI_STEP_STYLES = [
  {
    gradient: 'bg-gradient-to-r from-orange-500 via-amber-400 to-rose-500',
    accent: 'bg-orange-300 text-orange-950',
    ring: 'ring-orange-300/30',
  },
  {
    gradient: 'bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-600',
    accent: 'bg-cyan-300 text-cyan-950',
    ring: 'ring-cyan-300/30',
  },
  {
    gradient: 'bg-gradient-to-r from-emerald-500 via-lime-400 to-teal-500',
    accent: 'bg-emerald-300 text-emerald-950',
    ring: 'ring-emerald-300/30',
  },
  {
    gradient: 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600',
    accent: 'bg-fuchsia-300 text-fuchsia-950',
    ring: 'ring-fuchsia-300/30',
  },
  {
    gradient: 'bg-gradient-to-r from-amber-500 via-orange-400 to-red-500',
    accent: 'bg-amber-300 text-amber-950',
    ring: 'ring-amber-300/30',
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
    period: '2015 – 2019',
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
          href={RESUME_URL}
          download={RESUME_FILENAME}
          aria-label="Download resume"
          className="hidden items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 md:inline-flex"
        >
          <Download className="h-4 w-4" />
          Resume
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
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="mt-1 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            onClick={() => setOpen(false)}
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
}

function Marquee({ items }: { items: string[] }) {
  const [offset, setOffset] = React.useState(0);
  const [isControlled, setIsControlled] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const autoScrollRef = React.useRef<number>(0);
  const animationStartRef = React.useRef<number>(0);

  const itemWidth = 150;
  const maxOffset = items.length * itemWidth;
  const animationDuration = 28000; // 28 seconds like original CSS animation

  // Auto-scroll animation loop
  React.useEffect(() => {
    if (isControlled) return; // Don't auto-scroll while being controlled

    const startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % animationDuration) / animationDuration;
      setOffset((progress * maxOffset) % maxOffset);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isControlled, maxOffset, animationDuration]);

  const moveForward = (distance: number) => {
    setOffset((prev) => {
      const newOffset = prev + distance;
      return newOffset > maxOffset ? newOffset - maxOffset : newOffset;
    });
  };

  const moveBackward = (distance: number) => {
    setOffset((prev) => {
      const newOffset = prev - distance;
      return newOffset < 0 ? maxOffset + newOffset : newOffset;
    });
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsControlled(true);
    setTouchStart(e.touches[0].clientX);
  };

  // Handle touch move (drag)
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentX = e.touches[0].clientX;
    const diff = touchStart - currentX;

    if (Math.abs(diff) > 5) {
      if (diff > 0) {
        moveForward(diff * 0.5);
      } else {
        moveBackward(Math.abs(diff) * 0.5);
      }
      setTouchStart(currentX);
    }
  };

  // Handle touch end - resume auto-scroll
  const handleTouchEnd = () => {
    setTouchStart(null);
    setIsControlled(false);
  };

  // Trackpad/mouse wheel support
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setIsControlled(true);

    if (e.deltaX > 0) {
      moveForward(Math.abs(e.deltaX) * 0.5);
    } else if (e.deltaX < 0) {
      moveBackward(Math.abs(e.deltaX) * 0.5);
    }

    // Resume auto-scroll after 2 seconds of inactivity
    if (containerRef.current) {
      clearTimeout((containerRef.current as any).__wheelTimeout);
      (containerRef.current as any).__wheelTimeout = setTimeout(() => {
        setIsControlled(false);
      }, 2000);
    }
  };

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-neutral-200 bg-neutral-50 py-5">
      <div 
        ref={containerRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <div
          className="flex w-max gap-12 transition-transform duration-100 ease-out"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {doubled.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-neutral-400 uppercase pointer-events-none select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillMarquee({ items }: { items: Skill[] }) {
  const [offset, setOffset] = React.useState(0);
  const [isControlled, setIsControlled] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const itemWidth = 220; // Approximate width of each skill badge
  const maxOffset = items.length * itemWidth;
  const animationDuration = 28000;

  // Auto-scroll animation loop
  React.useEffect(() => {
    if (isControlled) return;

    const startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % animationDuration) / animationDuration;
      setOffset((progress * maxOffset) % maxOffset);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isControlled, maxOffset, animationDuration]);

  const moveForward = (distance: number) => {
    setOffset((prev) => {
      const newOffset = prev + distance;
      return newOffset > maxOffset ? newOffset - maxOffset : newOffset;
    });
  };

  const moveBackward = (distance: number) => {
    setOffset((prev) => {
      const newOffset = prev - distance;
      return newOffset < 0 ? maxOffset + newOffset : newOffset;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsControlled(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentX = e.touches[0].clientX;
    const diff = touchStart - currentX;

    if (Math.abs(diff) > 5) {
      if (diff > 0) {
        moveForward(diff * 0.5);
      } else {
        moveBackward(Math.abs(diff) * 0.5);
      }
      setTouchStart(currentX);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setIsControlled(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setIsControlled(true);

    if (e.deltaX > 0) {
      moveForward(Math.abs(e.deltaX) * 0.5);
    } else if (e.deltaX < 0) {
      moveBackward(Math.abs(e.deltaX) * 0.5);
    }

    if (containerRef.current) {
      clearTimeout((containerRef.current as any).__wheelTimeout);
      (containerRef.current as any).__wheelTimeout = setTimeout(() => {
        setIsControlled(false);
      }, 2000);
    }
  };

  const doubled = [...items, ...items];

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white py-5 shadow-sm cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      <div 
        className="flex w-max items-center gap-6 px-6 transition-transform duration-100 ease-out"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm pointer-events-none select-none"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
              {item.logo ? (
                <img src={item.logo} alt={`${item.label} logo`} className="h-5 w-5 object-contain" />
              ) : (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-semibold text-white">
                  {item.fallback}
                </span>
              )}
            </span>
            {item.label}
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
  const [formState, setFormState] = React.useState({ name: '', email: '', message: '' });
  const [activeFocusIndex, setActiveFocusIndex] = React.useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Message from website');
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    );
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    // Create and click a hidden anchor to trigger the user's mail client reliably
    try {
      const a = document.createElement('a');
      a.href = mailto;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      // Fallback to location assignment
      window.location.href = mailto;
    }
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
              <span className="text-neutral-400">specializing in payments and fintech.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              Technical Product Manager with 4+ years at ICICI Bank, building payment products for
              10M+ users (~15M monthly transactions). IIT Delhi & IIT Kanpur graduate owning Send
              Money, NBBL, and RBI compliance initiatives across 15+ engineers — from roadmap through
              production release.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={RESUME_URL}
                download={RESUME_FILENAME}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                <Download className="h-4 w-4" />
                Download resume
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
              4+ years in product management
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

      {/* Education */}
      <section id="education" className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase">Education</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Academic background</h2>
            <p className="mt-4 max-w-xl text-neutral-400">
              Engineering degrees from India’s premier institutes, highlighting IIT Kanpur and IIT Delhi.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {EDUCATION.map((edu) => (
              <motion.div
                key={edu.school}
                {...fadeUp}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8"
              >
                <p className="text-sm text-neutral-500">{edu.period}</p>
                <h3 className="mt-2 text-2xl font-semibold">{edu.degree}</h3>
                <p className="mt-1 text-neutral-400">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div {...fadeUp} className="text-center mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Portfolio</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            PRODUCT MANAGER
          </h2>
          <p className="mt-2 text-xl font-semibold text-neutral-900">ICICI Bank Ltd</p>
          <p className="mt-3 text-sm text-neutral-500">Hyderabad · July 2022 – Present</p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-500">
            Selected product work focused on payments, user experience, and end-to-end delivery across mobile banking.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-16">
          <div className="relative">
            <div className="absolute inset-x-10 -top-6 h-24 rounded-[2rem] bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute inset-x-10 -bottom-6 h-24 rounded-[2rem] bg-cyan-500/20 blur-3xl" />

            <motion.article
              {...fadeUp}
              className={cn(
                'relative overflow-hidden rounded-[2rem] border transition duration-300 hover:-translate-y-1 hover:shadow-2xl',
                ICICI_STEP_STYLES[activeFocusIndex].gradient,
                'border-transparent shadow-2xl',
              )}
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.4),_transparent_30%)]" />
              <div className="relative p-10 sm:p-12">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium tracking-widest text-white/80 uppercase">Step {activeFocusIndex + 1} of {ICICI_FOCUS_AREAS.length}</p>
                    <h3 className="mt-4 text-3xl font-bold leading-relaxed text-white">{ICICI_FOCUS_AREAS[activeFocusIndex].title}</h3>
                  </div>
                </div>

                <p className="mt-6 max-w-3xl text-base leading-8 text-white/90">
                  {ICICI_FOCUS_AREAS[activeFocusIndex].description}
                </p>
              </div>
            </motion.article>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setActiveFocusIndex((index) => Math.max(index - 1, 0))}
              disabled={activeFocusIndex === 0}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/90 text-neutral-900 shadow-lg transition hover:border-white/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {ICICI_FOCUS_AREAS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveFocusIndex(index)}
                  className={cn(
                    'h-3 w-3 rounded-full transition-all duration-200',
                    index === activeFocusIndex
                      ? ICICI_STEP_STYLES[index].accent
                      : 'bg-white/70 hover:bg-white',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveFocusIndex((index) => Math.min(index + 1, ICICI_FOCUS_AREAS.length - 1))}
              disabled={activeFocusIndex === ICICI_FOCUS_AREAS.length - 1}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/90 text-neutral-900 shadow-lg transition hover:border-white/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="mt-20">
          <h3 className="text-center text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
            Experience timeline
          </h3>
          <div className="relative mt-12 space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-neutral-200 md:before:left-1/2">
            {EXPERIENCE.map((job, i) => (
              <motion.article
                key={job.role}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-8 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
              >
                <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-white bg-neutral-900 shadow md:left-1/2 md:-translate-x-1/2" />
                <div className={cn('md:text-right', i % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12 md:text-left')}>
                  <p className="text-sm font-medium text-neutral-500">{job.period}</p>
                  <h4 className="mt-1 text-xl font-semibold text-neutral-900">{job.role}</h4>
                  <p className="mt-1 text-sm text-neutral-600">{job.company}</p>
                </div>
                <div className={cn(i % 2 === 0 ? 'md:col-start-2 md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12')}>
                  <ul className="mt-4 space-y-3 md:mt-0">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

      </section>

      {/* Videos */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center mx-auto max-w-3xl mb-12">
            <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Featured</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">iMobile Pay . Send Money </h2>
          </motion.div>

          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-2">
            {[
              { id: 'XXBUIndC2M4', title: 'Video 1' },
              { id: 'w5ewSWDDHs4', title: 'Video 2' },
              { id: 'FlB4LBNrWtc', title: 'Video 3' },
              { id: 'S3C4MAwztN0', title: 'Video 4' },
            ].map((video) => (
              <div key={video.id} className="overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div {...fadeUp} className="text-center mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Skills</p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-500">
            A broad technical and delivery skillset for fintech, API integration, observability, and modern product workflows.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-12">
          <SkillMarquee items={SKILLS} />
        </motion.div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <motion.div {...fadeUp} className="text-center mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase">Training</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Training &amp; certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-neutral-500">
            Continuous upskilling across product, architecture, DevOps, and testing disciplines.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.article
              key={cert.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-300 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-neutral-900">{cert.title}</h3>
              <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                {cert.date}
              </span>
            </motion.article>
          ))}
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
                {LOCATION}
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-700 transition hover:text-neutral-900"
                >
                  <LinkedInIcon className="h-5 w-5 text-neutral-400" />
                  www.linkedin.com/in/nikhil-meena26
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
                <span className="text-sm font-medium text-neutral-700">Message</span>
                <textarea
                  required
                  rows={6}
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
