'use client';

import Image from 'next/image';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { EtherealShadow } from '@/components/ui/etheral-shadow';
import { VisitorCounter } from '@/components/ui/visitor-counter';

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

export default function PortfolioPage() {
  return (
    <main className="bg-[#131313] text-[#e5e2e1] selection:bg-white selection:text-black">
      {/* ========================================
          TOP NAVIGATION BAR
      ======================================== */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-3xl border-b border-white/5 shadow-[0_40px_40px_rgba(0,0,0,0.08)]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-10 py-6 overflow-x-hidden">
          <motion.a
            className="font-[--font-noto-serif] font-bold text-2xl tracking-tighter text-[#f2ca50] hover:scale-105 transition-all duration-300 flex-shrink-0 whitespace-nowrap group"
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SYED AMAAN
            <span className="block h-[1px] w-0 bg-[#f2ca50] transition-all group-hover:w-full" />
          </motion.a>
          
          <motion.div 
            className="hidden lg:flex gap-12 items-center flex-shrink mx-8"
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
                className="nav-link font-[--font-noto-serif] text-[0.85rem] tracking-[0.2em] uppercase text-[#e5e2e1]/50 hover:text-white transition-all duration-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full whitespace-nowrap"
                href={href}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="#connect"
            className="bg-[#e5e2e1] text-black px-8 py-2 rounded-full font-[--font-inter] text-[0.7rem] tracking-[0.2em] font-bold uppercase hover:scale-105 hover:bg-white hover:shadow-[0_0_30px_rgba(229,226,225,0.4)] transition-all duration-500 ease-out flex-shrink-0"
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
        className="relative h-screen flex flex-col justify-center items-center px-10 overflow-hidden"
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
          className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="font-[--font-inter] text-sm tracking-[0.5em] text-[#f2ca50] uppercase block mb-6">
            Strategic Mindset • Analytical Precision
          </span>
          <h1 className="font-[--font-noto-serif] text-[5rem] md:text-[8rem] leading-none font-bold mb-8 tracking-tighter" style={{ textShadow: '0 0 40px rgba(255,255,255,0.15)' }}>
            <span className="text-white">SYED</span>{' '}<span className="text-gradient-gold">AMAAN</span>
          </h1>
          <motion.p 
            className="font-[--font-inter] text-lg text-white/50 max-w-2xl mx-auto tracking-wide mb-12 uppercase leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            PURSUING BBA <span className="mx-2 text-[#f2ca50]">|</span> DATA
            ANALYSIS <span className="mx-2 text-[#f2ca50]">|</span>{' '}
            ADMINISTRATIVE SUPPORT
          </motion.p>
          <motion.a 
            className="inline-flex items-center group" 
            href="#archive"
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#f2ca50] transition-all duration-500 group-hover:scale-110">
              <span className="material-symbols-outlined text-[#f2ca50] group-hover:text-black transition-colors">
                arrow_downward
              </span>
            </div>
            <span className="ml-4 font-[--font-inter] text-sm tracking-[0.2em] uppercase text-white/30 group-hover:text-[#f2ca50] transition-colors">
              Discover More
            </span>
          </motion.a>
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
        <section className="py-32 px-10" id="about">
          <motion.div 
            className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-24 items-start"
            {...fadeInUp}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl group bg-white/5">
              <Image
                src="/WhatsApp Image 2026-03-25 at 7.23.09 PM.jpeg"
                alt="Personal portrait of Syed Amaan"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <div className="space-y-12">
              <div>
                <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">
                  The Curator
                </span>
                <h2 className="font-[--font-noto-serif] text-5xl font-bold text-white leading-tight">
                  Driven by Insight, <br />
                  Refined by Strategy.
                </h2>
              </div>
              <div className="space-y-6 font-[--font-inter] text-lg text-white/50 leading-relaxed">
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
        <section className="py-32 px-10" id="expertise">
          <div className="max-w-[1440px] mx-auto">
            <motion.div className="text-center mb-24" {...fadeInUp}>
              <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">
                Core Competencies
              </span>
              <h2 className="font-[--font-noto-serif] text-4xl font-bold text-white">
                The Architecture of Expertise
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div className="space-y-12" {...fadeInUp}>
                <h3 className="font-[--font-noto-serif] text-2xl text-white border-b border-white/10 pb-4">
                  Technical Proficiency
                </h3>
                <div className="space-y-8">
                  {[
                    { label: 'Data Visualization (Power BI)', pct: 90 },
                    { label: 'Advanced Excel & Basic Tableau', pct: 85 },
                    { label: 'Python for Analysis', pct: 70 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex mb-4">
                        <span className="font-[--font-inter] text-xs tracking-widest uppercase text-white/50">
                          {label}
                        </span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#f2ca50]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="space-y-12" {...fadeInUp}>
                <h3 className="font-[--font-noto-serif] text-2xl text-white border-b border-white/10 pb-4">
                  Key Strengths
                </h3>
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
                    <motion.div
                      key={title}
                      variants={staggerItem}
                      className="p-6 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/20 transition-all group"
                    >
                      <span className="material-symbols-outlined text-[#f2ca50] mb-4 block text-3xl">{icon}</span>
                      <h4 className="font-[--font-inter] font-bold text-white mb-2">{title}</h4>
                      <p className="font-[--font-inter] text-xs text-white/30">{desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- ARCHIVE SECTION --- */}
        <section className="py-32 px-10" id="archive">
          <div className="max-w-[1440px] mx-auto">
            <motion.div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8" {...fadeInUp}>
              <div className="max-w-xl">
                <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">Project Archive</span>
                <h2 className="font-[--font-noto-serif] text-5xl font-bold text-white">Curation of Analytical Endeavors</h2>
              </div>
              <div className="pb-4"><span className="font-[--font-inter] text-lg text-white/20 tracking-wider">2024-2025 PORTFOLIO</span></div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd-8btPJ3tky27yiJMBefEOImToAy2OnsaZME5J44kTc9GN2RC2XTl4UUUE-6I0-cWeMOPlU_amwp-gOZdRCLMpiw6SwN5m8zK1XVf0ywEFW8bYCfRQ2leTkc8VIiikcwpzD8DJZ9hR4v2C8278mb8DWC6u6o8fXO2FhnzQDEZrQz3EY84TxBUxY9ooja0AKKwJ3C3Sa2gkPOzz6X6xQCkYbg5OOHrvQ1i-joRdtEV3K-NN8KA-138m-cRfq3rgge4SDN-cx6rs8Kc', tag: 'Power BI Dashboard', title: 'Consumer Preferences between Online Food Delivery and Restaurant Dining', desc: 'A comprehensive Power BI dashboard analyzing consumer preferences, comparing online food delivery habits with traditional restaurant dining patterns.' },
                { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT2slcRvcvmXDYLVaqKStnjejw-OfCbH7-Nqh275_oAJW1iqyzXzTOXiy_LKL86YiTNZu7TQTa9dNMpEuhUVoXGYk4YRo8FD38ABqpFCa9aWntSpvoSzxM-uLD8DJ5rDCHHMsLoE5GAKyTjshTqu7ea3_XlddkJzkoAy36rX9WauwvQoJwRROIB5SvjU7j6OKnXCE82RMBMQu-UPKkDsl4fYP8cD1GlNH4mQHb-CfkXM7d_3D7kmnbEAv4cpUPgjox5arsSnB_04f6', tag: 'Power BI Dashboard • Patna', title: 'Influence of Social Media on Pre-Purchase Clothing Behavior of Young Adults', desc: 'Mapping the digital footprint of young adults in Patna — how social media shapes clothing purchase decisions from awareness to conversion.' },
                { src: '/image.png', tag: 'Excel • Sep 2025', title: 'Sales Analysis of Coca-Cola', desc: 'Interactive sales dashboard in Excel analyzing revenue by region, product & city with KPIs, trend lines, and comparative charts. Associated with St. Xavier\'s College of Management & Technology.' },
              ].map(({ src, tag, title, desc }) => (

                <motion.a 
                  key={title} 
                  href="https://www.linkedin.com/in/syed-amaan-san/details/projects/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variants={staggerItem} 
                  className="block group relative aspect-[3/4] bg-white/[0.03] rounded-xl overflow-hidden cursor-pointer interactive-card"
                >
                  <Image 
                    src={src} 
                    alt={title} 
                    fill 
                    className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <span className="font-[--font-inter] text-[0.65rem] tracking-[0.3em] text-[#f2ca50] uppercase mb-2 block">{tag}</span>
                    <h3 className="font-[--font-noto-serif] text-xl text-white mb-4">{title}</h3>
                    <p className="font-[--font-inter] text-sm text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">{desc}</p>
                  </div>
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all duration-700">
                    <span className="material-symbols-outlined text-white group-hover:text-black">north_east</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- TIMELINE SECTION --- */}
        <section className="py-32 px-10" id="timeline">
          <div className="max-w-[1000px] mx-auto">
            <motion.div className="text-center mb-24" {...fadeInUp}>
              <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">Career Trajectory</span>
              <h2 className="font-[--font-noto-serif] text-4xl font-bold text-white">A Cinematic Progression</h2>
            </motion.div>

            <div className="relative">
              {/* ── Journey Path Line ── */}
              <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/5" />
              <motion.div
                className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px origin-top"
                style={{ background: 'linear-gradient(to bottom, #f2ca50, #f2ca50 70%, transparent)' }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
                viewport={{ once: true }}
              />

              {/* ── Start Marker ── */}
              <motion.div
                className="absolute left-[10px] md:left-1/2 md:-ml-[10px] -top-2 flex flex-col items-center z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-5 h-5 rounded-full bg-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.6)]" />
                <span className="font-[--font-inter] text-[0.6rem] tracking-[0.3em] text-[#f2ca50]/60 uppercase mt-2 whitespace-nowrap">Journey Begins</span>
              </motion.div>

              {/* ── Timeline Entries ── */}
              <div className="space-y-28 pt-14 pb-14">
                {[
                  { period: '2024 - Present', role: 'Marketing Intern', org: 'DNP Health Seva Pvt. Ltd.', desc: 'Leading digital initiatives and coordinating patient outreach programs with strategic focus.', align: 'right' as const, delay: 0.3 },
                  { period: '2024', role: 'Internship', org: 'Unschool', desc: 'Assisted in market research and operational streamlining for emerging educational platforms.', align: 'left' as const, delay: 0.6 },
                  { period: '2023 - 2026', role: 'BBA', org: "St. Xavier's College", desc: 'Developing expertise in business administration with a specialized concentration in data-driven management.', align: 'right' as const, delay: 0.9 },
                ].map(({ period, role, org, desc, align, delay }) => (
                  <div key={role} className="relative flex flex-col md:flex-row items-center md:justify-between w-full group">
                    {/* Dot with pulse */}
                    <motion.div
                      className="absolute left-0 md:left-1/2 md:-ml-[20px] z-10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 rounded-full border-4 border-[#131313] bg-[#f2ca50] group-hover:scale-125 transition-all duration-500 shadow-[0_0_20px_rgba(242,202,80,0.3)] group-hover:shadow-[0_0_30px_rgba(242,202,80,0.6)]" />
                      <div className="absolute inset-0 w-10 h-10 rounded-full bg-[#f2ca50]/20 animate-ping" style={{ animationDuration: '3s' }} />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className={`w-full md:w-[45%] pl-14 md:pl-0 ${align === 'right' ? 'md:text-right' : ''}`}
                      initial={{ opacity: 0, x: align === 'right' ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                      viewport={{ once: true }}
                    >
                      <span className="font-[--font-inter] text-xs tracking-widest text-[#f2ca50] uppercase block mb-2">{period}</span>
                      <h3 className="font-[--font-noto-serif] text-xl text-white group-hover:text-[#f2ca50] transition-colors duration-300">{role}</h3>
                      <p className="font-[--font-inter] text-lg text-white/40 mt-2">{org}</p>
                      <motion.p
                        className="font-[--font-inter] text-xs text-white/20 mt-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: delay + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {desc}
                      </motion.p>
                    </motion.div>

                    {align === 'right' && <div className="hidden md:block w-[45%]" />}
                    {align === 'left' && <div className="hidden md:block w-[45%] order-first" />}
                  </div>
                ))}
              </div>

              {/* ── End Marker ── */}
              <motion.div
                className="absolute left-[10px] md:left-1/2 md:-ml-[10px] -bottom-2 flex flex-col items-center z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <div className="w-5 h-5 rounded-full bg-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.6)]" />
                <span className="font-[--font-inter] text-[0.6rem] tracking-[0.3em] text-[#f2ca50]/60 uppercase mt-2 whitespace-nowrap">Present Day</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- CERTIFICATIONS SECTION --- */}
        <section className="py-32 px-10">
          <div className="max-w-[1440px] mx-auto">
            <motion.div className="text-center mb-24" {...fadeInUp}>
              <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">Recognition</span>
              <h2 className="font-[--font-noto-serif] text-4xl font-bold text-white">Professional Certifications</h2>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { icon: 'workspace_premium', name: 'TCS iON Career Edge', cert: 'Young Professional', issuer: 'TCS iON • Mar 2026', skills: 'Communication · AI · Strategic Thinking' },
                { icon: 'school', name: 'IIM Bangalore (SWAYAM)', cert: 'Strategic Management', issuer: 'IIMB • Jan 2026', skills: 'Strategic Planning · Data Analysis' },
                { icon: 'analytics', name: 'Deloitte Australia', cert: 'Data Analytics Job Simulation', issuer: 'Forage • Oct 2025', skills: 'Data Analysis · Data Visualization' },
                { icon: 'monitoring', name: 'Tata Group', cert: 'Data Visualisation: Empowering Business', issuer: 'Forage • Oct 2025', skills: 'Data Visualization · Business Insights' },
              ].map(({ icon, name, cert, issuer, skills }) => (
                <motion.a 
                  key={name} 
                  href="https://www.linkedin.com/in/syed-amaan-san/details/certifications/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variants={staggerItem} 
                  className="block p-8 bg-white/[0.02] rounded-xl border border-white/5 hover:border-[#f2ca50]/30 hover:shadow-[0_0_30px_rgba(242,202,80,0.08)] transition-all duration-500 text-center group cursor-pointer interactive-card"
                >
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full border border-[#f2ca50]/20 flex items-center justify-center group-hover:border-[#f2ca50]/50 group-hover:shadow-[0_0_20px_rgba(242,202,80,0.15)] transition-all duration-500">
                    <span className="material-symbols-outlined text-[#f2ca50] text-4xl">{icon}</span>
                  </div>
                  <h4 className="font-[--font-noto-serif] text-white font-bold mb-1 text-sm leading-snug">{name}</h4>
                  <p className="font-[--font-inter] text-xs text-[#f2ca50]/70 uppercase tracking-tighter mb-2">{cert}</p>
                  <p className="font-[--font-inter] text-[0.65rem] text-white/20 tracking-wider mb-3">{issuer}</p>
                  <p className="font-[--font-inter] text-[0.6rem] text-white/15 leading-relaxed">{skills}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CONNECT SECTION --- */}
        <section className="py-32 px-10" id="connect">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
            <motion.div className="space-y-12" {...fadeInUp}>
              <div>
                <span className="font-[--font-inter] text-sm tracking-[0.3em] text-[#f2ca50] uppercase block mb-4">Get In Touch</span>
                <h2 className="font-[--font-noto-serif] text-5xl font-bold text-white leading-tight">Let&apos;s Orchestrate <br />Future Insights.</h2>
              </div>
              <div className="space-y-8 font-[--font-inter] text-lg text-white/50">
                <motion.a 
                  href="mailto:syedamaansan24@gmail.com" 
                  className="flex items-center gap-6 group interactive-card"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                    <span className="material-symbols-outlined text-[#f2ca50] group-hover:text-black">mail</span>
                  </div>
                  <span className="group-hover:text-white transition-colors font-medium">syedamaansan24@gmail.com</span>
                </motion.a>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#f2ca50]">location_on</span>
                  </div>
                  <span className="font-medium">Patna, Bihar</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="glass-card p-12 rounded-xl" {...fadeInUp}>
              <div className="space-y-10">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc4gYl7oTWiN-Wdowt550TJnL4q7gwTI4x-KawzfhPS3hZtlw/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full inline-block text-center bg-[#f2ca50] text-black py-5 rounded-md font-[--font-inter] text-sm tracking-[0.3em] uppercase hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all duration-300"
                >
                  Initialize Connection
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <footer className="bg-[#0e0e0e] py-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center px-16 w-full max-w-[1440px] mx-auto gap-6">
          <div className="text-[#f2ca50] font-black font-[--font-noto-serif] text-lg tracking-tighter uppercase leading-tight">
            SYED<br />AMAAN
          </div>
          <div className="text-center md:text-left">
            <p className="font-[--font-inter] text-[0.7rem] tracking-[0.15em] uppercase text-white/30 mb-1">© 2024 SYED AMAAN. THE VISIONARY CURATOR.</p>
            <p className="font-[--font-inter] text-[0.65rem] tracking-[0.15em] uppercase text-[#f2ca50]/40 italic">Made with love and dedication.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-[--font-inter] text-xs tracking-[0.2em] uppercase text-white/30 hover:text-[#f2ca50] transition-all duration-500" href="https://linkedin.com/in/syed-amaan-san/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="font-[--font-inter] text-xs tracking-[0.2em] uppercase text-white/30 hover:text-[#f2ca50] transition-all duration-500" href="mailto:syedamaansan24@gmail.com">Email</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="font-[--font-noto-serif] text-lg text-white/10 tracking-[0.4em] uppercase">Thank you for visiting!</p>
          <VisitorCounter />
        </div>
      </footer>
    </main>
  );
}
