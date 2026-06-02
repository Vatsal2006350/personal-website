import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'motion/react';
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import { Analytics } from '@vercel/analytics/react';

import meHero from './assets/img/me4.jpg';
import meAlt from './assets/img/me3.jpg';
import twinmindImg from './assets/img/twinmind.png';
import narrativeImg from './assets/img/narrative.png';
import geoomniiImg from './assets/img/geoomnii.png';
import digipalsImg from './assets/img/digipals-case/site-meta.png';
import resume from './assets/downloads/resume.pdf';
import twinmindEnterpriseTeam from './assets/img/twinmind-case/enterprise-team-03.png';
import twinmindEnterpriseMemory from './assets/img/twinmind-case/enterprise-memory-08.png';
import twinmindEnterpriseFeatures from './assets/img/twinmind-case/enterprise-roadmap-16.png';
import twinmindEnterpriseRoadmap from './assets/img/twinmind-case/enterprise-roadmap-17.png';
import twinmindEnterpriseMarket from './assets/img/twinmind-case/enterprise-roadmap-18.png';
import twinmindMobileSummary from './assets/img/twinmind-case/mobile-summary.png';
import twinmindMobileMemories from './assets/img/twinmind-case/mobile-memories.png';
import twinmindMobileHome from './assets/img/twinmind-case/mobile-home.png';
import twinmindMobileDigest from './assets/img/twinmind-case/mobile-digest.png';
import twinmindChromeEmail from './assets/img/twinmind-case/chrome-write-emails.png';
import twinmindChromeCapture from './assets/img/twinmind-case/chrome-zoom-calls.png';
import digipalsLaunchHero from './assets/img/digipals-case/yc-launch-hero.png';
import digipalsWidgets from './assets/img/digipals-case/yc-widgets.jpg';
import digipalsTeam from './assets/img/digipals-case/yc-team.jpg';

import ycLogo from './assets/img/logos/yc.svg';
import digipalsLogo from './assets/img/logos/digipals.png';
import twinmindLogo from './assets/img/logos/twinmind.jpeg';
import narrativeLogo from './assets/img/logos/narrative.jpeg';
import geoomniiLogo from './assets/img/logos/geoomnii.jpeg';
import apparelLogo from './assets/img/logos/apparel.png';
import stanfordLogo from './assets/img/logos/stanford.svg';

import fitnessImg from './assets/img/ventures/fitness-freak.png';
import tedxImg from './assets/img/ventures/tedx.png';
import buildspaceImg from './assets/img/ventures/buildspace.png';
import researchImg from './assets/img/ventures/research.png';
import copImg from './assets/img/ventures/cop.png';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vatsal-shah-a7a0b1255/',
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Vatsal2006350',
    icon: FiGithub,
  },
  {
    label: 'Email',
    href: 'mailto:svatsal@umich.edu',
    icon: FiMail,
  },
];

const metrics = [
  { value: '100K+', label: 'users reached through product and growth' },
  { value: '$5.7M', label: 'seed raise support at TwinMind' },
  { value: 'YC F25', label: 'building in the YC ecosystem' },
  { value: '10K+', label: 'community built from scratch' },
];

const companies = [
  { name: 'DigiPals', logo: digipalsLogo },
  { name: 'TwinMind', logo: twinmindLogo },
  { name: 'Narrative', logo: narrativeLogo },
  { name: 'Geoomnii', logo: geoomniiLogo },
  { name: 'Apparel Group', logo: apparelLogo },
];

const companyLogos = {
  DigiPals: digipalsLogo,
  'Stanford University': stanfordLogo,
  TwinMind: twinmindLogo,
  Narrative: narrativeLogo,
  Geoomnii: geoomniiLogo,
  'Apparel Group': apparelLogo,
};

// Logos that are transparent marks (not full-bleed app icons) get a light
// backing tile and are contained with padding instead of cover-cropped.
const markLogos = { 'Stanford University': true };

