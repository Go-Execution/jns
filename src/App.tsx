import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Menu, X, Phone, MapPin, Truck, ShieldCheck, Mail, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial="hidden" animate="visible" variants={fadeDown}
      className="absolute top-0 left-0 right-0 z-50 will-change-transform"
    >
      <div className="container mx-auto max-w-[1400px] px-6 py-8 flex justify-between items-center">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-3 w-auto md:w-1/4">
          <img src="/Jns Logo Transparent.png" alt="JNS Hauling Logo" className="h-10 md:h-14 w-auto" />
          <span className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground hidden sm:block uppercase">
            JNS Hauling LLC
          </span>
        </a>
        
        {/* Mobile menu toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Center: Navigation */}
        <nav className={`absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent flex-col md:flex-row flex items-center justify-center flex-1 gap-8 p-8 md:p-0 transition-all border-b border-border md:border-none ${isOpen ? 'flex' : 'hidden md:flex'}`}>
          <a href="#fleet" className="text-sm font-semibold text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>The Fleet</a>
          <a href="#services" className="text-sm font-semibold text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#service-area" className="text-sm font-semibold text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Service Area</a>
          <a href="#apply" className="text-sm font-semibold text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Careers</a>
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center justify-end w-1/4 gap-4">
          <a href="#quote" className="btn bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors">
            Contact Us
          </a>
          <a href="#apply" className="btn bg-transparent border border-border text-foreground hover:bg-secondary rounded-full px-6 py-2.5 text-sm font-semibold transition-colors">
            Apply
          </a>
        </div>
      </div>
    </motion.header>
  );
};


