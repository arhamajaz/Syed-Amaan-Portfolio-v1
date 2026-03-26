"use client";

import { useEffect, useRef, useState } from "react";
import { EtherealShadow } from "@/components/ui/etheral-shadow";
import { WisteriaBackground } from "@/components/WisteriaBackground";

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);

      // Active Section Tracking
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    // Intersection Observer for Section Reveals
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-12");
          
          const staggered = entry.target.querySelectorAll(".stagger-item");
          staggered.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("opacity-100", "translate-y-0");
              child.classList.remove("opacity-0", "translate-y-8");
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll("section:not(#vision) > div").forEach((el) => {
        el.classList.add("transition-all", "duration-[1200ms]", "ease-out", "opacity-0", "translate-y-12");
        observer.observe(el);
    });

    document.querySelectorAll(".expertise-grid > div, .project-card, .certification-card").forEach(el => {
        el.classList.add("stagger-item", "transition-all", "duration-[800ms]", "ease-out", "opacity-0", "translate-y-8");
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen text-on-surface">
      {/* Background Layer */}
      <WisteriaBackground />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-primary/20 z-[60]">
        <div 
            className="h-full bg-primary transition-all duration-100 ease-out shadow-[0_0_10px_#f2ca50]" 
            style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl border-b border-outline-variant/5">
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-10 py-6">
          <a className="font-headline font-bold text-2xl tracking-tighter text-primary hover:scale-105 transition-transform" href="#">
            SYED AMAAN
          </a>
          <div className="hidden lg:flex gap-16 items-center">
            {["about", "vision", "expertise", "archive", "timeline", "connect"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`nav-link font-headline text-[1.0rem] tracking-widest uppercase text-on-secondary-container hover:text-primary ${activeSection === item ? "text-primary active" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          <button className="bg-primary text-on-primary px-6 py-1.5 rounded-md font-label text-label-md tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all">
            Inquire
          </button>
        </div>
      </nav>

      {/* Hero Section - Stark Background */}
      <section className="relative h-screen flex flex-col justify-center items-center px-10 overflow-hidden" id="vision">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          <img 
            className="w-full h-full object-cover opacity-20 grayscale" 
            alt="Hero Background" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIoAz-JbW_qwZ_i7kUAkvNZ2L-h6J6CM21ZWi_tBfbhzrQXTkziVQxmaHL2OuHIUFGhLDKjgBiUjEY54bVTZFHA1jg5qyXJtdNX3YjRt0Xdm377CtlDh9UYMwtTwxWb9ppnUmAKu_AxC7mSHGy1O2cZElOe7BAksYTBhrWzyoeZDiU-kWx7-hv6ScqCwb4BMTmFuvDVhoDaMRIwUiFzy3xbKwShfzmv0VPh9oainxfoeBv5RWfN4kfqy682-qju3oSryvmp1_yHyuz" 
          />
        </div>
        <div className="relative z-10 text-center max-w-5xl animate-fade-in-up">
          <span className="font-label text-label-md tracking-[0.5em] text-primary uppercase block mb-6">Strategic Mindset • Analytical Precision</span>
          <h1 className="font-headline text-[5rem] md:text-[8rem] leading-none font-bold text-on-surface mb-8 tracking-tighter">
            SYED <span className="text-gradient-gold">AMAAN</span>
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto tracking-wide mb-12 uppercase leading-relaxed">
            PURSUING BBA <span className="mx-2 text-primary">|</span> DATA ANALYSIS <span class="mx-2 text-primary">|</span> ADMINISTRATIVE SUPPORT
          </p>
          <a className="inline-flex items-center group" href="#archive">
            <div className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
              <span className="material-symbols-outlined text-primary group-hover:text-on-primary">arrow_downward</span>
            </div>
            <span className="ml-4 font-label text-label-md tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary">Discover More</span>
          </a>
        </div>
      </section>

      {/* Main Content Wrapper with Ethereal Shadow */}
      <div className="relative w-full bg-transparent">
        <EtherealShadow 
            animation={{ scale: 80, speed: 40 }} 
            noise={{ opacity: 0.3, scale: 1.2 }} 
            sizing="fill" 
        />

        {/* About Section */}
        <section className="py-32 px-10" id="about">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl group">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                alt="Personal portrait of Syed Amaan" 
                src="WhatsApp Image 2026-03-25 at 7.23.09 PM.jpeg" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-outline-variant/20" />
            </div>
            <div className="space-y-12">
              <div>
                <span className="font-label text-label-md tracking-[0.3em] text-primary uppercase block mb-4">The Curator</span>
                <h2 className="font-headline text-display-lg font-bold text-on-surface leading-tight">Driven by Insight, <br/>Refined by Strategy.</h2>
              </div>
              <div className="space-y-6 font-body text-body-lg text-on-surface-variant leading-relaxed">
                <p>A BBA student with a profound interest in Data Analytics, seeking to leverage administrative and analytical skills in a dynamic organizational environment. My journey is defined by a commitment to transforming raw data into strategic assets.</p>
                <p>With foundational expertise in Strategic Management from <span className="text-primary font-semibold">IIM Bangalore</span> and practical experience in customer-centric roles, I bridge the gap between operational efficiency and data-driven decision-making.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/10">
                <div>
                  <h4 className="font-headline text-title-lg text-primary mb-2">3+</h4>
                  <p className="font-label text-label-md tracking-widest uppercase">Analytical Frameworks</p>
                </div>
                <div>
                  <h4 className="font-headline text-title-lg text-primary mb-2">Top 5%</h4>
                  <p className="font-label text-label-md tracking-widest uppercase">Project Lead Performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-32 px-10" id="expertise">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-24">
              <span className="font-label text-label-md tracking-[0.3em] text-primary uppercase block mb-4">Core Competencies</span>
              <h2 className="font-headline text-headline-lg font-bold text-on-surface">The Architecture of Expertise</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-12">
                <h3 className="font-headline text-title-lg text-on-surface border-b border-primary/20 pb-4">Technical Proficiency</h3>
                <div className="space-y-8">
                  {[
                    { label: "Data Visualization (Power BI)", value: 90 },
                    { label: "Advanced Excel & SQL", value: 85 },
                    { label: "Python for Analysis", value: 70 }
                  ].map((skill) => (
                    <div key={skill.label}>
                      <div className="flex justify-between mb-4">
                        <span className="font-label text-label-md tracking-widest uppercase">{skill.label}</span>
                        <span className="text-primary">{skill.value}%</span>
                      </div>
                      <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-12">
                <h3 className="font-headline text-title-lg text-on-surface border-b border-primary/20 pb-4">Key Strengths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 expertise-grid">
                  {[
                    { icon: "verified_user", title: "Precision", desc: "Unwavering attention to granular detail in data modeling." },
                    { icon: "account_tree", title: "Multitasking", desc: "Navigating complex workflows with strategic efficiency." },
                    { icon: "groups", title: "Collaboration", desc: "Forging synergies across diverse multidisciplinary teams." },
                    { icon: "insights", title: "Problem Solving", desc: "Deciphering challenges through analytical lenses." }
                  ].map((strength) => (
                    <div key={strength.title} className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-all group">
                      <span className="material-symbols-outlined text-primary mb-4 scale-125">{strength.icon}</span>
                      <h4 className="font-body font-bold text-on-surface mb-2">{strength.title}</h4>
                      <p className="font-label text-label-md text-on-surface-variant text-sm">{strength.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Archive */}
        <section className="py-32 px-10" id="archive">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-xl">
                <span className="font-label text-label-md tracking-[0.3em] text-primary uppercase block mb-4">Project Archive</span>
                <h2 className="font-headline text-display-lg font-bold text-on-surface">Curation of Analytical Endeavors</h2>
              </div>
              <div className="pb-4">
                <span className="font-body text-body-lg text-on-surface-variant tracking-wider">2024-2025 PORTFOLIO</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { date: "Dec 2025 • Power BI", title: "Consumer Preference Analysis", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd-8btPJ3tky27yiJMBefEOImToAy2OnsaZME5J44kTc9GN2RC2XTl4UUUE-6I0-cWeMOPlU_amwp-gOZdRCLMpiw6SwN5m8zK1XVf0ywEFW8bYCfRQ2leTkc8VIiikcwpzD8DJZ9hR4v2C8278mb8DWC6u6o8fXO2FhnzQDEZrQz3EY84TxBUxY9ooja0AKKwJ3C3Sa2gkPOzz6X6xQCkYbg5OOHrvQ1i-joRdtEV3K-NN8KA-138m-cRfq3rgge4SDN-cx6rs8Kc" },
                { date: "Oct-Nov 2025 • Analytics", title: "Decision Influence Map", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT2slcRvcvmXDYLVaqKStnjejw-OfCbH7-Nqh275_oAJW1iqyzXzTOXiy_LKL86YiTNZu7TQTa9dNMpEuhUVoXGYk4YRo8FD38ABqpFCa9aWntSpvoSzxM-uLD8DJ5rDCHHMsLoE5GAKyTjshTqu7ea3_XlddkJzkoAy36rX9WauwvQoJwRROIB5SvjU7j6OKnXCE82RMBMQu-UPKkDsl4fYP8cD1GlNH4mQHb-CfkXM7d_3D7kmnbEAv4cpUPgjox5arsSnB_04f6" },
                { date: "Sept 2025 • Sales Audit", title: "Coca-Cola Landscape", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzX2P3co0TaGHwB6vyKKPrpi_tlBLVblJU6O4tA_AZMGwX7ljoWTNJQkEPVGn907qbm9nWajbFRsRii0uEOmOPQAs3V5fxXSLo9XFc5lkYzD7Uk2P5FmVtRAIJ1XEnDo1aJ0FOyWdIUqVXqkFmbRIFDqfZDL8YHN9Ns1CqsfEkyOKotpDEDfKNLHClPM6x18uzghjJt40L_t2GVBRXN8aJDt1cTp_ZwGm00P1rd2BTLfQ-wTqOviP8kzD8xApOFGmJFCN1HBmQxzJy" }
              ].map((proj) => (
                <a key={proj.title} href="#" className="block group relative aspect-[3/4] bg-surface-container-high rounded-xl overflow-hidden project-card">
                  <img className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" alt={proj.title} src={proj.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="font-label text-[0.65rem] tracking-[0.3em] text-primary uppercase mb-2 block">{proj.date}</span>
                    <h3 className="font-headline text-title-lg text-on-surface mb-4">{proj.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 px-10" id="timeline">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-24">
              <span className="font-label text-label-md tracking-[0.3em] text-primary uppercase block mb-4">Career Trajectory</span>
              <h2 className="font-headline text-headline-lg font-bold text-on-surface">A Cinematic Progression</h2>
            </div>
            <div className="relative space-y-24 before:content-[''] before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-outline-variant/30">
              {[
                { date: "2024 - Present", title: "Marketing Intern", subtitle: "DNP Health Seva Pvt. Ltd.", align: "right" },
                { date: "2024", title: "Internship", subtitle: "Unschool", align: "left" },
                { date: "2023 - 2026", title: "BBA (Analytics Focus)", subtitle: "St. Xavier's College", align: "right" }
              ].map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center md:justify-between w-full group`}>
                  <div className="absolute left-0 md:left-1/2 md:-ml-[20px] w-10 h-10 rounded-full border-4 border-surface bg-primary z-10 group-hover:scale-125 transition-transform" />
                  <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${item.align === "right" ? "md:text-right" : "order-last md:order-none"}`}>
                    <span className="font-label text-label-md tracking-widest text-primary uppercase block mb-2">{item.date}</span>
                    <h3 className="font-headline text-title-lg text-on-surface">{item.title}</h3>
                    <p className="font-body text-body-lg text-on-surface-variant mt-2">{item.subtitle}</p>
                  </div>
                  <div className="hidden md:block w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-32 px-10" id="connect">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div>
                <span className="font-label text-label-md tracking-[0.3em] text-primary uppercase block mb-4">Get In Touch</span>
                <h2 className="font-headline text-display-lg font-bold text-on-surface leading-tight">Let's Orchestrate <br/>Future Insights.</h2>
              </div>
              <div className="space-y-8 font-body text-body-lg text-on-surface-variant">
                <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href='mailto:syedamaansan24@gmail.com'}>
                    <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                        <span className="material-symbols-outlined text-primary group-hover:text-on-primary">mail</span>
                    </div>
                    <span className="tracking-wide group-hover:text-primary transition-colors">syedamaansan24@gmail.com</span>
                </div>
                <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                        <span className="material-symbols-outlined text-primary group-hover:text-on-primary">location_on</span>
                    </div>
                    <span className="tracking-wide group-hover:text-primary transition-colors">Patna, Bihar</span>
                </div>
              </div>
              <div className="flex gap-6 pt-12">
                <a className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:border-primary transition-all hover:-translate-y-1" href="https://linkedin.com/in/syed-amaan-san/" target="_blank">
                    <svg className="w-6 h-6 fill-current text-on-surface-variant group-hover:text-on-primary" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            <div className="glass-card p-12 rounded-xl">
              <form className="space-y-10">
                <div className="group relative">
                  <label className="font-label text-label-md tracking-widest text-primary uppercase block mb-4">Identity</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-outline-variant" placeholder="YOUR FULL NAME" type="text" />
                </div>
                <div className="group relative">
                  <label className="font-label text-label-md tracking-widest text-primary uppercase block mb-4">Email Address</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-outline-variant" placeholder="YOUR@EMAIL.COM" type="email" />
                </div>
                <div className="group relative">
                  <label className="font-label text-label-md tracking-widest text-primary uppercase block mb-4">Brief Narrative</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-outline-variant resize-none" placeholder="HOW CAN I ASSIST YOUR VISION?" rows={4} />
                </div>
                <button className="w-full bg-primary text-on-primary py-5 rounded-md font-label text-label-md tracking-[0.3em] uppercase hover:scale-[1.02] transition-transform">
                  Initialize Connection
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0e0e0e] py-20 border-t border-outline-variant/10">
          <div className="flex flex-col md:flex-row justify-between items-center px-16 w-full max-w-[1440px] mx-auto">
            <div className="text-primary font-bold font-headline text-xl tracking-tighter mb-8 md:mb-0">SYED AMAAN</div>
            <div className="space-y-2 text-center md:text-left">
              <p className="font-body text-label-md tracking-[0.2em] uppercase text-on-surface-variant/50">© 2024 SYED AMAAN. THE VISIONARY CURATOR.</p>
              <p className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-primary/40 italic">Made with love and dedication.</p>
            </div>
            <div className="flex gap-10 mt-8 md:mt-0">
              <a className="font-body text-label-md tracking-[0.2em] uppercase text-on-surface-variant/50 hover:text-primary transition-all" href="https://linkedin.com/in/syed-amaan-san/" target="_blank">LinkedIn</a>
              <a className="font-body text-label-md tracking-[0.2em] uppercase text-on-surface-variant/50 hover:text-primary transition-all" href="mailto:syedamaansan24@gmail.com">Email</a>
            </div>
          </div>
          <div className="mt-20 text-center">
            <p className="font-headline text-title-lg text-on-surface-variant/30 tracking-[0.4em] uppercase">Thank you for visiting.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