const companyInitials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const caseStudies = [
  {
    id: 'digipals',
    title: 'DigiPals',
    eyebrow: 'Product engineering',
    year: '2025',
    image: digipalsImg,
    mediaFit: 'contain',
    tools: ['AI-native social', 'Product engineering', 'Consumer'],
    summary:
      'A YC-backed AI-native social operating system for making group chats actually help friends spend more time together.',
    impact:
      'As DigiPals\' first engineering intern hire, I bridge product vision and technical execution on AI widgets that turn group-chat intent into real-world plans, memories, and actions.',
    details: [
      'Joined as the first engineering intern hire, working directly with the founding team on product direction, technical architecture, and early user feedback.',
      'Work on the product layer for AI-native group chats: widgets that suggest plans, coordinate availability, split decisions, and preserve shared memories.',
      'Build product flows from user insight through spec, frontend, backend, testing, launch polish, and iteration.',
    ],
  },
  {
    id: 'twinmind',
    title: 'TwinMind',
    eyebrow: 'Early founding product lead',
    year: '2024-2025',
    image: twinmindImg,
    tools: ['AI memory', 'Chrome extension', 'B2B pilots'],
    summary:
      'An AI second brain for meetings, lectures, emails, and teams: capture everything, retrieve context, and turn memory into action.',
    impact:
      'Joined around two months after the company started and led product and engineering across the Chrome extension, web app, AI memory surfaces, retention loops, growth launches, and enterprise pilots.',
    details: [
      'Owned product direction from user pain to shipped UX: meeting memory, privacy controls, multilingual search, task extraction, daily digest, and cross-platform recall.',
      'Built core product infrastructure across React, Chrome extension surfaces, RAG retrieval, Postgres, Vercel Worker Functions, local encryption, chunking, and fallback workflows.',
      'Helped turn TwinMind from a consumer memory app into a credible enterprise productivity platform through B2B decks, pilots, and roadmap framing.',
    ],
  },
  {
    id: 'narrative',
    title: 'Narrative',
    eyebrow: 'CPO and co-founder',
    year: '2025',
    image: narrativeImg,
    tools: ['Founder tools', 'Customer discovery', 'AI video'],
    summary:
      'AI-powered video editing built from deep creator research, focused on cutting repetitive manual editing time.',
    impact:
      'Led the product from zero through customer discovery, MVP definition, demo narrative, and fundraising readiness.',
    details: [
      'Ran 100+ structured interviews with creators, editors, and agencies to find real workflow pain.',
      'Converted research into product strategy, user journeys, PRDs, and a sequenced MVP roadmap.',
      'Led weekly product execution and shaped the demo story that helped communicate traction and vision.',
    ],
  },
  {
    id: 'geoomnii',
    title: 'Geoomnii',
    eyebrow: 'Technical product manager',
    year: '2022-2023',
    image: geoomniiImg,
    tools: ['E-commerce', 'Operations', 'Analytics'],
    summary:
      'A Dubai e-commerce platform effort spanning catalog, checkout, inventory, fulfillment, and reporting.',
    impact:
      'Helped scale the platform from zero into an operating system for commerce with clearer metrics and lower operating drag.',
    details: [
      'Onboarded 500+ products and worked across catalog management, payments, and order operations.',
      'Scoped real-time inventory sync and exception workflows that reduced operating costs by 40%.',
      'Defined KPIs and dashboards for conversion, cancellations, fulfillment SLAs, and roadmap tradeoffs.',
    ],
  },
];

const roles = [
  ['DigiPals', 'Product Engineer', '2025 - Present'],
  ['Stanford University', 'AI Researcher', '2025 - Present'],
  ['TwinMind', 'First Founding Product Manager', '2024 - 2025'],
  ['Narrative', 'CPO and Co-Founder', '2025'],
  ['Geoomnii', 'Technical Product Manager', '2022 - 2023'],
  ['Apparel Group', 'Product and Marketing Analyst', '2022'],
];

const twinmindPMStats = [
  ['0 -> 1', 'Joined as an early founding team member and helped define the core product loops.'],
  ['10 -> 100K+', 'Joined around 10 beta users and helped scale TwinMind to 100K+ users.'],
  ['#2', 'Product of the Day launch on Product Hunt with thousands of users in the first 24 hours.'],
  ['20+', 'Universities reached through a student ambassador program and grassroots growth engine.'],
];

const twinmindImpactMetrics = [
  {
    metric: '10 -> 100K+',
    label: 'User growth arc',
    outcome:
      'Joined when TwinMind had roughly 10 beta users and helped scale the product to 100K+ users by the time I left.',
    how:
      'Shipped the core memory surfaces, Chrome extension workflows, onboarding fixes, daily retention loops, and launch motions that turned early curiosity into repeat usage.',
  },
  {
    metric: '#2',
    label: 'Product Hunt launch',
    outcome:
      'Helped TwinMind reach #2 Product of the Day on Product Hunt and drive thousands of new users in the first 24 hours.',
    how:
      'Worked across positioning, launch copy, visuals, community activation, founder outreach, and rapid response to early-user feedback during the launch window.',
  },
  {
    metric: '+30%',
    label: 'Retention loop',
    outcome:
      'Designed and shipped the daily digest/recap loop that lifted retention by roughly 30%.',
    how:
      'Converted captured meetings, lectures, and conversations into daily priorities, action items, follow-ups, and personalized context users wanted to check every morning.',
  },
  {
    metric: '70+',
    label: 'Student ambassadors',
    outcome:
      'Built a 70+ person student ambassador program across 20+ universities and helped increase adoption inside the student segment by about 20%.',
    how:
      'Positioned TwinMind around lecture notes, study guides, meeting recall, and campus productivity; then built ambassador playbooks, recruiting flows, and grassroots launch pushes.',
  },
  {
    metric: '27K+',
    label: 'Enterprise access',
    outcome:
      'Supported enterprise pilots and LOIs with organizations including Innoventures Education and Apparel Group, representing access to 27K+ employees.',
    how:
      'Translated the consumer memory product into an enterprise ROI story: meeting summaries, bilingual knowledge capture, action tracking, and searchable institutional context.',
  },
  {
    metric: 'Press',
    label: 'Business Insider feature',
    outcome:
      'Helped support the product and growth narrative around TwinMind as it was featured in Business Insider coverage of the ex-Google X founding team.',
    how:
      'Sharpened the second-brain positioning, Chrome extension story, and product surfaces so the launch narrative was credible to users, press, investors, and partners.',
  },
];