const Hero = () => {
  return (
    <section className="relative pt-40 px-6 max-w-[1400px] mx-auto min-h-screen flex flex-col">
      {/* Top Text Section */}
      <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
        
        {/* Huge Headline */}
        <div className="w-full lg:w-[65%]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem] font-display tracking-tight font-bold leading-[1.1] text-foreground"
          >
            Let's Move Your<br/>Business Forward
          </motion.h1>
        </div>

        {/* Right Info & Button */}
        <div className="w-full lg:w-[30%] flex flex-col items-start lg:pb-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted mb-8 font-medium leading-relaxed"
          >
            We provide reliable shipping wherever you need it. With us, you get precision, speed, and confidence at every step.
          </motion.p>
          <motion.a 
            href="#quote"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-3.5 text-base font-bold transition-colors"
          >
            Learn More
          </motion.a>
        </div>
      </div>

      {/* Bottom Large Image/Video */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-t-[3rem] overflow-hidden relative shadow-2xl mt-auto"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          src="/8457855-uhd_3840_2160_24fps.mp4"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Accent floating label in corner matching the Dribbble style (/AXION on container) */}
        <div className="absolute bottom-12 right-12 hidden md:block">
          <span className="font-display text-[6rem] font-bold text-white/90 drop-shadow-2xl opacity-90">
            JNS
          </span>
        </div>
      </motion.div>
    </section>
  );
};


const MetricStrip = () => {
  return (
    <div className="border-y border-border bg-secondary/30 py-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 text-sm font-bold text-muted uppercase tracking-widest text-center"
        >
          <span className="flex items-center justify-center gap-3"><ShieldCheck size={20} className="text-primary" /> Est. 2014</span>
          <span className="flex items-center justify-center gap-3"><Truck size={20} className="text-primary" /> Large Capacity</span>
          <span className="flex items-center justify-center gap-3 text-foreground"><CheckCircle2 size={20} className="text-primary" /> DBE Certified</span>
          <span className="flex items-center justify-center gap-3"><MapPin size={20} className="text-primary" /> GA & AL Routes</span>
        </motion.div>
      </div>
    </div>
  );
};

const WhatWeHaul = () => {
  const cards = [
    { title: "DIRT & SOIL", src: "/pexels-alfinauzikri-5696170.jpg", colSpan: "md:col-span-8", rowSpan: "md:row-span-2" },
    { title: "SAND", src: "/pexels-nc-farm-bureau-mark-17765495.jpg", colSpan: "md:col-span-4", rowSpan: "md:row-span-1" },
    { title: "AGGREGATE", src: "/pexels-soner-mazlum-182555-6890415.jpg", colSpan: "md:col-span-4", rowSpan: "md:row-span-1" },
    { title: "ASPHALT", src: "/pexels-zaiwizi-89700396-9529407.jpg", colSpan: "md:col-span-12", rowSpan: "md:row-span-1" }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Core Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-display tracking-tight text-foreground font-extrabold">Materials We Transport</h3>
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-muted max-w-md text-base font-medium">
            Equipped to handle high-volume transportation for the most demanding commercial and residential infrastructure projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          {cards.map((card, i) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1 
              }}
              className={`relative rounded-3xl overflow-hidden group shadow-lg cursor-pointer bg-zinc-900 ${card.colSpan} ${card.rowSpan}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 + 0.4 }}
                className="absolute inset-0 w-full h-full will-change-transform"
              >
                <img src={card.src} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h4 className="text-3xl font-display font-bold text-white mb-1">{card.title}</h4>
                    <p className="text-sm text-gray-300 font-medium">Bulk Transportation</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl shadow-primary/30">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  return (
    <section id="fleet" className="py-20 md:py-32 px-6 relative bg-foreground text-background overflow-hidden rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6 my-12">
      <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/pexels-alfinauzikri-5696170.jpg" 
                alt="Truck Fleet" 
                className="w-full h-[300px] md:h-[500px] object-cover" 
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2 lg:pl-8">
            <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Our Assets</h2>
            <h3 className="text-3xl md:text-5xl font-display tracking-tight text-white font-extrabold mb-6">The Power to Deliver</h3>
            <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed">
              Our operation runs on a dedicated, modern fleet of Western Star 4700 tandem dump trucks. Maintained to the highest industry standards, our equipment guarantees reliable capacity for your largest aggregate and asphalt jobs.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border border-white/10 bg-white/5 p-6 rounded-2xl">
                <span className="block text-5xl text-white font-display font-bold mb-2">11</span>
                <span className="text-xs text-primary uppercase tracking-widest font-bold">Tandem Trucks</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="border border-white/10 bg-white/5 p-6 rounded-2xl">
                <span className="block text-5xl text-white font-display font-bold mb-2">2014</span>
                <span className="text-xs text-primary uppercase tracking-widest font-bold">Year Established</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  return (
    <section id="service-area" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Logistics Network</motion.h2>
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-5xl font-display tracking-tight text-foreground font-extrabold mb-6">Service Area</motion.h3>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-base md:text-lg text-muted font-medium">
            Proudly based in Columbus, GA, we actively service commercial and residential projects across Georgia and Alabama with precision and punctuality.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -8 }} className="glass-card p-6 md:p-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 md:gap-8 relative overflow-hidden group rounded-3xl border border-border shadow-xl bg-background">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
              <MapPin size={28} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">Georgia</h4>
              <span className="text-xs md:text-sm text-muted font-semibold uppercase tracking-widest">Primary Hub</span>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -8 }} className="glass-card p-6 md:p-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 md:gap-8 relative overflow-hidden group rounded-3xl border border-border shadow-xl bg-background">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
              <MapPin size={28} className="text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">Alabama</h4>
              <span className="text-xs md:text-sm text-muted font-semibold uppercase tracking-widest">Extended Network</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FormsSection = () => {
  const [quoteStatus, setQuoteStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteStatus('sending');
    setTimeout(() => { setQuoteStatus('success'); (e.target as HTMLFormElement).reset(); setTimeout(() => setQuoteStatus('idle'), 5000); }, 1000);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div id="quote" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-foreground text-background p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl mx-4 md:mx-0">
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="text-center mb-10 relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Request a Quote</h3>
            <p className="text-gray-400 font-medium text-sm md:text-base">Fill out the load ticket below to get a prompt rate for your hauling needs.</p>
          </div>
          
          <form onSubmit={handleQuote} className="space-y-6 relative z-10">
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><input required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="text" /></div>
              <div><input placeholder="Company Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="text" /></div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><input required placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="tel" /></div>
              <div><input required placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="email" /></div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <input required placeholder="Project Location" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="text" />
            </motion.div>
            
            <motion.div variants={fadeUp} className="pt-2">
              <label className="block text-sm font-semibold text-gray-300 mb-4 uppercase tracking-widest">Material Needed</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Dirt', 'Sand', 'Aggregate', 'Asphalt'].map(m => (
                  <label key={m} className="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors text-center">
                    <input type="checkbox" className="hidden peer" />
                    <span className="text-sm font-bold text-gray-400 peer-checked:text-primary transition-colors">{m}</span>
                  </label>
                ))}
              </div>
            </motion.div>
            
            <button type="submit" disabled={quoteStatus === 'sending'} className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg py-5 rounded-xl transition-colors disabled:opacity-70 mt-6 shadow-xl shadow-primary/20">
              {quoteStatus === 'sending' ? 'Sending Request...' : 'Submit Load Ticket'}
            </button>
            {quoteStatus === 'success' && <div className="p-4 bg-green-500/20 text-green-300 border border-green-500/30 rounded-xl text-center font-medium mt-4">Load ticket sent successfully. We will contact you shortly.</div>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 pb-8 px-6 bg-secondary/30 relative border-t border-border mt-12">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-12 gap-12 mb-16 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <img src="/Jns Logo Transparent.png" alt="JNS Hauling Logo" className="h-14 md:h-18 w-auto " />
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground">
              JNS<span className="text-primary">HAULING</span>
            </span>
          </div>
          <p className="text-sm md:text-base text-muted mb-8 leading-relaxed max-w-sm font-medium mx-auto md:mx-0">
            Reliable dump truck hauling for dirt, sand, aggregate, and asphalt. Grounded in reliability and precision logistics.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
              <span className="font-bold">in</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
              <span className="font-bold">f</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-3 md:col-start-7 text-center md:text-left">
          <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Contact</h4>
          <div className="space-y-5 text-sm font-medium text-muted flex flex-col items-center md:items-start">
            <a href="tel:706-681-1765" className="flex items-center gap-3 hover:text-primary transition-colors"><Phone size={18} className="text-foreground" /> (706) 681-1765</a>
            <a href="mailto:jandshauling@icloud.com" className="flex items-center gap-3 hover:text-primary transition-colors"><Mail size={18} className="text-foreground" /> jandshauling@icloud.com</a>
            <p className="flex items-start gap-3"><MapPin size={18} className="text-foreground flex-shrink-0 mt-0.5" /> 1254 Noland Dr<br/>Columbus, GA 31907</p>
          </div>
        </motion.div>
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-3 text-center md:text-left">
          <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Explore</h4>
          <div className="flex flex-col items-center md:items-start gap-4 text-sm font-medium text-muted">
            <a href="#quote" className="hover:text-primary transition-colors inline-flex items-center gap-2"><ChevronRight size={16} /> Get a Quote</a>
            <a href="#services" className="hover:text-primary transition-colors inline-flex items-center gap-2"><ChevronRight size={16} /> Services</a>
            <a href="#fleet" className="hover:text-primary transition-colors inline-flex items-center gap-2"><ChevronRight size={16} /> The Fleet</a>
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border text-sm font-medium text-muted">
        <p>&copy; {new Date().getFullYear()} JNS Hauling LLC. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-primary" /> DBE Certified</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Header />
      <Hero />
      <MetricStrip />
      <WhatWeHaul />
      <Fleet />
      <ServiceArea />
      <FormsSection />
      <Footer />
    </div>
  );
}

export default App;
