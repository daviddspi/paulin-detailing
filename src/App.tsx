import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { 
  Settings, 
  Wrench,
  Cpu,
  Shield, 
  Car, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Phone, 
  MapPin, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Plus,
  Droplets,
  Wind,
  ZoomIn,
  MessageCircle,
  Sparkles,
  Zap,
} from 'lucide-react';
import { BUSINESS_CONFIG } from './config';

// --- Components ---

/** Announcement bar — urgency + click-to-call. Top detailing sites see 15-30% more bookings with this element. */
const AnnouncementBar = () => (
  <div className="bg-primary text-white py-2.5 px-4 text-center text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4 flex-wrap">
    <span>🛠️ Ograničen broj termina — Zakaži servis na vreme i osiguraj vrhunske performanse</span>
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {BUSINESS_CONFIG.contact.phones.map((phone, idx) => (
        <a key={idx} href={`tel:${phone}`} className="underline underline-offset-2 hover:no-underline whitespace-nowrap active:opacity-70 transition-opacity" aria-label={`Pozovi nas ${idx + 1}`}>
          {phone}
        </a>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '#' },
    { name: 'Usluge', href: '#services' },
    { 
      name: 'Cenovnik', 
      dropdown: [
        { name: 'Paketi', href: '#packages' },
        { name: 'Pojedinačne usluge', href: '#price-list' },
      ]
    },
    { name: 'Galerija', href: '#gallery' },
    { name: 'O nama', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/90 backdrop-blur-md py-4 md:py-8 shadow-lg' : 'bg-transparent py-6 md:py-12'}`}
      aria-label="Main navigation"
      data-version="v1.0.8-final-polish"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center active:scale-95 transition-transform" aria-label="Početna">
          <img 
            src={BUSINESS_CONFIG.logo} 
            alt={BUSINESS_CONFIG.name} 
            className="h-6 md:h-8 w-auto object-contain" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={link.href || '#'} 
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-1.5"
                onClick={(e) => link.dropdown && e.preventDefault()}
              >
                {link.name}
                {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </a>

              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[200px] shadow-2xl">
                        {link.dropdown.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/5 hover:text-primary transition-colors text-white/70"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 active:scale-95 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 inline-block shadow-primary-glow"
            aria-label="Kontaktirajte nas"
          >
            ZAKAŽI TERMIN
          </a>
        </div>

        {/* Mobile Toggle — min 44×44px touch target */}
        <button
          className="md:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg active:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-secondary border-t border-white/10 p-6 md:hidden"
            role="menu"
          >
            <div className="flex flex-col gap-4 items-center text-center">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full">
                  {link.dropdown ? (
                    <div className="flex flex-col items-center">
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className="text-lg font-medium hover:text-primary transition-colors min-h-[44px] flex items-center justify-center w-full gap-2 uppercase"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-2 overflow-hidden bg-white/5 rounded-2xl w-full"
                          >
                            {link.dropdown.map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.href}
                                className="text-sm font-bold uppercase tracking-widest py-4 text-white/60 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-lg font-medium hover:text-primary transition-colors min-h-[44px] flex items-center justify-center w-full uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                      role="menuitem"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                className="bg-primary active:scale-95 text-white w-full py-3 rounded-xl font-bold mt-4 transition-transform flex items-center justify-center"
                aria-label="Kontaktirajte nas"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ZAKAŽI TERMIN
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HERO_SLIDES = [
  {
    src: '/hero/heropic.jpg',
    video: 'https://player.vimeo.com/external/517614051.hd.mp4?s=1d97356c9a759685e13d7e7932c0d51ef77f10b7&profile_id=174',
    alt: 'Premium car detailing foam wash cinematic',
  },
  {
    src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2500',
    alt: 'Professional car polishing close-up',
  },
  {
    src: '/hero/hero3.jpg',
    video: 'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce29ad3caf56007ec&profile_id=174',
    alt: 'Premium luxury car detailing results',
  },
  {
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2500',
    alt: 'Luxury car dashboard and steering wheel',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500); // Slightly longer for video
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden" 
      style={{ minHeight: '100svh' }}
    >
      {/* Cinematic slideshow background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {activeSlide.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src={activeSlide.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={activeSlide.src}
                alt={activeSlide.alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Hero copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 md:pt-40 -translate-y-6 md:translate-y-0 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6 md:mb-8">
            <div className="h-0.5 w-8 bg-primary hidden md:block" />
            <span className="text-primary font-black tracking-[0.4em] text-[10px] md:text-xs uppercase text-center md:text-left">Detailing studio Novi Sad</span>
            <div className="h-0.5 w-12 bg-primary hidden md:block" />
          </div>
          <h1 className="text-4xl md:text-8xl font-black leading-[0.85] mb-6 md:mb-10 tracking-tighter uppercase italic text-balance" dangerouslySetInnerHTML={{ __html: BUSINESS_CONFIG.tagline.replace(". ", ". <br className='hidden md:block'/>") }} />
          <p className="text-sm md:text-xl text-zinc-400 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed text-balance">
            {BUSINESS_CONFIG.shortDescription}
          </p>

          {/* Premium Social Proof Badge (Auto Corona Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-10 bg-white/5 backdrop-blur-md border border-white/10 p-2 pl-4 pr-6 rounded-full w-fit mx-auto md:mx-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {[
                  "https://i.pravatar.cc/100?u=1",
                  "https://i.pravatar.cc/100?u=2",
                  "https://i.pravatar.cc/100?u=3",
                  "https://i.pravatar.cc/100?u=4",
                ].map((url, i) => (
                  <img 
                    key={i} 
                    src={url} 
                    alt="Klijent" 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-zinc-950 object-cover" 
                  />
                ))}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary border-2 border-zinc-950 flex items-center justify-center text-[10px] md:text-xs font-black text-zinc-950">
                  +500
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
            </div>
            <div className="flex flex-col items-center sm:items-start gap-0.5">
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 md:w-3.5 h-3 md:h-3.5 fill-primary text-primary" />)}
              </div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90">
                5.0 na Google-u od 20 verifikovanih recenzija
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 w-full md:w-auto">
            <a 
              href="#contact"
              className="w-full md:w-auto md:h-16 bg-primary hover:bg-primary/90 active:scale-95 text-white px-10 py-4 md:py-0 rounded-[2rem] md:rounded-[2.5rem] font-black tracking-[0.2em] uppercase text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
            >
              ZAKAŽI TERMIN <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
            </a>
            
            <div className="flex flex-col gap-2 w-full md:w-auto">
              {BUSINESS_CONFIG.contact.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone}`}
                  className="w-full md:w-auto md:h-14 bg-white/5 hover:bg-white/10 active:scale-95 text-white px-8 py-4 md:py-0 rounded-full font-bold tracking-widest uppercase text-xs transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" /> {phone}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide indicator dots — bottom right */}
      <div className="absolute bottom-10 right-8 flex gap-2 z-10" role="tablist" aria-label="Hero slide indicators">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentSlide}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? 'w-8 h-2 bg-primary'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {BUSINESS_CONFIG.stats.map((stat, idx) => (
          <div key={idx} className="p-10 flex flex-col gap-2 group hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-2xl font-black tracking-tighter italic">{stat.label}</span>
              <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary transition-colors">
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </div>
            </div>
            <p className="text-white/70 text-sm font-medium">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const dna = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Premium Kozmetika',
      desc: 'Koristimo isključivo PH neutralne šampone i najkvalitetnije keramičke zaštite svetskih brendova. Svaki materijal je pažljivo odabran za vaš model.',
      stat: '100%', statLabel: 'Bezbednost laka',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Besprekoran Sjaj',
      desc: 'Naš proces poliranja u više faza uklanja swirlove i ogrebotine, vraćajući fabričku dubinu boje i ogledalo-finish svakoj površini.',
      stat: '99%', statLabel: 'Korekcija laka',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Dugotrajna Zaštita',
      desc: 'Specijalizovani smo za nanošenje keramičkih i grafenskih premaza sa garancijom trajanja. Vaše vozilo biće zaštićeno od UV zračenja i hemije.',
      stat: '5god', statLabel: 'Trajanje zaštite',
    },
  ];

  const steps = [
    { num: '01', title: 'Inspekcija i Plan', desc: 'Svaki projekat počinje detaljnim pregledom laka pod inspekcijskim svetlima. Utvrđujemo nivo oštećenja i biramo najbolji tretman.' },
    { num: '02', title: 'Precizan Detailing', desc: 'Naši sertifikovani detaileri vrše proces čišćenja, poliranja i zaštite koristeći najfinije alate prilagođene stanju vašeg laka.' },
    { num: '03', title: 'Finalni Sjaj', desc: 'Nakon tretmana, vozilo prolazi finalnu proveru u kontrolisanom prostoru. Dobijate uputstvo za održavanje i garanciju na zaštitu.' },
  ];

  return (
    <section id="about" className="relative overflow-hidden">

      {/* ── PART 1: Mission Statement Banner ── */}
      <div className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-tight text-white max-w-4xl"
            dangerouslySetInnerHTML={{ __html: BUSINESS_CONFIG.philosophy.quote.replace(". ", ".<br />") }}
          />
          <p className="text-white/70 font-bold uppercase tracking-[0.3em] text-sm mt-6">
            — {BUSINESS_CONFIG.philosophy.author}
          </p>
        </div>
      </div>

      {/* ── PART 2: Our Story + Image ── */}
      <div className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 border border-white/10 shadow-2xl">
              <img
                src="/about/nasaprica.jpg"
                alt="Naša priča - Paulin Detailing tim u radu"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Floating experience card */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl z-20 shadow-2xl">
              <p className="text-5xl font-black italic tracking-tighter leading-none">10+</p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">Godina vrhunske<br/>nege</p>
            </div>
            {/* Decorative border */}
            <div className="absolute top-8 -left-6 bottom-8 w-full border border-primary/20 rounded-2xl -z-10" aria-hidden="true" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Naša priča</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-tight">
              Obezbedite Vašem automobilu <br />
              <span className="text-primary">najbolji detailing u Novom Sadu.</span>
            </h2>
            <p className="text-white/60 text-lg mb-6 leading-relaxed">
              {BUSINESS_CONFIG.longDescription}
            </p>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Dok mi brinemo o vašem vozilu, možete se opustiti u našem prijemnom salonu uz kafu i Wi-Fi. Radimo svakog radnog dana, a subotom smo tu za hitne intervencije.
            </p>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-3">
              {['Profesionalno obučen tim', 'Osigurani', 'Provereni proizvodi', 'Ocena 5.0'].map((badge) => (
                <span key={badge} className="border border-primary/40 text-primary text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  {badge}
                  {badge.includes('5.0') && <Star className="w-3 h-3 fill-primary text-primary" />}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── PART 3: Our DNA — 3 Core Values ── */}
      <div className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Naš DNK</span>
              <div className="h-1 w-12 bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic">
              Šta nas razlikuje
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dna.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-surface border border-white/5 hover:border-primary/40 rounded-2xl p-8 flex flex-col gap-6 transition-colors group"
              >
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary rounded-2xl flex items-center justify-center text-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic tracking-tight mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-primary tracking-tighter italic">{item.stat}</span>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{item.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PART 4: How We Work — 3-Step Process ── */}
      <div className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Proces rada</span>
              <div className="h-1 w-12 bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic">
              Kako radimo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-primary/30"
              aria-hidden="true"
            />

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center px-8 pb-10 relative"
              >
                {/* Step number circle */}
                <div className="w-20 h-20 rounded-full border-2 border-primary bg-secondary flex items-center justify-center mb-8 relative z-10 shrink-0">
                  <span className="text-2xl font-black text-primary italic">{step.num}</span>
                </div>
                <h3 className="text-xl font-black uppercase italic tracking-tight mb-4">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="#contact" className="bg-primary hover:bg-primary/90 active:scale-95 text-white px-10 py-4 rounded-full font-black tracking-widest transition-all transform hover:scale-105 inline-flex items-center gap-2">
              ZAKAŽI TERMIN <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {


  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Usluge</span>
            <div className="h-1 w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-6">Naš meni usluga</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Od brzog osvežavanja do kompletne restauracije — nudimo širok spektar usluga prilagodenih potrebama vašeg vozila.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_CONFIG.services.map((service, idx) => {
            const Icon = [Droplets, Sparkles, Shield, Car, Star, Clock][idx] || Sparkles;
            return (
              <motion.a 
                href={`#${(service as any).targetId}`}
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="bg-surface/50 border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all group relative overflow-hidden block"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Icon size={80} />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className='text-primary group-hover:text-white transition-colors' />
                </div>
                <h3 className="text-xl font-black uppercase italic mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div 
                  className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/90 group-hover:text-primary active:opacity-70 transition-colors"
                >
                  Saznaj više <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Gallery Lightbox ---
const Lightbox = ({ images, labels, startIndex, onClose }: {
  images: string[];
  labels: string[];
  startIndex: number;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(startIndex);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose]);

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);
  const next = () => setCurrent(c => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galerija slika"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors active:scale-95"
        aria-label="Zatvori galeriju"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      <button
        onClick={e => { e.stopPropagation(); prev(); }}
        className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors active:scale-95"
        aria-label="Prethodna slika"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <div className="w-full max-w-5xl px-20 relative" onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={current}
            src={images[current]}
            alt={labels[current]}
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Caption + counter */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-white/70 text-sm">{labels[current]}</p>
          <span className="text-white/50 text-sm font-bold tabular-nums">{current + 1} / {images.length}</span>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
              aria-label={`Slika ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={e => { e.stopPropagation(); next(); }}
        className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors active:scale-95"
        aria-label="Sledeća slika"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </motion.div>
  );
};

const BeforeAfterSlider = ({ before, after, label }: { before: string, after: string, label: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) handleMove(e.clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/5"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={(e) => handleMove(e.clientX)}
    >
      {/* After Image */}
      <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="Posle" />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={before} className="absolute inset-0 w-full h-full object-cover" alt="Pre" />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-primary z-20"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,66,63,0.5)] border-2 border-white/20">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-white/60 rounded-full" />
            <div className="w-0.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-secondary/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white/90 z-10">Pre</div>
      <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white z-10">Posle</div>
      
      {/* Info Overlay */}
      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <p className="text-white font-black italic uppercase tracking-tight text-sm">{label}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = [
    "/gallery/5-5.jpg",
    "/gallery/6-6.jpg",
    "/gallery/7-7.jpg",
    "/gallery/8-8.jpg",
  ];

  const galleryLabels = [
    "Sigurnost koja traje",
    "Servis i održavanje premijum vozila",
    "Specijalizovani radovi na motoru",
    "Održavanje automatskih menjača",
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-xl flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Galerija</span>
              <div className="h-1 w-12 bg-primary md:hidden" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-tight">
              Naš rad govori <br />
              <span className="text-primary">za sebe</span>
            </h2>
          </div>
          <button className="bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm transition-all md:w-auto">
            Pogledaj sve projekte
          </button>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Sliders */}
          <BeforeAfterSlider 
            before="/preiposle/headlight_pre.jpg" 
            after="/preiposle/headlight_posle.jpg" 
            label="Restauracija farova"
          />
          <BeforeAfterSlider 
            before="/preiposle/engine_pre.jpg" 
            after="/preiposle/engine_posle.jpg" 
            label="Detailing motornog prostora"
          />

          {/* Standard Gallery */}
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightboxIndex(idx)}
              className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Otvori sliku: ${galleryLabels[idx]}`}
              onKeyDown={e => e.key === 'Enter' && setLightboxIndex(idx)}
            >
              <img
                src={img}
                alt={galleryLabels[idx]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" aria-hidden="true">
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-bold tracking-widest uppercase text-white/80">Klikni za pregled</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            labels={galleryLabels}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};



const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Recenzije</span>
            <div className="h-1 w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-4">Šta kažu naši klijenti</h2>
          <p className="text-white/60 text-[10px] md:text-sm font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-y-2 gap-x-1">
            <span>Verifikovane Google recenzije</span>
            <span className="hidden md:inline">·</span>
            <span className="flex items-center gap-1">
              Prosečna ocena 5.0 
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" /> 
            </span>
            <span>·</span>
            <span>od 20 verifikovanih recenzija</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {BUSINESS_CONFIG.reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface border border-white/5 p-10 rounded-3xl relative flex flex-col w-full md:w-[calc(33.33%-2rem)] min-w-[300px] max-w-md"
            >
              <div className="flex gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/70 text-lg italic mb-8 leading-relaxed flex-1">"{review.text}"</p>
              <div className="border-t border-white/5 pt-6">
                <p className="font-black uppercase italic tracking-tight">{review.name}</p>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mt-0.5">{review.vehicle}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-bold mt-0.5">{review.service} · {review.location}</p>
              </div>
              <div className="absolute top-10 right-10 opacity-10" aria-hidden="true">
                <Sparkles size={40} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews badge strip */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-3 bg-surface border border-white/5 px-8 py-4 rounded-full">
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            <span className="text-sm font-black tracking-tight">5.0 <span className="text-white/60 font-normal">na Google-u</span></span>
          </div>
          <div className="flex items-center gap-3 bg-surface border border-white/5 px-8 py-4 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-black tracking-tight">20 <span className="text-white/60 font-normal">Verifikovanih recenzija</span></span>
          </div>
          <div className="flex items-center gap-3 bg-surface border border-white/5 px-8 py-4 rounded-full">
            <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-black tracking-tight">Profesionalno <span className="text-white/60 font-normal">obučen tim</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceModal = ({ service, onClose, currentClass }: { service: any, onClose: () => void, currentClass: number }) => {
  if (!service) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-secondary/95 backdrop-blur-xl" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="bg-surface border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden relative z-10 shadow-2xl overflow-y-auto max-h-[90vh] premium-scroll"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Detalji Usluge</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-8 leading-tight">{service.name}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Cena (Klasa {currentClass + 1})</p>
              <p className="text-2xl font-black text-white tracking-tighter">
                {service.prices ? `${service.prices[currentClass]?.toLocaleString()} RSD` : service.price}
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Trajanje</p>
              <p className="text-2xl font-black text-white tracking-tighter">{service.duration || "Po dogovoru"}</p>
            </div>
          </div>

          {service.subServices && (
            <div className="mb-10 space-y-6">
              <h4 className="text-xl font-bold uppercase italic tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Dodatne opcije i pod-usluge
              </h4>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">Stavka</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary text-right">Doplata / Cena</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {service.subServices.map((sub: any, idx: number) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-white/80">{sub.name}</td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-sm font-black text-white">
                            {sub.prices[currentClass] === 0 
                              ? "Po dogovoru" 
                              : sub.prices[currentClass] === -1 
                                ? "Na upit" 
                                : `${sub.prices[currentClass]?.toLocaleString()} RSD`}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <h4 className="text-xl font-bold uppercase italic tracking-tight flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary" /> Proces rada
            </h4>
            <p className="text-white/60 text-lg leading-relaxed">
              {service.longDesc || service.desc}
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5 flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              onClick={onClose}
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase text-sm py-5 rounded-2xl text-center transition-all shadow-primary-glow"
            >
              Zakaži termin
            </a>
            <button 
              onClick={onClose}
              className="flex-1 bg-white/5 hover:bg-white/10 text-white font-black tracking-widest uppercase text-sm py-5 rounded-2xl transition-all"
            >
              Zatvori
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Pricing = () => {
  const [vehicleClass, setVehicleClass] = useState(0); // 0: Klasa 1, 1: Klasa 2, etc.
  const [selectedService, setSelectedService] = useState<any>(null);
  const [openCategories, setOpenCategories] = useState<number[]>([0]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#cat-')) {
        const categoryId = hash.replace('#', '');
        const categoryIdx = BUSINESS_CONFIG.serviceCategories.findIndex((cat: any) => cat.id === categoryId);
        
        if (categoryIdx !== -1) {
          setOpenCategories(prev => prev.includes(categoryIdx) ? prev : [...prev, categoryIdx]);
          
          // Wait for accordion to start opening, then force scroll
          setTimeout(() => {
            const element = document.getElementById(categoryId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const classes = ["Klasa 1", "Klasa 2", "Klasa 3", "Klasa 4"];

  const toggleCategory = (idx: number) => {
    setOpenCategories(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="packages" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Paketi</span>
            <div className="h-1 w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-6">Odaberi svoj nivo nege</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Transparentni paketi prilagođeni vašim potrebama. Svaki paket garantuje potpunu posvećenost detaljima.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {BUSINESS_CONFIG.packages.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 h-fit rounded-3xl border transition-all duration-500 ${plan.recommended ? 'bg-primary border-primary text-white z-10 shadow-2xl shadow-primary/30' : 'bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 text-white'}`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-[0.3em] px-4 py-1.5 rounded-full uppercase ${plan.recommended ? 'bg-white text-primary shadow-xl ring-4 ring-primary/20' : 'bg-primary text-white shadow-xl'}`}>
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-black uppercase italic mb-1 tracking-tight">{plan.title}</h3>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2 ${plan.recommended ? 'text-white/60' : 'text-white/50'}`}>
                <Clock className="w-3 h-3" /> {plan.duration}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-2xl font-black ml-1">{plan.currency}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${plan.recommended ? 'text-white' : 'text-primary'}`} aria-hidden="true" />
                    <span className={plan.recommended ? 'text-white/90' : 'text-white/70'}>{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact"
                className={`w-full py-4 rounded-xl font-black tracking-widest uppercase text-sm flex items-center justify-center transition-all active:scale-95 ${plan.recommended ? 'bg-white text-primary hover:bg-zinc-100 shadow-lg' : 'bg-primary text-white hover:bg-primary/90'}`}
              >
                Zakaži Tretman
              </a>
            </motion.div>
          ))}
        </div>

        {/* Satisfaction Guarantee */}
        <div className="mt-24 relative group overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="border border-white/5 rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="relative">
              <div className="w-24 h-24 bg-primary rotate-45 rounded-3xl flex items-center justify-center">
                <Shield className="w-12 h-12 text-white -rotate-45" />
              </div>
              <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-full" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4">100% Garancija kvaliteta</h3>
              <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
                Svaki tretman obavljamo isključivo sa najkvalitetnijim materijalima i uz strogu kontrolu svakog koraka. Vaše zadovoljstvo je naš jedini prioritet.
              </p>
            </div>

            <a 
              href="#contact"
              className="bg-primary hover:bg-primary/90 active:scale-95 text-white px-12 py-5 rounded-full font-black tracking-widest uppercase text-sm transition-all transform hover:scale-105 shadow-2xl shadow-primary/20 flex items-center gap-3"
            >
              ZAKAŽI ODMAH <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Detailed Table Section */}
        <div className="mt-32" id="price-list">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Cenovnik Usluga</span>
              <div className="h-1 w-12 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Pojedinačne Usluge</h2>
            
            {/* Vehicle Class Selector */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {classes.map((className, idx) => (
                <button
                  key={idx}
                  onClick={() => setVehicleClass(idx)}
                  className={`px-8 py-4 rounded-full font-black tracking-widest uppercase text-xs transition-all border ${
                    vehicleClass === idx 
                      ? 'bg-primary border-primary text-white shadow-xl shadow-primary/30 ring-4 ring-primary/10' 
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {className}
                </button>
              ))}
            </div>
            <p className="mt-6 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">Odaberite klasu vašeg vozila za tačan prikaz cena</p>
          </div>

          <div className="space-y-6">
            {BUSINESS_CONFIG.serviceCategories.map((category, catIdx) => {
              const isOpen = openCategories.includes(catIdx);
              return (
                <div key={catIdx} className="relative bg-surface/20 rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10">
                  <button 
                    onClick={() => toggleCategory(catIdx)}
                    className="w-full text-left px-8 py-8 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-1.5 h-12 bg-primary transition-all duration-500 ${isOpen ? 'scale-y-100' : 'scale-y-0 opacity-20'}`} />
                      <h3 
                        id={(category as any).id} 
                        className="text-2xl md:text-3xl font-black uppercase italic tracking-tight transition-colors group-hover:text-primary scroll-mt-24 md:scroll-mt-32"
                      >
                        {category.title}
                      </h3>
                    </div>
                    <div className={`p-3 rounded-full border border-white/10 transition-all duration-500 ${isOpen ? 'rotate-180 bg-primary border-primary text-white' : 'text-white/50 group-hover:text-white group-hover:border-white/20'}`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="overflow-x-auto rounded-3xl border border-white/5 bg-secondary/50 backdrop-blur-sm">
                            <table className="w-full text-left border-collapse md:min-w-[600px]">
                              <thead className="hidden md:table-header-group">
                                <tr className="border-bottom border-white/5 bg-white/5">
                                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-primary">Usluga</th>
                                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-primary hidden md:table-cell">Opis</th>
                                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-primary text-right hidden md:table-cell">Cena</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/5">
                                {category.services.map((service, sIdx) => (
                                  <tr 
                                    key={sIdx} 
                                    onClick={() => setSelectedService(service)}
                                    className="hover:bg-white/[0.05] cursor-pointer transition-all group border-b border-white/5 last:border-0"
                                  >
                                    <td className="px-8 py-6">
                                      <div className="flex items-center justify-between gap-4">
                                        <div className="flex flex-col">
                                          <span className="text-lg md:text-base font-black text-white/90 group-hover:text-white transition-colors tracking-tight leading-tight mb-2 md:mb-1">{service.name}</span>
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] group-hover:underline">Detaljnije</span>
                                            <ArrowRight className="w-3 h-3 text-primary transition-transform group-hover:translate-x-1" />
                                          </div>
                                        </div>
                                        <div className="md:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:shadow-primary-glow transition-all duration-300">
                                          <ChevronRight className="w-5 h-5 text-primary group-hover:text-white" />
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-white/60 leading-relaxed max-w-xs hidden md:table-cell">{service.desc}</td>
                                    <td className="px-8 py-6 text-right hidden md:table-cell">
                                      <span className="text-xl font-black tracking-tighter text-white whitespace-nowrap">
                                        {service.prices 
                                          ? service.prices[vehicleClass] === 0 
                                            ? "Po dogovoru" 
                                            : service.prices[vehicleClass] === -1 
                                              ? "Na upit" 
                                              : `${service.prices[vehicleClass]?.toLocaleString()} RSD` 
                                          : service.price}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Service Detail Modal */}
          <AnimatePresence>
            {selectedService && (
              <ServiceModal 
                service={selectedService} 
                currentClass={vehicleClass}
                onClose={() => setSelectedService(null)} 
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Zakaži danas</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-6 leading-tight">
              Odgovaramo <br />
              <span className="text-primary">u roku od sat vremena.</span>
            </h2>
            <p className="text-white/70 text-lg mb-4 leading-relaxed">
              Popunite formular ili nas pozovite direktno — potvrđujemo vaš termin, dajemo tačno vreme dolaska i dolazimo spremni na posao.
            </p>
            <p className="text-white/50 text-sm mb-12">Radimo na području Novog Sada i okoline. Po dogovoru / Zakazivanje obavezno.</p>

            <div className="space-y-8">
              <div className="space-y-4">
                {BUSINESS_CONFIG.contact.phones.map((phone, idx) => (
                  <a key={idx} href={`tel:${phone}`} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-surface group-hover:bg-primary rounded-2xl flex items-center justify-center shrink-0 border border-white/5 transition-colors">
                      <Phone className="text-primary group-hover:text-white w-6 h-6 transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-1">{idx === 0 ? 'Pozovite nas' : 'Drugi broj'}</p>
                      <p className="text-lg font-black italic">{phone}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="space-y-4">
                {BUSINESS_CONFIG.contact.emails.map((email, idx) => (
                  <a key={idx} href={`mailto:${email}`} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-surface group-hover:bg-primary rounded-2xl flex items-center justify-center shrink-0 border border-white/5 transition-colors">
                      <Mail className="text-primary group-hover:text-white w-6 h-6 transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-1">Email {idx + 1}</p>
                      <p className="text-lg font-black italic">{email}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="text-primary w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-1">Naše lokacije</p>
                  <div className="space-y-4">
                    {BUSINESS_CONFIG.contact.locations.map((loc, idx) => (
                      <p key={idx} className="text-lg font-black italic mb-1">
                        {loc.name}:<br />
                        <a 
                          href={loc.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {loc.address}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface p-10 rounded-3xl border border-white/5">
            <form className="space-y-6" noValidate aria-label="Forma za zakaz">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[10px] font-black uppercase tracking-widest text-white/60">
                    Ime i prezime <span aria-label="obavezno" className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Marko Markovic"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[10px] font-black uppercase tracking-widest text-white/60">
                    Email <span aria-label="obavezno" className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="marko@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-service" className="text-[10px] font-black uppercase tracking-widest text-white/60">Usluga koja te zanima</label>
                <select
                  id="contact-service"
                  autoComplete="off"
                  className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none"
                >
                  <option value="">Izaberite uslugu...</option>
                  <option>Osnovni paket</option>
                  <option>Premium paket</option>
                  <option>Ekskluzivni paket</option>
                  <option>Dubinsko pranje automobila</option>
                  <option>Poliranje i keramika</option>
                  <option>Zaštitne folije</option>
                  <option>PDR udubljenja</option>
                  <option>Drugo</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-[10px] font-black uppercase tracking-widest text-white/60">Vaše vozilo i napomene</label>
                <textarea
                  id="contact-message"
                  rows={3}
                  className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="npr. BMW 3, 2020. god., treba poliranje i dubinsko pranje..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 active:scale-95 text-white py-5 rounded-xl font-black tracking-widest uppercase transition-all transform hover:scale-[1.02] mt-4"
              >
                Pošalji
              </button>
              
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">ili</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.contact.phones[0].replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Zdravo, zanima me servis za moje vozilo...')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white py-5 rounded-xl font-black tracking-widest uppercase transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Pošalji WhatsApp
              </a>

              <p className="text-white/20 text-[10px] text-center uppercase tracking-widest mt-6">Odgovaramo u roku od sat vremena · Bez obaveza</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ Section ---
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);



  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Česta pitanja</span>
            <div className="h-1 w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic">
            Imate pitanja?
          </h2>
        </div>

        <div className="space-y-3">
          {BUSINESS_CONFIG.faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-surface border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left hover:bg-white/5 transition-colors group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="font-black uppercase italic tracking-tight text-lg">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-6 text-white/60 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Mobile Sticky Booking Bar ---
const MobileStickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-secondary/95 backdrop-blur-xl border-t border-white/10 px-2 py-3 flex gap-2 safe-area-inset-bottom">
    {BUSINESS_CONFIG.contact.phones.map((phone, idx) => (
      <a
        key={idx}
        href={`tel:${phone}`}
        className="flex-1 bg-surface border border-white/10 text-white py-3 rounded-lg font-black tracking-tighter uppercase text-[10px] text-center flex flex-col items-center justify-center active:scale-95 transition-transform"
        aria-label={`Pozovi ${idx + 1}`}
      >
        <Phone className="w-4 h-4 mb-1" aria-hidden="true" /> {phone}
      </a>
    ))}
    <a
      href="#contact"
      className="flex-[1.5] bg-primary text-white py-3 rounded-lg font-black tracking-widest uppercase text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
    >
      ZAKAŽI <ArrowRight className="w-5 h-5" aria-hidden="true" />
    </a>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center">
                <img 
                  src={BUSINESS_CONFIG.logo} 
                  alt={`${BUSINESS_CONFIG.name} Logo`} 
                  className="h-10 w-auto object-contain" 
                />
              </div>
            </div>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Specijalizovan studio za kompletnu negu i zaštitu premijum vozila. Vrhunska kozmetika, najsavremenije tehnike i decenijsko iskustvo u detailingu.
            </p>
            <div className="flex gap-4" role="list" aria-label="Social media links">
              <a href={BUSINESS_CONFIG.contact.social.instagram} className="w-11 h-11 bg-surface rounded-lg flex items-center justify-center hover:bg-primary active:scale-95 transition-all text-white hover:text-white" aria-label="Follow us on Instagram" role="listitem">
                <Instagram size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black tracking-[0.3em] uppercase text-white/60 mb-6">Usluge</h3>
            <ul className="space-y-4">
              {BUSINESS_CONFIG.services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary" aria-hidden="true" /> {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black tracking-[0.3em] uppercase text-white/60 mb-6">Kontakt</h3>
            <ul className="space-y-4 text-sm">
              {BUSINESS_CONFIG.contact.phones.map((phone, idx) => (
                <li key={idx}>
                  <a href={`tel:${phone}`} className="text-white/60 hover:text-primary transition-colors font-medium">{phone}</a>
                </li>
              ))}
              {BUSINESS_CONFIG.contact.emails.map((email, idx) => (
                <li key={idx}>
                  <a href={`mailto:${email}`} className="text-white/60 hover:text-primary transition-colors font-medium">{email}</a>
                </li>
              ))}
              <li className="text-white/60 font-medium">{BUSINESS_CONFIG.contact.locations.map(l => l.name).join(' i ')}</li>
              <li className="text-white/60 font-medium">{BUSINESS_CONFIG.contact.workingHours}</li>
            </ul>

          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. SVA PRAVA ZADRŽANA.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-bold tracking-[0.3em] uppercase">Politika privatnosti</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-bold tracking-[0.3em] uppercase">Uslovi korišćenja</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Skip to main content — keyboard/screen reader navigation */}
      <a href="#main-content" className="skip-link">
        Preiđi na glavni sadrzaj
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <Gallery />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