const twinmindProductSurfaces = [
  {
    label: 'Mobile app',
    title: 'Second-brain home',
    copy:
      'Reframed the app around memory as the core habit: capture notes, view tasks, open previous conversations, and ask across everything in one place.',
    image: twinmindMobileHome,
    alt: 'TwinMind mobile home screen with digest, memory search, tasks, notes, and capture notes CTA',
    orientation: 'mobile',
  },
  {
    label: 'Memory library',
    title: 'Searchable meeting memory',
    copy:
      'Built the recall layer around notes, chats, meeting titles, timestamps, and search so users could actually get back to what TwinMind captured.',
    image: twinmindMobileMemories,
    alt: 'TwinMind memories list showing searchable notes and meeting records',
    orientation: 'mobile',
  },
  {
    label: 'Meeting summary',
    title: 'Action layer',
    copy:
      'Turned raw transcripts into structured summaries, attendee-ready share flows, edit controls, and follow-up surfaces.',
    image: twinmindMobileSummary,
    alt: 'TwinMind meeting summary screen with overview, share summary, edit, and share controls',
    orientation: 'mobile',
  },
  {
    label: 'Daily digest',
    title: 'Retention loop',
    copy:
      'Designed the daily brief as a reason to come back: personal context, top priorities, and task extraction from the previous day of captured memories.',
    image: twinmindMobileDigest,
    alt: 'TwinMind daily digest screen with daily brief and top tasks',
    orientation: 'mobile',
  },
  {
    label: 'Chrome extension',
    title: 'Browser capture and context',
    copy:
      'Helped shape the extension as the work-layer companion: capture meetings, understand browser context, and answer questions without forcing users back into the app.',
    image: twinmindChromeCapture,
    alt: 'TwinMind Chrome extension tutorial visual showing meeting capture and proactive answers',
    orientation: 'wide',
  },
  {
    label: 'Email assistant',
    title: 'Memory-powered drafting',
    copy:
      'Extended the memory layer into action: draft replies and follow-ups from meeting context, email history, and user intent.',
    image: twinmindChromeEmail,
    alt: 'TwinMind browser email assistant visual showing automatic email drafting',
    orientation: 'wide',
  },
  {
    label: 'Speech AI',
    title: 'Summer 2025 transcription wedge',
    copy:
      'During my summer 2025 internship, I helped productize lower-cost transcription around accuracy, diarization, language coverage, and scalable long-form audio.',
    image: twinmindEnterpriseFeatures,
    alt: 'TwinMind enterprise deck slide showing recently added features including audio and extension workflows',
    orientation: 'wide',
    href: 'https://twinmind.com/transcribe',
  },
];

const twinmindEnterpriseArtifacts = [
  {
    title: 'Product seat on the founding team',
    copy:
      'Deck artifact showing my role as Product on the founding team, operating between strategy, design, and engineering.',
    image: twinmindEnterpriseTeam,
  },
  {
    title: 'Institutional memory wedge',
    copy:
      'Positioned calls, emails, PDFs, tabs, and chats as searchable company memory, not just meeting notes.',
    image: twinmindEnterpriseMemory,
  },
  {
    title: 'Feature roadmap',
    copy:
      'Mapped the product arc from iOS memory and Chrome extension to Mac overlay, CRM integrations, APIs, plugins, and enterprise memory search.',
    image: twinmindEnterpriseRoadmap,
  },
  {
    title: 'Demand-driven feature expansion',
    copy:
      'Used customer demand to prioritize integrations, web extension capture, live memory visualization, and browser agents.',
    image: twinmindEnterpriseFeatures,
  },
  {
    title: 'UAE enterprise thesis',
    copy:
      'Built the B2B story around bilingual meetings, scattered notes, GenAI ROI pressure, and organizations that needed value on day one.',
    image: twinmindEnterpriseMarket,
  },
];

const digipalsStats = [
  ['First eng intern', 'Joined as DigiPals\' first engineering intern hire, working close to the founding team.'],
  ['YC F25', 'Backed by Y Combinator and building in the current AI consumer wave.'],
  ['Group chat', 'The product starts where social plans already happen, then adds AI inside the thread.'],
  ['Widgets', 'Public launch materials show reservations, suggested spots, calendars, sharing, and memories.'],
];

const digipalsSurfaces = [
  {
    label: 'Public launch',
    title: 'AI-native group chats',
    copy:
      'The core wedge is not another planning app. It is group chat with AI-native widgets embedded where friend groups already coordinate.',
    image: digipalsLaunchHero,
    alt: 'DigiPals YC launch graphic showing AI-native group chats that get you outside',
  },
  {
    label: 'Interaction model',
    title: 'Widgets that become actions',
    copy:
      'Instead of making users leave the chat, the product surfaces suggested spots, availability, booking confirmations, and shared memories inside the conversation.',
    image: digipalsWidgets,
    alt: 'DigiPals product screenshots showing group chat widgets for coffee, dinner, and movies',
  },
  {
    label: 'Brand signal',
    title: 'Where AI makes us more social',
    copy:
      'The website frames the company around a human promise: AI should reduce coordination drag and help people spend more time together offline.',
    image: digipalsImg,
    alt: 'DigiPals website hero image with the tagline Where AI makes us more social',
  },
  {
    label: 'Team and launch',
    title: 'YC-backed consumer startup energy',
    copy:
      'A small founding team moving fast in public, with the product story focused on social behavior rather than generic AI assistance.',
    image: digipalsTeam,
    alt: 'DigiPals founding team photo from the YC launch page',
  },
];

