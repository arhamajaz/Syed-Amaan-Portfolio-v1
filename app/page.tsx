'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, HTMLMotionProps, Variants, useScroll, useTransform } from 'framer-motion';
import { EtherealShadow } from '@/components/ui/etheral-shadow';
import { GlassCard } from '@/components/ui/glass-card';

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const words = ["INTO INSIGHTS", "INTO STRATEGY", "INTO VALUE", "INTO ACTION"];

const DataWaveform = () => {
  const bars = [
    { x: 6, delay: 0 },
    { x: 26, delay: 0.2 },
    { x: 46, delay: 0.4 },
    { x: 66, delay: 0.2 },
    { x: 86, delay: 0 }
  ];

  return (
    <svg
      viewBox="0 0 100 40"
      className="w-full max-w-[200px] h-12 md:h-16 overflow-visible drop-shadow-[0_0_12px_rgba(242,202,80,0.6)]"
    >
      {bars.map((bar, i) => (
        <motion.rect
          key={i}
          x={bar.x}
          y={5}
          width={8}
          height={30}
          rx={4}
          fill="#f2ca50"
          style={{ originY: 0.5, originX: 0.5 }}
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar.delay
          }}
        />
      ))}
    </svg>
  );
};

export default function PortfolioPage() {
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 800], [0, -200]);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#131313] text-[#e5e2e1] selection:bg-white selection:text-black overflow-x-hidden">
      {/* ========================================
          TOP NAVIGATION BAR
      ======================================== */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-3xl border-b border-white/5 shadow-[0_40px_40px_rgba(0,0,0,0.08)]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-4 md:px-10 py-4 md:py-6 relative">
          <motion.a
            className="flex items-center gap-3 font-[--font-noto-serif] font-bold text-xl md:text-2xl tracking-tighter text-[#f2ca50] hover:scale-105 transition-all duration-300 flex-shrink-0 whitespace-nowrap group relative z-10"
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image 
              src="/LOGO FOR NAVBAR.png" 
              alt="Syed Amaan Logo" 
              width={48}
              height={48}
              className="object-contain w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span>SYED AMAAN</span>
              <span className="block h-[1px] w-0 bg-[#f2ca50] transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.a>
          
          <motion.div 
            className="flex lg:flex gap-4 md:gap-12 items-center flex-1 mx-2 md:mx-8 overflow-x-auto no-scrollbar snap-x touch-pan-x py-1 lg:justify-center"
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
          >
            {[
              { href: '#about', label: 'Curator' },
              { href: '#vision', label: 'Vision' },
              { href: '#expertise', label: 'Expertise' },
              { href: '#archive', label: 'Archive' },
              { href: '#timeline', label: 'Timeline' },
              { href: '#connect', label: 'Connect' },
            ].map(({ href, label }) => (
              <motion.a
                key={href}
                variants={staggerItem}
                className="nav-link font-[--font-noto-serif] text-[0.7rem] md:text-[0.85rem] tracking-[0.2em] uppercase text-[#e5e2e1]/50 hover:text-white transition-all duration-500 relative whitespace-nowrap group block snap-center"
                href={href}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="#connect"
            className="bg-[#e5e2e1] text-black px-4 md:px-8 py-2 rounded-full font-[--font-inter] text-[0.6rem] md:text-[0.7rem] tracking-[0.2em] font-bold uppercase hover:scale-105 hover:bg-white hover:shadow-[0_0_30px_rgba(229,226,225,0.4)] transition-all duration-500 ease-out flex-shrink-0 relative z-10"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Inquire
          </motion.a>
        </div>
      </motion.nav>

      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-10"
        id="vision"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131313]" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIoAz-JbW_qwZ_i7kUAkvNZ2L-h6J6CM21ZWi_tBfbhzrQXTkziVQxmaHL2OuHIUFGhLDKjgBiUjEY54bVTZFHA1jg5qyXJtdNX3YjRt0Xdm377CtlDh9UYMwtTwxWb9ppnUmAKu_AxC7mSHGy1O2cZElOe7BAksYTBhrWzyoeZDiU-kWx7-hv6ScqCwb4BMTmFuvDVhoDaMRIwUiFzy3xbKwShfzmv0VPh9oainxfoeBv5RWfN4kfqy682-qju3oSryvmp1_yHyuz"
            alt="Abstract architectural interior with deep shadows"
            fill
            className="object-cover opacity-10 grayscale"
            priority
            sizes="100vw"
          />
        </div>
        <motion.div 
          className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ y: heroTextY }}
        >
          {/* Top Row: Stroke + Solid Typography */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
            <h1 className="font-[--font-noto-serif] font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.8] uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.4)] font-bold select-none">
              TRANSFORM
            </h1>
            <span className="font-[--font-noto-serif] font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.8] uppercase tracking-tighter text-white font-bold select-none">
              DATA
            </span>
          </div>

          {/* Middle Row: Animated Central Asset */}
          <div className="w-full max-w-md h-16 md:h-24 flex items-center justify-center">
            <DataWaveform />
          </div>

          {/* Bottom Row: Baseline for Animation */}
          <div className="text-center drop-shadow-[0_0_15px_rgba(242,202,80,0.5)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={words[index]}
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-[--font-noto-serif] font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.8] uppercase tracking-tighter text-[#f2ca50] font-bold select-none drop-shadow-[0_0_15px_rgba(242,202,80,0.5)]"
              >
                {words[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* ========================================
          SECTIONS WITH ETHEREAL SHADOW BACKGROUND
      ======================================== */}
      <div className="relative w-full overflow-hidden">
        <EtherealShadow
          animation={{ scale: 80, speed: 40 }}
          noise={{ opacity: 0.1, scale: 1.2 }}
          sizing="fill"
          color="rgba(255, 255, 255, 0.03)"
        />

        {/* --- ABOUT ME SECTION --- */}
        <section className="py-20 md:py-24 px-4 md:px-10" id="about">
          <motion.div 
            className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start"
            {...fadeInUp}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl group bg-white/5 max-w-md mx-auto w-full">
              <Image
                src="/WhatsApp Image 2026-03-25 at 7.23.09 PM.jpeg"
                alt="Personal portrait of Syed Amaan"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-80"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <div className="space-y-12">
              <div>
                <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">
                  The Curator
                </span>
                <h2 className="font-[--font-noto-serif] text-3xl md:text-5xl font-bold text-white leading-tight text-balance">
                  Driven by Insight, <br className="hidden md:block" />
                  Refined by Strategy.
                </h2>
              </div>
              <div className="space-y-6 font-[--font-inter] text-base md:text-lg text-white/50 leading-relaxed text-pretty">
                <p>
                  A BBA student with a profound interest in Data Analytics,
                  seeking to leverage administrative and analytical skills in a
                  dynamic organizational environment. My journey is defined by a
                  commitment to transforming raw data into strategic assets.
                </p>
                <p>
                  With foundational expertise in Strategic Management from{' '}
                  <span className="text-[#f2ca50] font-semibold">
                    IIM Bangalore
                  </span>{' '}
                  and practical experience in customer-centric roles, I bridge
                  the gap between operational efficiency and data-driven
                  decision-making.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="font-[--font-noto-serif] text-3xl text-[#f2ca50] mb-2">
                    3+
                  </h4>
                  <p className="font-[--font-inter] text-xs tracking-widest uppercase text-white/30">
                    Analytical Frameworks
                  </p>
                </div>
                <div>
                  <h4 className="font-[--font-noto-serif] text-3xl text-[#f2ca50] mb-2">
                    Top 5%
                  </h4>
                  <p className="font-[--font-inter] text-xs tracking-widest uppercase text-white/30">
                    Project Lead Performance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- EXPERTISE SECTION --- */}
        <section className="py-20 md:py-24 px-4 md:px-10" id="expertise">
          <div className="max-w-[1440px] mx-auto">
            <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
              <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">
                Core Competencies
              </span>
              <h2 className="font-[--font-noto-serif] text-3xl md:text-4xl font-bold text-white text-balance">
                The Architecture of Expertise
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div className="space-y-12" {...fadeInUp}>
                <h3 className="font-[--font-noto-serif] text-2xl text-white border-b border-white/10 pb-4">
                  Technical Proficiency
                </h3>
                <div className="flex flex-wrap gap-3 md:gap-4 mt-8">
                  {[
                    'Data Visualization (Power BI)',
                    'Advanced Excel',
                    'Python',
                    'SQL',
                    'Tableau Analytics',
                    'Statistical Analysis',
                    'Strategic Management',
                    'CRM & Lead Generation',
                  ].map((skill, sIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: sIdx * 0.08 }}
                      viewport={{ once: true }}
                      className="px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-mono uppercase tracking-widest text-white/70 transition-all duration-300 hover:border-[#f2ca50] hover:text-[#f2ca50] hover:bg-[#f2ca50]/5 cursor-default select-none"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="space-y-12" {...fadeInUp}>
                <h3 className="font-[--font-noto-serif] text-2xl text-white border-b border-white/10 pb-4">
                  Key Strengths
                </h3>
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: 'verified_user', title: 'Precision', desc: 'Unwavering attention to granular detail in data modeling.' },
                    { icon: 'account_tree', title: 'Multitasking', desc: 'Navigating complex workflows with strategic efficiency.' },
                    { icon: 'groups', title: 'Collaboration', desc: 'Forging synergies across diverse multidisciplinary teams.' },
                    { icon: 'insights', title: 'Problem Solving', desc: 'Deciphering challenges through analytical lenses.' },
                  ].map(({ icon, title, desc }) => (
                    <motion.div key={title} variants={staggerItem}>
                      <GlassCard 
                        glowColor="#4ADBC8" 
                        className="p-10 md:p-8 group h-full mx-auto max-w-[400px] md:max-w-none hover:border-[#4ADBC8]/30 transition-colors duration-500"
                      >
                        <span className="material-symbols-outlined text-[#4ADBC8] mb-4 block text-4xl group-hover:scale-110 transition-transform duration-500">{icon}</span>
                        <h4 className="font-[--font-inter] font-black text-2xl text-white mb-3">{title}</h4>
                        <p className="font-[--font-inter] text-base font-semibold text-white/60">{desc}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- ARCHIVE SECTION --- */}
        <section className="py-20 md:py-24 px-4 md:px-10" id="archive">
          <div className="max-w-[1440px] mx-auto">
            <motion.div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8" {...fadeInUp}>
              <div className="max-w-xl">
                <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4 text-balance">Project Archive</span>
                <h2 className="font-[--font-noto-serif] text-3xl md:text-5xl font-bold text-white text-balance">Curation of Analytical Endeavors</h2>
              </div>
              <div className="pb-4"><span className="font-[--font-inter] text-base md:text-lg text-white/20 tracking-wider">2024-2025 PORTFOLIO</span></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { src: '/consumer-preferences.png', tag: 'Power BI Dashboard', title: 'Consumer Preferences between Online Food Delivery and Restaurant Dining', desc: 'A comprehensive Power BI dashboard analyzing consumer preferences, comparing online food delivery habits with traditional restaurant dining patterns.' },
                { src: '/influence-behavior.png', tag: 'Power BI Dashboard • Patna', title: 'Influence of Social Media on Pre-Purchase Clothing Behavior of Young Adults', desc: 'Mapping the digital footprint of young adults in Patna — how social media shapes clothing purchase decisions from awareness to conversion.' },
                { src: '/image.png', tag: 'Excel • Sep 2025', title: 'Sales Analysis of Coca-Cola', desc: 'Interactive sales dashboard in Excel analyzing revenue by region, product & city with KPIs, trend lines, and comparative charts. Associated with St. Xavier\'s College of Management & Technology.' },
              ].map(({ src, tag, title, desc }, index) => (
                <motion.div 
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                >
                  <GlassCard glowColor="#f2ca50" className="group relative aspect-[3/4] max-h-[520px] cursor-pointer hover:border-[#f2ca50]/30 transition-colors duration-500">
                    <a 
                      href="https://www.linkedin.com/in/syed-amaan-san/details/projects/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative block w-full h-full overflow-hidden"
                    >
                      <Image 
                        src={src} 
                        alt={title} 
                        fill 
                        className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-0 left-0 p-6 md:p-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                        <span className="font-[--font-inter] text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] text-[#f2ca50] uppercase mb-2 block">{tag}</span>
                        <h3 className="font-[--font-noto-serif] text-lg md:text-xl text-white mb-4 text-balance">{title}</h3>
                        <p className="font-[--font-inter] text-xs md:text-sm text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 text-pretty">{desc}</p>
                      </div>
                      <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all duration-700">
                        <span className="material-symbols-outlined text-white group-hover:text-black">north_east</span>
                      </div>
                    </a>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TIMELINE SECTION --- */}
        <section ref={containerRef} className="relative py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-[#131313]" id="timeline">
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
              <span className="font-[--font-inter] text-xs md:text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">
                Career Trajectory
              </span>
              <h2 className="font-[--font-noto-serif] text-3xl md:text-5xl font-bold text-white tracking-tight">
                Professional Experience
              </h2>
            </motion.div>

            {/* Premium Minimalist Vertical Timeline Container */}
            <div className="relative pt-4 pb-12">
              {/* Scroll-Linked Glowing Data Stream Track */}
              <div className="w-[2px] bg-white/5 absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0">
                <motion.div
                  className="w-full h-full bg-gradient-to-b from-[#f2ca50] to-[#f2ca50]/10 shadow-[0_0_15px_rgba(242,202,80,0.6)]"
                  style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                />
              </div>

              {/* Timeline Nodes mapping internship experiences */}
              <div className="space-y-12 md:space-y-16">
                {[
                  {
                    role: 'Marketing Intern',
                    company: 'DNP Health Seva Pvt. Ltd.',
                    period: 'June 2025 - July 2025',
                    bullets: [
                      'Conceptualized and edited high-engagement video reels using Adobe Premiere Pro, elevating digital brand presence.',
                      'Optimized social media channels through targeted content strategies, increasing organic reach and audience interactions.',
                      'Contributed to comprehensive campaign strategies, aligning promotional messaging with core marketing objectives.',
                    ],
                    side: 'left',
                  },
                  {
                    role: 'Intern',
                    company: 'Unschool',
                    period: 'Feb 2024 - May 2024',
                    bullets: [
                      'Managed data entry pipelines and maintained CRM records to streamline user tracking and operational workflows.',
                      'Executed targeted lead generation campaigns to identify and acquire high-potential prospective learners.',
                      'Orchestrated personalized WhatsApp marketing broadcasts, optimizing direct messaging engagement and conversion rates.',
                      'Conducted primary and secondary market research to uncover actionable insights on user demand and competitor trends.',
                    ],
                    side: 'right',
                  },
                ].map(({ role, company, period, bullets, side }, index) => (
                  <motion.div
                    key={role}
                    className="relative w-full group"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {/* Glowing Dot resting on the vertical line with power-on activation */}
                    <div className="absolute left-4 md:left-1/2 top-2 transform -translate-x-1/2 z-20">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-[#f2ca50] shadow-[0_0_10px_#f2ca50] transition-transform duration-500 group-hover:scale-125"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 10 }}
                      />
                    </div>

                    {/* Content Box aligned alternatingly on Desktop */}
                    <div
                      className={`pl-10 md:pl-0 w-full md:w-[45%] ${
                        side === 'left' ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                      }`}
                    >
                      <span className="font-[--font-inter] text-xs md:text-sm tracking-widest text-[#f2ca50] uppercase block mb-2 font-semibold">
                        {period}
                      </span>
                      <h3 className="font-[--font-noto-serif] text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[#f2ca50] transition-colors duration-300">
                        {role}
                      </h3>
                      <p className="font-[--font-inter] text-base font-medium text-white/80 mb-5">
                        {company}
                      </p>
                      <ul className="space-y-3">
                        {bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="font-[--font-inter] text-sm md:text-base text-white/60 leading-relaxed flex items-start"
                          >
                            <span className="text-[#f2ca50]/60 mr-3 mt-1 text-xs select-none">
                              ✦
                            </span>
                            <span className="flex-1">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CERTIFICATIONS SECTION --- */}
        <section className="py-20 md:py-24 px-4 md:px-10">
          <div className="max-w-[1440px] mx-auto">
            <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
              <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">Recognition</span>
              <h2 className="font-[--font-noto-serif] text-3xl md:text-4xl font-bold text-white text-balance">Professional Certifications</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {[
                { image: '/cert2.jpeg', name: 'TCS iON Career Edge', cert: 'Young Professional', issuer: 'TCS iON • Mar 2026', skills: 'Communication · AI · Strategic Thinking' },
                { image: '/cert1.jpeg', name: 'IIM Bangalore (SWAYAM)', cert: 'Strategic Management', issuer: 'IIMB • Jan 2026', skills: 'Strategic Planning · Data Analysis' },
                { image: '/cert3.jpeg', name: 'Deloitte Australia', cert: 'Data Analytics Job Simulation', issuer: 'Forage • Oct 2025', skills: 'Data Analysis · Data Visualization' },
                { image: '/image copy.png', name: 'Tata Group', cert: 'Data Visualisation: Empowering Business', issuer: 'Forage • Oct 2025', skills: 'Data Visualization · Business Insights' },
              ].map(({ image, name, cert, issuer, skills }, index) => (
                <motion.div 
                  key={name} 
                  className="w-full h-full flex justify-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                >
                  {/* Directive 1: The Card Physics (Framer Motion) */}
                  <motion.div
                    className="h-full flex flex-col max-w-[320px] sm:max-w-none w-full relative group overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-xl transition-colors duration-500 hover:border-[#f2ca50]/30"
                    whileHover={{ y: -4, scale: 1.01 }}
                  >
                    {/* Directive 3: The Light Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#f2ca50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <a 
                      href="https://www.linkedin.com/in/syed-amaan-san/details/certifications/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col w-full h-full text-left relative z-10"
                    >
                      {/* Uniform Logo Stage */}
                      <div className="relative w-full h-32 md:h-40 bg-white/5 rounded-t-xl flex items-center justify-center p-6 md:p-8">
                        {/* Directive 2: The Monochromatic Filter */}
                        <img 
                          src={image} 
                          alt={name} 
                          className="w-full h-full object-contain object-center drop-shadow-xl transition-all duration-500 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
                        />
                      </div>

                      {/* Typography & Spacing Overhaul */}
                      <div className="p-6 md:p-8 flex flex-col gap-3 flex-1">
                        <h4 className="font-[--font-noto-serif] font-serif text-lg md:text-xl text-white leading-tight font-bold">{cert}</h4>
                        <p className="font-[--font-inter] font-sans text-sm font-semibold tracking-widest text-[#f2ca50] uppercase">{name}</p>
                        <p className="font-mono text-xs text-white/50">{issuer}</p>

                        {/* Footer Tags */}
                        <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-white/5">
                          {skills.split(' · ').map((skillTag, tIdx) => (
                            <span key={tIdx} className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-white/40 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                              {skillTag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONNECT SECTION --- */}
        <section className="py-20 md:py-24 px-4 md:px-10" id="connect">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left side: Contact Info */}
            <motion.div className="space-y-12 w-full lg:w-[35%]" {...fadeInUp}>
              <div>
                <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">Get In Touch</span>
                <h2 className="font-[--font-noto-serif] text-3xl md:text-5xl font-bold text-white leading-tight text-balance">Let&apos;s Orchestrate <br />Future Insights.</h2>
              </div>
              <div className="space-y-8 font-[--font-inter] text-lg text-white/50">
                <motion.a 
                  href="mailto:syedamaansan24@gmail.com" 
                  className="flex items-center gap-6 group interactive-card"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-300 flex-shrink-0">
                    <span className="material-symbols-outlined text-[#f2ca50] group-hover:text-black">mail</span>
                  </div>
                  <span className="group-hover:text-white transition-colors font-medium break-all md:break-words">syedamaansan24@gmail.com</span>
                </motion.a>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#f2ca50]">location_on</span>
                  </div>
                  <span className="font-medium">Patna, Bihar</span>
                </div>
              </div>
            </motion.div>

            {/* Center: Large Logo */}
            <motion.div className="w-full lg:w-[30%] flex justify-center py-8 lg:py-0" {...fadeInUp}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-90 transition-transform duration-700 hover:scale-105">
                <Image
                  src="/LOGO FOR NAVBAR.png"
                  alt="Syed Amaan Emblem"
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(242,202,80,0.15)]"
                />
              </div>
            </motion.div>

            {/* Right side: Button Component */}
            <motion.div className="w-full lg:w-[35%] flex lg:justify-end justify-center" {...fadeInUp}>
              <div className="glass-card p-6 md:p-8 rounded-xl w-full max-w-[280px] flex flex-col justify-center items-center">
                <p className="font-[--font-inter] text-xs text-white/50 uppercase tracking-widest mb-6 text-center">
                  Start a Conversation
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc4gYl7oTWiN-Wdowt550TJnL4q7gwTI4x-KawzfhPS3hZtlw/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full inline-block text-center bg-[#f2ca50] text-black py-4 rounded-md font-[--font-inter] text-xs font-bold tracking-[0.2em] uppercase hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all duration-300"
                >
                  Send a Message
                </a>
              </div>
            </motion.div>

          </div>
        </section>
      </div>

      <footer className="bg-[#0e0e0e] py-12 md:py-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 w-full max-w-[1440px] mx-auto gap-8 md:gap-6">
          <div className="flex items-center gap-4">
            <Image 
              src="/LOGO FOR NAVBAR.png" 
              alt="Syed Amaan Logo" 
              width={56}
              height={56}
              className="object-contain w-12 h-12 md:w-14 md:h-14 rounded-full"
            />
            <div className="text-[#f2ca50] font-black font-[--font-noto-serif] text-lg tracking-tighter uppercase leading-tight text-left">
              SYED<br />AMAAN
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="font-[--font-inter] text-[0.6rem] md:text-[0.7rem] tracking-[0.15em] uppercase text-white/30 mb-1 text-pretty">© 2026 SYED AMAAN. DATA ANALYST.</p>
            <p className="font-[--font-inter] text-[0.6rem] md:text-[0.65rem] tracking-[0.15em] uppercase text-[#f2ca50]/40 italic">Made with love and dedication.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-[--font-inter] text-xs tracking-[0.2em] uppercase text-white/30 hover:text-[#f2ca50] transition-all duration-500" href="https://linkedin.com/in/syed-amaan-san/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="font-[--font-inter] text-xs tracking-[0.2em] uppercase text-white/30 hover:text-[#f2ca50] transition-all duration-500" href="mailto:syedamaansan24@gmail.com">Email</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="font-[--font-noto-serif] text-lg text-white/10 tracking-[0.4em] uppercase">Thank you for visiting!</p>
        </div>
      </footer>
    </main>
  );
}
