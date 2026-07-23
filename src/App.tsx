import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin, Truck, ShieldCheck, Mail } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-asphalt shadow-md">
      <div className="container mx-auto max-w-[1200px] px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="/Jns Logo Transparent.png" alt="JNS Hauling Logo" className="h-12 w-auto" />
          <span className="font-display text-2xl font-bold tracking-wide hidden sm:block">
            JNS<span className="text-amber">HAULING</span>
          </span>
        </a>
        
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row flex items-center gap-6 p-6 md:p-0 transition-all ${isOpen ? 'flex border-t border-gray-200 shadow-md' : 'hidden md:flex'}`}>
          <a href="#fleet" className="hover:text-amber transition-colors font-medium text-asphalt" onClick={() => setIsOpen(false)}>The Fleet</a>
          <a href="#service-area" className="hover:text-amber transition-colors font-medium text-asphalt" onClick={() => setIsOpen(false)}>Service Area</a>
          <a href="#quote" className="font-display uppercase hover:text-amber transition-colors text-asphalt" onClick={() => setIsOpen(false)}>Get a Quote</a>
          <a href="#apply" className="font-display uppercase hover:text-amber transition-colors text-asphalt" onClick={() => setIsOpen(false)}>Drive for Us</a>
          <a href="tel:706-681-1765" className="font-mono text-amber font-semibold">(706) 681-1765</a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-asphalt text-white min-h-[80vh] flex items-center px-6 overflow-hidden">
      <motion.img 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" 
        alt="Loaded tandem dump truck at job site" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display mb-4"
        >
          MOVING GEORGIA &amp; ALABAMA SINCE 2014
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-10"
        >
          DBE-certified dump truck hauling for dirt, sand, aggregate, and asphalt. Grounded in reliability, backed by a fleet of 11 tandems.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#quote" className="btn btn-primary">Get a Quote</a>
          <a href="#apply" className="btn btn-secondary">Apply to Drive</a>
        </motion.div>
      </div>
    </section>
  );
};

const ManifestStrip = () => {
  return (
    <div className="bg-asphalt text-ticket-paper font-mono text-base md:text-lg py-6 border-y-4 border-amber overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0"
        >
          <span className="flex items-center gap-2"><ShieldCheck size={20} className="text-amber" /> TICKET NO. 0001</span>
          <span className="hidden md:inline-block w-1 h-5 bg-amber mx-4"></span>
          <span className="flex items-center gap-2">ESTABLISHED 2014</span>
          <span className="hidden md:inline-block w-1 h-5 bg-amber mx-4"></span>
          <span className="flex items-center gap-2 text-amber font-bold">DBE CERTIFIED</span>
          <span className="hidden md:inline-block w-1 h-5 bg-amber mx-4"></span>
          <span className="flex items-center gap-2"><Truck size={20} className="text-amber" /> FLEET: 11 TANDEMS</span>
          <span className="hidden md:inline-block w-1 h-5 bg-amber mx-4"></span>
          <span className="flex items-center gap-2"><MapPin size={20} className="text-amber" /> SERVICE: GA · AL</span>
        </motion.div>
      </div>
    </div>
  );
};

const WhatWeHaul = () => {
  const materials = [
    { name: 'DIRT', icon: <svg className="w-16 h-16 text-steel mx-auto mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg> },
    { name: 'SAND', icon: <svg className="w-16 h-16 text-steel mx-auto mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg> },
    { name: 'AGGREGATE', icon: <svg className="w-16 h-16 text-steel mx-auto mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> },
    { name: 'ASPHALT', icon: <svg className="w-16 h-16 text-steel mx-auto mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> }
  ];

  return (
    <section className="bg-asphalt text-ticket-paper py-20 px-6">
      <div className="container mx-auto max-w-[1200px]">
        <motion.h2 
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-display text-amber text-center mb-12"
        >
          WHAT WE HAUL
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((mat, i) => (
            <motion.div 
              key={mat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, borderColor: '#F2A900' }}
              className="bg-white text-asphalt p-10 text-center border border-gray-200 border-b-4 border-b-aggregate-tan transition-colors"
            >
              {mat.icon}
              <h3 className="text-2xl font-display">{mat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  return (
    <section id="fleet" className="py-20 px-6">
      <div className="container mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-4xl md:text-5xl font-display text-asphalt mb-4">THE FLEET</h2>
          <h3 className="text-2xl md:text-3xl font-display text-amber mb-6">WESTERN STAR 4700 TANDEMS</h3>
          <p className="text-lg text-steel mb-8">
            Our operation runs on a dedicated fleet of 11 Western Star 4700 tandem dump trucks. Maintained to the highest standard, our equipment guarantees reliable capacity for your largest aggregate and asphalt jobs.
          </p>
          <div className="flex gap-12 pt-8 border-t border-gray-300">
            <div>
              <span className="block font-mono text-5xl text-amber mb-2">11</span>
              <span className="font-display tracking-wide text-asphalt">TANDEM TRUCKS</span>
            </div>
            <div>
              <span className="block font-mono text-5xl text-amber mb-2">2014</span>
              <span className="font-display tracking-wide text-asphalt">YEAR ESTABLISHED</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000" alt="Western Star 4700 tandem dump truck" className="w-full rounded border-2 border-steel shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  return (
    <section id="service-area" className="bg-asphalt text-white py-20 px-6">
      <div className="container mx-auto max-w-[800px] text-center">
        <motion.h2 variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-display text-amber mb-6">SERVICE AREA</motion.h2>
        <motion.p variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xl text-gray-300 mb-12">
          We are proudly based in Columbus, GA and actively service regions across both Georgia and Alabama.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
          <motion.div whileHover={{ scale: 1.05 }} className="border-2 border-steel p-8 bg-ink/50 backdrop-blur-sm">
            <h3 className="text-3xl font-display text-white mb-2">GEORGIA</h3>
            <span className="font-mono text-amber">PRIMARY SERVICE</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="border-2 border-steel p-8 bg-ink/50 backdrop-blur-sm">
            <h3 className="text-3xl font-display text-white mb-2">ALABAMA</h3>
            <span className="font-mono text-amber">PRIMARY SERVICE</span>
          </motion.div>
        </div>
        <p className="font-mono text-sm text-gray-400">(Note: Specific counties/cities available upon request)</p>
      </div>
    </section>
  );
};

const FormsSection = () => {
  const [quoteStatus, setQuoteStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [driverStatus, setDriverStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteStatus('sending');
    setTimeout(() => {
      setQuoteStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setQuoteStatus('idle'), 5000);
    }, 1000);
  };

  const handleDriver = (e: React.FormEvent) => {
    e.preventDefault();
    setDriverStatus('sending');
    setTimeout(() => {
      setDriverStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setDriverStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section className="bg-gray-200 py-20 px-6">
      <div className="container mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-12">
        
        {/* Quote Form */}
        <motion.div id="quote" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 md:p-12 border-t-4 border-asphalt shadow-xl">
          <h2 className="text-3xl md:text-4xl font-display text-asphalt mb-4">REQUEST A QUOTE</h2>
          <p className="text-steel mb-8">Fill out the load ticket below to get a prompt rate for your hauling needs.</p>
          <form onSubmit={handleQuote} className="space-y-6">
            <div><label className="block font-display text-lg text-asphalt mb-2">Name *</label><input required className="form-control" type="text" /></div>
            <div><label className="block font-display text-lg text-asphalt mb-2">Company (Optional)</label><input className="form-control" type="text" /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><label className="block font-display text-lg text-asphalt mb-2">Phone *</label><input required className="form-control" type="tel" pattern="[0-9\s\-\+\(\)]+" /></div>
              <div><label className="block font-display text-lg text-asphalt mb-2">Email *</label><input required className="form-control" type="email" /></div>
            </div>
            <div><label className="block font-display text-lg text-asphalt mb-2">Project Location *</label><input required className="form-control" type="text" /></div>
            
            <div>
              <label className="block font-display text-lg text-asphalt mb-2">Material Needed *</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {['Dirt', 'Sand', 'Aggregate', 'Asphalt'].map(m => (
                  <label key={m} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 accent-amber" />
                    <span className="text-lg">{m}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div><label className="block font-display text-lg text-asphalt mb-2">Estimated Timeline</label><input className="form-control" type="text" /></div>
            <div><label className="block font-display text-lg text-asphalt mb-2">Notes</label><textarea className="form-control" rows={4}></textarea></div>
            
            <button type="submit" disabled={quoteStatus === 'sending'} className="btn btn-primary w-full disabled:opacity-70">
              {quoteStatus === 'sending' ? 'SENDING...' : 'SUBMIT REQUEST'}
            </button>
            {quoteStatus === 'success' && <div className="p-4 bg-green-50 text-green-800 border-l-4 border-green-500 font-medium">Your quote request has been sent successfully.</div>}
          </form>
        </motion.div>

        {/* Driver Form */}
        <motion.div id="apply" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 md:p-12 border-t-4 border-asphalt shadow-xl">
          <h2 className="text-3xl md:text-4xl font-display text-asphalt mb-4">DRIVE FOR JNS</h2>
          <p className="text-steel mb-8">Submit your application to join a reliable crew that has been moving material since 2014.</p>
          <form onSubmit={handleDriver} className="space-y-6">
            <div><label className="block font-display text-lg text-asphalt mb-2">Name *</label><input required className="form-control" type="text" /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><label className="block font-display text-lg text-asphalt mb-2">Phone *</label><input required className="form-control" type="tel" pattern="[0-9\s\-\+\(\)]+" /></div>
              <div><label className="block font-display text-lg text-asphalt mb-2">Email *</label><input required className="form-control" type="email" /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><label className="block font-display text-lg text-asphalt mb-2">Years of CDL Experience *</label><input required min="0" className="form-control" type="number" /></div>
              <div><label className="block font-display text-lg text-asphalt mb-2">License Class *</label>
                <select required className="form-control bg-ticket-paper h-[50px]">
                  <option value="">Select Class...</option>
                  <option value="A">Class A</option>
                  <option value="B">Class B</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div><label className="block font-display text-lg text-asphalt mb-2">Availability</label><input className="form-control" type="text" /></div>
            <div><label className="block font-display text-lg text-asphalt mb-2">Notes / Resume Link</label><textarea className="form-control" rows={4}></textarea></div>
            
            <button type="submit" disabled={driverStatus === 'sending'} className="btn btn-dark w-full disabled:opacity-70 mt-auto">
              {driverStatus === 'sending' ? 'SENDING...' : 'SUBMIT APPLICATION'}
            </button>
            {driverStatus === 'success' && <div className="p-4 bg-green-50 text-green-800 border-l-4 border-green-500 font-medium">Your application has been submitted successfully.</div>}
          </form>
        </motion.div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-asphalt text-gray-300 py-16 px-6 border-t-4 border-amber">
      <div className="container mx-auto max-w-[1200px] grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="bg-white inline-block p-3 rounded-lg mb-4">
            <img src="/Jns Logo Transparent.png" alt="JNS Hauling Logo" className="h-8 md:h-10 w-auto" />
          </div>
          <p className="mb-6">Reliable dump truck hauling for dirt, sand, aggregate, and asphalt across Georgia and Alabama.</p>
          <span className="inline-block px-4 py-2 border-2 border-amber text-amber font-mono font-bold uppercase">DBE CERTIFIED</span>
        </div>
        <div>
          <h4 className="font-display text-xl text-amber mb-4">CONTACT</h4>
          <div className="space-y-3">
            <a href="tel:706-681-1765" className="flex items-center gap-3 font-mono hover:text-amber transition-colors"><Phone size={18} className="text-amber" /> (706) 681-1765</a>
            <a href="mailto:jandshauling@icloud.com" className="flex items-center gap-3 hover:text-amber transition-colors"><Mail size={18} className="text-amber" /> jandshauling@icloud.com</a>
            <p className="flex items-start gap-3 mt-4"><MapPin size={18} className="text-amber flex-shrink-0 mt-1" /> 1254 Noland Dr<br/>Columbus, GA 31907</p>
          </div>
        </div>
        <div>
          <h4 className="font-display text-xl text-amber mb-4">QUICK LINKS</h4>
          <div className="flex flex-col gap-2">
            <a href="#quote" className="hover:text-amber transition-colors">Get a Quote</a>
            <a href="#apply" className="hover:text-amber transition-colors">Apply to Drive</a>
            <a href="#fleet" className="hover:text-amber transition-colors">The Fleet</a>
            <a href="#service-area" className="hover:text-amber transition-colors">Service Area</a>
            <a href="#" className="inline-flex items-center gap-2 mt-4 text-white hover:text-amber transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1200px] text-center pt-8 border-t border-steel text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} JNS Hauling LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="font-body text-ink bg-ticket-paper min-h-screen">
      <Header />
      <Hero />
      <ManifestStrip />
      <WhatWeHaul />
      <Fleet />
      <ServiceArea />
      <FormsSection />
      <Footer />
    </div>
  );
}

export default App;