const recognition = [
  {
    title: 'Featured in Business Insider',
    body: 'TwinMind AI assistant coverage.',
    href: 'https://www.businessinsider.com/twinmind-chatgpt-former-google-x-team-builds-ai-assistant-2024-11',
  },
  {
    title: 'Featured in Times of India',
    body: 'Book coverage for Rebirth of Strength.',
    href: 'https://timesofindia.indiatimes.com/life-style/spotlight/vatsal-shahs-new-book-rebirth-of-strength-provides-a-glimpse-into-his-inspirational-journey/articleshow/106507239.cms',
  },
  {
    title: '#2 Product of the Day',
    body: 'TwinMind launch on Product Hunt.',
    href: 'https://www.producthunt.com/products/twinmind/launches/twinmind',
  },
  {
    title: 'Best STEM MENA Award',
    body: 'Winner in 2023.',
    href: 'https://teachmiddleeastmag.com/stem-mena-awards-2023-winners-announced/',
  },
];

const ventures = [
  {
    title: 'Fitness Freak',
    label: 'Community',
    stat: '10K+ members',
    copy: 'A wellness community started after a personal fitness transformation, built around accountability and momentum.',
    image: fitnessImg,
  },
  {
    title: 'Rebirth of Strength',
    label: 'Book',
    stat: 'Published story',
    copy: 'A personal story about discipline, health, and rebuilding identity through sustained action.',
    image: tedxImg,
    href: 'https://www.amazon.com/Rebirth-Strength-Vatsal-Shah-ebook/dp/B0CJMTRZN3',
  },
  {
    title: 'Startup Ecosystem',
    label: 'Operating mode',
    stat: 'Founders + users',
    copy: 'Demos, launches, customer calls, community loops, and narrative building for fast-moving teams.',
    image: buildspaceImg,
  },
  {
    title: 'Research Interfaces',
    label: 'AI',
    stat: 'Stanford',
    copy: 'Applied AI research work focused on evaluation, information systems, and practical user-facing workflows.',
    image: researchImg,
  },
  {
    title: 'Events and Community',
    label: 'Leadership',
    stat: 'MENA + US',
    copy: 'Builder communities, student ecosystems, and founder-facing moments across Dubai, Ann Arbor, and beyond.',
    image: copImg,
  },
  {
    title: 'Personal Operating System',
    label: 'Practice',
    stat: 'Daily reps',
    copy: 'Gym, writing, reading, product taste, and the compounding habit of making hard things feel normal.',
    image: meAlt,
  },
];

const navItems = [
  { label: 'Work', page: 'home', target: 'work' },
  { label: 'About', page: 'about' },
  { label: 'Playground', page: 'playground' },
  { label: 'Contact', page: 'home', target: 'contact' },
];

const rotatingWords = ['AI-native', 'founder-speed', 'human-scale', 'shippable'];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const groupVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

function App() {
  const [wordIndex, setWordIndex] = useState(0);
  const [view, setView] = useState('home');
  const [caseId, setCaseId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 24, mass: 0.25 });

  const activeProject = useMemo(
    () => caseStudies.find((project) => project.id === caseId),
    [caseId]
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 1800);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '');
      const matchedProject = caseStudies.find((project) => project.id === hash);

      if (matchedProject) {
        setCaseId(hash);
        setView('case');
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }

      setCaseId(null);

      if (hash === 'about' || hash === 'playground') {
        setView(hash);
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }

      setView('home');

      if (hash) {
        window.setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const navigate = (page, target) => {
    setMobileOpen(false);
    setCaseId(null);
    setView(page);
    const nextHash = page === 'home' ? target || 'home' : page;
    window.history.pushState(null, '', `#${nextHash}`);

    window.setTimeout(() => {
      if (page === 'home' && target) {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 40);
  };

  const openCase = (id) => {
    setCaseId(id);
    setView('case');
    setMobileOpen(false);
    window.history.pushState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeCase = () => {
    setCaseId(null);
    setView('home');
    window.history.pushState(null, '', '#work');
    window.setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name') || 'Portfolio visitor';
    const email = form.get('email') || '';
    const message = form.get('message') || '';
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:svatsal@umich.edu?subject=${encodeURIComponent(
      'Portfolio inquiry'
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="App">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <SiteNav
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        navigate={navigate}
        currentView={view}
      />

      <AnimatePresence mode="wait">
        {activeProject ? (
          <CaseStudy key={activeProject.id} project={activeProject} onBack={closeCase} />
        ) : view === 'about' ? (
          <AboutPage key="about" navigate={navigate} />
        ) : view === 'playground' ? (
          <PlaygroundPage key="playground" navigate={navigate} />
        ) : (
          <HomePage
            key="home"
            word={rotatingWords[wordIndex]}
            navigate={navigate}
            openCase={openCase}
            onContactSubmit={handleContactSubmit}
          />
        )}
      </AnimatePresence>

      <Footer />
      <Analytics />
    </div>
  );
}

function SiteNav({ mobileOpen, setMobileOpen, navigate, currentView }) {
  return (
    <>
      <motion.header
        className="site-nav"
        initial={{ x: '-50%', y: -24, opacity: 0 }}
        animate={{ x: '-50%', y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="brand-lockup" type="button" onClick={() => navigate('home', 'home')}>
          <span className="brand-mark">VS</span>
          <span>Vatsal Shah</span>
        </button>

        <nav className="desktop-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={currentView === item.page && !item.target ? 'active' : ''}
              type="button"
              onClick={() => navigate(item.page, item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a className="nav-resume" href={resume} download>
          <FiDownload aria-hidden="true" />
          <span>Resume</span>
        </a>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <button key={item.label} type="button" onClick={() => navigate(item.page, item.target)}>
                {item.label}
              </button>
            ))}
            <a href={resume} download>
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function HomePage({ word, navigate, openCase, onContactSubmit }) {
  return (
    <motion.main
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32 }}
    >
      <Hero word={word} navigate={navigate} />
      <LogoStrip />
      <ProjectGallery openCase={openCase} />
      <EcosystemPreview navigate={navigate} />
      <ContactSection onSubmit={onContactSubmit} />
    </motion.main>
  );
}

function LogoStrip() {
  return (
    <motion.section
      className="trust-band"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-kicker">Backed by &amp; built with</span>
      <div className="logo-row">
        <a
          className="yc-badge"
          href="https://www.ycombinator.com/companies"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ycLogo} alt="Y Combinator" />
          <span>
            <small>Backed by</small>
            Y Combinator · F25
          </span>
        </a>
        {companies.map((company) => (
          <div className="logo-tile" key={company.name}>
            <img src={company.logo} alt={`${company.name} logo`} />
            <span className="logo-name">{company.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function Hero({ word, navigate }) {
  return (
    <section className="hero" id="home">
      <div className="section-frame hero-frame">
        <motion.div
          className="hero-copy"
          variants={groupVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="eyebrow-row" variants={itemVariants}>
            <span>Product engineer</span>
            <span>Ann Arbor + Dubai</span>
            <span>AI products</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            <span className="hero-line">Vatsal Shah</span>
            <span className="hero-line">builds</span>
            <span className="hero-line">
              <AnimatedWord word={word} />
            </span>
            <span className="hero-line">products for</span>
            <span className="hero-line">startup-speed</span>
            <span className="hero-line">teams.</span>
          </motion.h1>

          <motion.p className="hero-lede" variants={itemVariants}>
            Computer Science student at the University of Michigan, product operator, and builder
            across YC-backed social AI, AI memory, creator tools, commerce systems, and startup
            growth.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <button className="primary-action" type="button" onClick={() => navigate('home', 'work')}>
              <span>See work</span>
              <FiArrowUpRight aria-hidden="true" />
            </button>
            <button className="secondary-action" type="button" onClick={() => navigate('about')}>
              <span>About</span>
              <FiBookOpen aria-hidden="true" />
            </button>
          </motion.div>

          <motion.div className="social-row" variants={itemVariants}>
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-panel">
            <img src={meHero} alt="Vatsal Shah" />
            <div className="portrait-caption">
              <span>Currently</span>
              <strong>Building AI-native social products at startup pace</strong>
            </div>
          </div>

          <div className="motion-spec">
            <span className="fig-label">Operator mode</span>
            <code>{'{ customer insight -> product story -> shipped loop }'}</code>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="metric-strip"
        variants={groupVariants}
        initial="hidden"
        animate="visible"
      >
        {metrics.map((metric) => (
          <motion.div className="metric" key={metric.label} variants={itemVariants}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function AnimatedWord({ word }) {
  return (
    <span className="word-shell">
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ y: 18, opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -18, opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function ProjectGallery({ openCase }) {
  return (
    <motion.section
      className="projects-section work-stack"
      id="work"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="section-heading">
        <span className="section-kicker">Selected work</span>
        <h2>Actual products, roles, and startup systems I have helped build.</h2>
        <p>
          Focused case studies across product engineering, founder work, growth, research, and
          operational systems.
        </p>
      </div>

      <div className="stack">
        {caseStudies.map((project, index) => (
          <StackCard
            project={project}
            index={index}
            total={caseStudies.length}
            key={project.id}
            onClick={() => openCase(project.id)}
          />
        ))}
      </div>
    </motion.section>
  );
}

function StackCard({ project, index, total, onClick }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  // Earlier cards scale down as later cards stack on top of them.
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={cardRef} className="stack-slot" style={{ top: `${108 + index * 26}px` }}>
      <motion.button
        className={`stack-card ${project.mediaFit === 'contain' ? 'media-contain' : ''}`}
        type="button"
        onClick={onClick}
        style={{ scale }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      >
        <div className="stack-media">
          <img src={project.image} alt={`${project.title} work preview`} />
        </div>
        <div className="stack-body">
          <span className="stack-index">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <span className="project-eyebrow">{project.eyebrow}</span>
            <h3>{project.title}</h3>
          </div>
          <p>{project.summary}</p>
          <div className="chip-row">
            {project.tools.slice(0, 3).map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <span className="stack-cta">
            <span>View case study</span>
            <FiArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </motion.button>
    </div>
  );
}

function EcosystemPreview({ navigate }) {
  return (
    <motion.section
      className="ecosystem-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="ecosystem-copy">
        <span className="section-kicker">Startup ecosystem</span>
        <h2>Product taste, technical depth, and founder-room energy.</h2>
        <p>
          The through-line is simple: find the sharp user pain, shape the product story, and ship
          the loop until real behavior changes.
        </p>
        <button className="secondary-action" type="button" onClick={() => navigate('playground')}>
          <span>Open playground</span>
          <FiArrowUpRight aria-hidden="true" />
        </button>
      </div>

      <div className="signal-grid">
        {[
          ['Founder lens', 'Customer discovery, narrative, MVP focus, fundraising story.'],
          ['Product engineering', 'Translate messy product intent into shipped user-facing systems.'],
          ['Growth loops', 'Launches, communities, ambassadors, and social proof that compounds.'],
          ['Personal edge', 'Health, writing, resilience, and a bias toward difficult reps.'],
        ].map(([title, body]) => (
          <div className="signal-card" key={title}>
            <span className="fig-label">{title}</span>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function AboutPage({ navigate }) {
  return (
    <motion.main
      className="about-page-shell"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="page-hero about-page-hero">
        <div>
          <span className="section-kicker">About</span>
          <h1>The art of intentional building.</h1>
          <p>
            A multidisciplinary engineer focused on the intersection of product precision,
            technical excellence, and the kind of startup energy that turns ambiguity into shipped
            systems.
          </p>
        </div>
        <div className="page-hero-card">
          <FiMapPin aria-hidden="true" />
          <span>Based in Ann Arbor. Built between India, Dubai, and the US.</span>
        </div>
      </section>

      <section className="about-deep-grid">
        <div className="about-image tall">
          <img src={meAlt} alt="Vatsal Shah speaking at an event" />
        </div>

        <div className="about-story-stack">
          <StoryBlock
            label="Today"
            title="Shaping products people love."
            body="I am a Computer Science student at the LSA Honors College at the University of Michigan. I build from zero to one, from MVPs to products reaching 100K+ users. Right now I am building at DigiPals, a YC F25 AI-native social operating system."
          />
          <StoryBlock
            label="Background"
            title="A global operator with founder instincts."
            body="Originally from India, I lived in Dubai before moving to Ann Arbor. I have co-founded startups, led product inside a $60M venture-backed company, worked across commerce operations, and shipped systems used by real customers."
          />
          <StoryBlock
            label="Beyond code"
            title="Discipline as a product advantage."
            body="In 2020, I weighed 140kg and decided to change. That fitness journey led me to found Fitness Freak, an online community with 10,000+ users. I also care about reading, Bollywood music, table tennis, and the gym."
          />
          <div className="about-quote">
            "To bridge the gap between what technology can do and what people actually need."
          </div>
          <div className="hero-actions">
            <a className="primary-action" href={resume} download>
              <span>Download resume</span>
              <FiDownload aria-hidden="true" />
            </a>
            <button className="secondary-action" type="button" onClick={() => navigate('home', 'contact')}>
              <span>Start a conversation</span>
              <FiMail aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="about-board">
        <div>
          <span className="section-kicker">Selected roles</span>
          <h2>Where I have been building.</h2>
        </div>
        <div className="timeline-list">
          {roles.map(([company, role, time]) => (
            <div className="timeline-item" key={`${company}-${role}`}>
              <span className={`role-logo${markLogos[company] ? ' role-logo--mark' : ''}`}>
                {companyLogos[company] ? (
                  <img src={companyLogos[company]} alt={`${company} logo`} />
                ) : (
                  <em>{companyInitials(company)}</em>
                )}
              </span>
              <div>
                <strong>{role}</strong>
                <span>{company}</span>
              </div>
              <time>{time}</time>
            </div>
          ))}
        </div>
      </section>

      <section className="about-board recognition-board">
        <div>
          <span className="section-kicker">Recognition</span>
          <h2>Signals from the ecosystem.</h2>
        </div>
        <div className="recognition-grid">
          {recognition.map((item) => (
            <a className="recognition-card" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <FiAward aria-hidden="true" />
              <div>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </div>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

function StoryBlock({ label, title, body }) {
  return (
    <div className="story-block">
      <span className="section-kicker">{label}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function PlaygroundPage({ navigate }) {
  return (
    <motion.main
      className="playground-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="page-hero">
        <div>
          <span className="section-kicker">Playground</span>
          <h1>Beyond the resume: the loops, communities, and obsessions.</h1>
          <p>
            Community, writing, research, events, health, and the personal systems that keep the
            startup work moving.
          </p>
        </div>
        <button className="page-hero-card" type="button" onClick={() => navigate('about')}>
          <FiBookOpen aria-hidden="true" />
          <span>Read the full about story</span>
        </button>
      </section>

      <div className="ticker-band" aria-hidden="true">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop}>
              Build the loop / Talk to users / Ship the prototype / Tighten the story / Measure the
              behavior /
            </span>
          ))}
        </motion.div>
      </div>

      <section className="playground-section standalone">
        <div className="venture-grid expanded">
          {ventures.map((venture, index) => {
            const Card = venture.href ? motion.a : motion.div;
            const linkProps = venture.href
              ? { href: venture.href, target: '_blank', rel: 'noreferrer' }
              : {};
            return (
              <Card
                className={`venture-card${venture.href ? ' venture-card--link' : ''}`}
                key={venture.title}
                {...linkProps}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.46, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
              >
                {venture.image && (
                  <div className="venture-media">
                    <img src={venture.image} alt={`${venture.title} preview`} loading="lazy" />
                  </div>
                )}
                <span className="fig-label">0{index + 1}</span>
                <div>
                  <span className="venture-label">{venture.label}</span>
                  <h3>{venture.title}</h3>
                </div>
                <strong>{venture.stat}</strong>
                <p>{venture.copy}</p>
                {venture.href && (
                  <span className="venture-cta">
                    <span>View</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                )}
              </Card>
            );
          })}
        </div>
      </section>
    </motion.main>
  );
}

function ContactSection({ onSubmit }) {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <div className="contact-copy">
        <span className="section-kicker">Contact</span>
        <h2>Have a product that needs taste, speed, and technical depth?</h2>
        <p>
          I am open to product engineering, AI product, founder-in-residence, and
          research-adjacent roles with teams that care about craft.
        </p>

        <div className="contact-links">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" />
                <span>{social.label}</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>

      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows="5" placeholder="What are you building?" required />
        </label>
        <button className="primary-action" type="submit">
          <span>Start a conversation</span>
          <FiMail aria-hidden="true" />
        </button>
      </form>
    </motion.section>
  );
}

function CaseStudy({ project, onBack }) {
  return (
    <motion.main
      className="case-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <button className="back-button" type="button" onClick={onBack}>
        <FiArrowLeft aria-hidden="true" />
        <span>Back to work</span>
      </button>

      <section className="case-hero">
        <div className="case-copy">
          <span className="section-kicker">{project.eyebrow}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="chip-row">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
        <motion.div
          className={`case-image ${project.mediaFit === 'contain' ? 'contain' : ''}`}
          layoutId={`project-${project.id}`}
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          <img src={project.image} alt={`${project.title} case study visual`} />
        </motion.div>
      </section>

      <section className="case-details">
        <div className="case-impact">
          <span className="fig-label">Impact</span>
          <h2>{project.impact}</h2>
        </div>
        <div className="case-list">
          {project.details.map((detail, index) => (
            <motion.div
              className="case-list-item"
              key={detail}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.06 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {project.id === 'digipals' && <DigiPalsCaseDetails />}
      {project.id === 'twinmind' && <TwinMindCaseDetails />}

      <section className="case-meta-strip">
        <div>
          <FiCalendar aria-hidden="true" />
          <span>{project.year}</span>
        </div>
        <div>
          <FiBriefcase aria-hidden="true" />
          <span>{project.eyebrow}</span>
        </div>
      </section>
    </motion.main>
  );
}

function DigiPalsCaseDetails() {
  return (
    <>
      <section className="dp-case-section dp-thesis-section">
        <div className="dp-section-copy">
          <span className="section-kicker">Product thesis</span>
          <h2>Make the group chat the product surface.</h2>
          <p>
            DigiPals is interesting because it does not ask friends to adopt a heavy planning tool.
            It starts inside the messy, high-signal place where plans already begin, then uses AI to
            turn casual intent into something the group can actually do.
          </p>
        </div>

        <div className="dp-stat-grid">
          {digipalsStats.map(([value, label]) => (
            <div className="dp-stat-card" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dp-case-section">
        <div className="dp-section-copy wide">
          <span className="section-kicker">Product surfaces</span>
          <h2>Public visuals, translated into the work I care about.</h2>
          <p>
            The strong part of the product story is the interaction pattern: AI should not feel like
            a separate assistant. It should appear as the right widget at the right moment in a
            social conversation.
          </p>
        </div>

        <div className="dp-surface-grid">
          {digipalsSurfaces.map((surface) => (
            <article className="dp-surface-card" key={surface.title}>
              <figure className="dp-surface-visual">
                <img src={surface.image} alt={surface.alt} />
              </figure>
              <div>
                <span className="fig-label">{surface.label}</span>
                <h3>{surface.title}</h3>
                <p>{surface.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dp-case-section dp-loop-section">
        <div className="dp-section-copy">
          <span className="section-kicker">Product loop</span>
          <h2>From "we should hang" to an actual plan.</h2>
          <p>
            The PM problem is reducing social friction without making the app feel robotic. The AI
            has to be useful, lightweight, and timed well enough that friends accept the nudge.
          </p>
        </div>

        <div className="dp-loop-list">
          {[
            ['Intent', 'Someone drops a casual plan inside the group chat.'],
            ['Inference', 'The system identifies who is free, what the group wants, and what decision is missing.'],
            ['Widget', 'A contextual card appears: spots, times, calendars, memories, polls, or booking steps.'],
            ['Commit', 'The group confirms the plan without leaving the thread.'],
            ['Memory', 'The app turns what happened into shared context for future plans.'],
          ].map(([title, body], index) => (
            <div className="dp-loop-item" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dp-case-section">
        <div className="dp-section-copy wide">
          <span className="section-kicker">My role</span>
          <h2>Product engineering across the idea-to-ship path.</h2>
        </div>
        <div className="dp-owner-grid">
          {[
            [
              'First engineering intern hire',
              'Joined early and worked directly with the founding team across product decisions, implementation, feedback, and launch polish.',
            ],
            [
              'AI widget infrastructure',
              'Help build the reusable product layer for contextual widgets that can appear inside social conversations.',
            ],
            [
              'Interaction design',
              'Shape flows that feel native to group chat: fast, visual, low-friction, and easy to accept or ignore.',
            ],
            [
              'Full-stack execution',
              'Move from spec to shipped implementation across frontend, backend, state, edge cases, and QA.',
            ],
            [
              'Product judgment',
              'Pressure-test whether each AI action makes friends more social instead of adding another AI novelty.',
            ],
          ].map(([title, body]) => (
            <div className="dp-owner-card" key={title}>
              <span className="fig-label">{title}</span>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function TwinMindCaseDetails() {
  return (
    <>
      <section className="tm-case-section tm-role-section">
        <div className="tm-section-copy">
          <span className="section-kicker">PM scope</span>
          <h2>From memory app to product-led operating system.</h2>
          <p>
            My role sat across product management, design, engineering, growth, and enterprise
            development. The product question was not just "can we transcribe meetings?" It was:
            how do we make captured context useful enough that people come back every day?
          </p>
        </div>

        <div className="tm-stat-grid">
          {twinmindPMStats.map(([value, label]) => (
            <div className="tm-stat-card" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tm-case-section">
        <div className="tm-section-copy wide">
          <span className="section-kicker">Product surfaces</span>
          <h2>Core experiences I shaped or shipped.</h2>
          <p>
            The screenshots map to the product work: memory search, daily digest, automatic action
            items, meeting summaries, email/share flows, and the lower-cost transcription surface I
            helped build during summer 2025.
          </p>
        </div>

        <div className="tm-surface-grid">
          {twinmindProductSurfaces.map((surface) => (
            <article
              className={`tm-surface-card ${surface.orientation === 'wide' ? 'wide-shot' : ''}`}
              key={surface.title}
            >
              <ProductSurfaceShot surface={surface} />
              <div className="tm-surface-copy">
                <span className="fig-label">{surface.label}</span>
                <h3>{surface.title}</h3>
                <p>{surface.copy}</p>
                {surface.href && (
                  <a href={surface.href} target="_blank" rel="noreferrer">
                    View public product page <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tm-case-section tm-enterprise-section">
        <div className="tm-section-copy tm-enterprise-copy">
          <span className="section-kicker">Enterprise motion</span>
          <h2>B2B strategy for institutional memory.</h2>
          <p>
            I helped lead the enterprise story for TwinMind: scattered knowledge, bilingual meeting
            load, missing action items, and the need for AI that could prove ROI in real workflows.
            The work covered deck narrative, pilot framing, enterprise roadmap, and stakeholder
            conversations.
          </p>
        </div>

        <div className="tm-enterprise-gallery">
          {twinmindEnterpriseArtifacts.map((artifact, index) => (
            <article
              className={`tm-artifact-card ${index === 0 ? 'spotlight' : ''} ${
                index > 2 ? 'wide' : ''
              }`}
              key={artifact.title}
            >
              <img src={artifact.image} alt={`${artifact.title} slide from TwinMind enterprise deck`} />
              <div>
                <h3>{artifact.title}</h3>
                <p>{artifact.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tm-case-section tm-execution-section">
        <div className="tm-section-copy wide">
          <span className="section-kicker">What I owned</span>
          <h2>Product ownership, not just tickets.</h2>
          <p>
            The through-line was simple: find the loop that made captured memory useful, design the
            user-facing surface, ship it with engineering, and measure whether it made people come
            back.
          </p>
        </div>
        <div className="tm-ownership-grid">
          {[
            [
              'Product strategy',
              'Roadmap prioritization, user flows, onboarding, activation, privacy, daily digest, and task surfaces.',
            ],
            [
              'Technical execution',
              'Chrome extension, web app, semantic memory retrieval, RAG workflows, local encryption, APIs, and reliability fixes.',
            ],
            [
              'Growth and launch',
              'Product Hunt launch, creator/PR motion, student ambassador program, and product-led retention loops.',
            ],
            [
              'Enterprise pilots',
              'B2B deck, UAE enterprise thesis, stakeholder conversations, and pilots/LOIs with organizations including Innoventures Education and Apparel Group.',
            ],
            [
              'Team rhythm',
              'Weekly sprint planning, design review, intern coordination, and the day-to-day glue between product, engineering, and user feedback.',
            ],
            [
              'User insight',
              'Power-user testing across meetings, lectures, emails, and daily digests so roadmap choices came from lived workflow pain.',
            ],
          ].map(([title, body]) => (
            <div className="tm-owner-card" key={title}>
              <span className="fig-label">{title}</span>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tm-case-section tm-impact-section">
        <div className="tm-section-copy wide">
          <span className="section-kicker">Measurable impact</span>
          <h2>Success metrics from launch to scale.</h2>
          <p>
            The outcome was not one isolated feature. It was a set of product, growth, and
            distribution loops that turned an early beta into a product with real user pull,
            external credibility, and enterprise momentum.
          </p>
        </div>

        <div className="tm-impact-grid">
          {twinmindImpactMetrics.map((item) => (
            <article className="tm-impact-card" key={item.label}>
              <div className="tm-impact-head">
                <strong>{item.metric}</strong>
                <span>{item.label}</span>
              </div>
              <p>{item.outcome}</p>
              <div className="tm-impact-how">
                <span>How I helped</span>
                <p>{item.how}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductSurfaceShot({ surface }) {
  return (
    <figure className={`tm-surface-visual ${surface.orientation}`}>
      <img src={surface.image} alt={surface.alt} />
    </figure>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>Vatsal Shah</span>
      <span>Built with React and Motion.</span>
      <a href="mailto:svatsal@umich.edu">svatsal@umich.edu</a>
    </footer>
  );
}

export default App;
