import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Cake, 
  Utensils, 
  ChevronRight, 
  Instagram, 
  MapPin, 
  Phone, 
  Clock,
  Menu as MenuIcon,
  X,
  ArrowRight,
  Sun,
  Flame,
  Star
} from 'lucide-react';
import { menuData } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-cream/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-brand-chocolate">
        <a href="#" className="flex flex-col items-center group">
          <span className="text-2xl font-serif font-bold tracking-tighter transition-transform group-hover:scale-105">
            ÖZLEM
          </span>
          <span className="text-[10px] tracking-[0.3em] font-sans -mt-1 opacity-70 uppercase">
            PASTANESİ
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-sans font-medium tracking-wide">
          {['ANA SAYFA', 'MENÜ', 'HİKAYEMİZ', 'İLETİŞİM'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-').replace('ü', 'u').replace('ö', 'o').replace('ı', 'i').replace('ş', 's')}`} 
              className="hover:text-brand-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="px-5 py-2 bg-brand-chocolate text-brand-cream rounded-full hover:bg-brand-maroon transition-all text-xs tracking-widest">
            REZERVASYON
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-chocolate/10 px-6 py-10 md:hidden flex flex-col space-y-6 text-xl font-serif text-center"
          >
            {['ANA SAYFA', 'MENÜ', 'HİKAYEMİZ', 'İLETİŞİM'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-').replace('ü', 'u').replace('ö', 'o').replace('ı', 'i').replace('ş', 's')}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-brand-gold"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="ana-sayfa" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-cream">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1920"
          alt="Delicious Cake"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/40 via-transparent to-brand-cream" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <img 
              src="https://ais-pre-kowwc344apjk6u75btqa42-263999500574.europe-west1.run.app/api/artifacts/input_file_1.png" 
              alt="Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full shadow-2xl border-4 border-white/50"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex justify-center mb-6">
             <Star className="text-brand-gold fill-brand-gold animate-pulse" size={20} />
          </div>
          <span className="text-xs tracking-[0.4em] text-brand-gold font-sans font-bold uppercase mb-4 block">
            Geleneksel Lezzetlerin Modern Adresi
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-brand-chocolate leading-[0.9] mb-8">
            Her Lokmada<br />
            <span className="italic">Bir Hikaye.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-brand-chocolate/70 font-sans mb-12 font-light italic">
            Özlem Pastanesi, 40 yılı aşkın tecrübesiyle en kaliteli malzemeleri el emeğiyle birleştiriyor. 
            Sizler için her sabah taptaze başlıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#menu" className="px-10 py-5 bg-brand-chocolate text-brand-cream rounded-full hover:shadow-xl hover:-translate-y-1 transition-all flex items-center space-x-2">
              <span>MENÜYÜ KEŞFET</span>
              <ArrowRight size={18} />
            </a>
            <a href="#hikayemiz" className="text-sm font-bold tracking-widest hover:text-brand-gold flex items-center space-x-2 group">
              <span>HİKAYEMİZ</span>
              <div className="w-10 h-px bg-brand-chocolate group-hover:bg-brand-gold transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-px h-20 bg-brand-chocolate mx-auto" />
      </motion.div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);

  const getIcon = (title: string) => {
    switch (title) {
      case 'Pastalar': return <Cake size={20} />;
      case 'İçecekler': return <Coffee size={20} />;
      case 'Tuzlular': return <Utensils size={20} />;
      case 'Şerbetliler': return <Flame size={20} />;
      case 'Sütlü Tatlılar': return <Sun size={20} />;
      default: return <ChevronRight size={20} />;
    }
  };

  return (
    <section id="menu" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="mb-12 md:mb-0">
            <h2 className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase mb-4">Seçkin Lezzetler</h2>
            <h3 className="text-5xl md:text-8xl font-serif text-brand-chocolate leading-none">
              Özlem Menüsü
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-4 scrollbar-hide">
            {menuData.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all flex items-center space-x-2 whitespace-nowrap ${
                  activeCategory === cat.title 
                    ? 'bg-brand-chocolate text-brand-cream shadow-lg scale-105' 
                    : 'bg-brand-cream text-brand-chocolate hover:bg-brand-chocolate/10'
                }`}
              >
                {getIcon(cat.title)}
                <span>{cat.title.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="contents"
            >
              {menuData.find(c => c.title === activeCategory)?.items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-end justify-between group cursor-default"
                >
                  <div className="flex-1">
                    <h4 className="text-2xl font-serif text-brand-chocolate group-hover:text-brand-gold transition-colors">{item.name}</h4>
                    <p className="text-xs text-brand-chocolate/40 font-sans italic mt-1">Özenle hazırlanan günlük lezzet</p>
                  </div>
                  <div className="flex-1 border-b border-brand-chocolate/10 mx-6 mb-2.5 h-0" />
                  <span className="text-xl font-serif font-black text-brand-chocolate">{item.price}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="hikayemiz" className="py-40 bg-brand-cream relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-bold text-brand-chocolate/[0.02] whitespace-nowrap pointer-events-none select-none">
        ÖZLEM PASTANESİ
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="relative group">
          <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1559904093-439c096751e3?auto=format&fit=crop&q=80&w=800"
              alt="Bakery Interior"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-gold/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-brand-chocolate rounded-3xl p-10 text-brand-cream hidden xl:flex flex-col justify-end shadow-2xl transform hover:-translate-y-2 transition-transform">
            <span className="text-6xl font-serif font-bold mb-2">1984</span>
            <span className="text-[10px] font-sans tracking-[0.4em] opacity-80 leading-relaxed uppercase">Geleneksel<br />Lezzet Durağı</span>
          </div>
        </div>
        
        <div className="lg:pl-10">
          <h2 className="text-xs font-bold tracking-[0.4em] text-brand-gold uppercase mb-6">Mirasımız</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-brand-chocolate leading-[1.1] mb-10">
            Tutkuyla Yoğrulan<br /><span className="italic">Yılların Tecrübesi</span>
          </h3>
          <div className="space-y-8 text-brand-chocolate/70 leading-relaxed font-sans text-lg font-light">
            <p>
              Özlem Pastanesi, 1984 yılında küçük bir aile fırını olarak başladığı yolculuğuna bugün şehrin hafızasına 
              kazınmış bir lezzet durağı olarak devam ediyor. Kurucumuzdan miras kalan "Önce Kalite" sözü, 
              her gün fırınımızdan çıkan taze ürünlerde yankılanıyor.
            </p>
            <p>
              Anadolu'nun bereketli topraklarından gelen en doğal unlarla, özel formüllü tereyağlarımızı 
              harmanlıyoruz. Bizim için bir pasta sadece bir tatlı değil; kutlamalarınızın, mutluluklarınızın 
              ve o eşsiz pazar sabahı kahvaltılarınızın ortağıdır.
            </p>
          </div>
          <button className="mt-12 px-10 py-5 group border border-brand-chocolate text-brand-chocolate rounded-full hover:bg-brand-chocolate hover:text-brand-cream transition-all flex items-center space-x-3">
             <span className="text-xs font-bold tracking-widest">HAYATIMIZIN HİKAYESİ</span>
             <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="iletisim" className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-16">
            <div className="space-y-16">
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.5em] text-brand-gold uppercase mb-8 flex items-center">
                  <MapPin size={16} className="mr-3 opacity-50" /> KONUM
                </h4>
                <p className="text-2xl font-serif text-brand-chocolate leading-relaxed">
                  Özlem Pastanesi Merkez Şubesi<br />
                  Atatürk Mah. İstiklal Cad. No:45<br />
                  <span className="text-brand-gold">Merkez, İstanbul</span>
                </p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.5em] text-brand-gold uppercase mb-8 flex items-center">
                  <Phone size={16} className="mr-3 opacity-50" /> İLETİŞİM
                </h4>
                <p className="text-2xl font-serif text-brand-chocolate leading-relaxed">
                  +90 (212) 555 01 23<br />
                  <span className="text-brand-gold underline underline-offset-8 decoration-brand-gold/30">merhaba@ozlempastanesi.com</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-16">
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.5em] text-brand-gold uppercase mb-8 flex items-center">
                  <Clock size={16} className="mr-3 opacity-50" /> ÇALIŞMA SAATLERİ
                </h4>
                <div className="space-y-4 text-xl font-serif text-brand-chocolate">
                  <div className="flex justify-between border-b border-brand-chocolate/5 pb-4">
                    <span className="opacity-60">Hafta İçi</span>
                    <span>07:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-chocolate/5 pb-4">
                    <span className="opacity-60">Pazar</span>
                    <span>08:00 - 21:00</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.5em] text-brand-gold uppercase mb-8 flex items-center">
                  <Instagram size={16} className="mr-3 opacity-50" /> SOSYAL MEDYA
                </h4>
                <a href="#" className="text-2xl font-serif text-brand-chocolate hover:text-brand-gold transition-colors inline-flex items-center group">
                  @ozlempastanesi
                  <ChevronRight size={22} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-brand-cream rounded-[2.5rem] p-12 flex flex-col justify-between shadow-sm border border-brand-chocolate/5">
            <div>
              <h4 className="text-4xl font-serif mb-6 text-brand-chocolate">Sizi Bekliyoruz.</h4>
              <p className="text-brand-chocolate/60 font-sans mb-10 leading-relaxed text-sm">
                Özel kutlamalarınız için özel pasta siparişleri almaktayız. Ayrıca kurumsal etkinlikleriniz için catering hizmetimiz mevcuttur.
              </p>
            </div>
            <div className="space-y-4">
              <button className="w-full py-5 bg-brand-chocolate text-brand-cream rounded-2xl text-xs font-bold tracking-widest hover:bg-brand-maroon shadow-lg transition-all active:scale-95">
                BİZE MESAJ GÖNDERİN
              </button>
              <button className="w-full py-5 border border-brand-chocolate/20 text-brand-chocolate rounded-2xl text-xs font-bold tracking-widest hover:bg-brand-chocolate/5 transition-all">
                HARİTADA GÖRÜNTÜLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 bg-brand-chocolate text-brand-cream/60 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="flex flex-col items-center md:items-start mb-12 md:mb-0">
            <span className="text-4xl font-serif font-bold tracking-tighter text-brand-cream mb-2">
              ÖZLEM
            </span>
            <span className="text-[10px] tracking-[0.5em] font-sans opacity-50 uppercase">PASTANESİ MİRASI</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
            <a href="#ana-sayfa" className="hover:text-white transition-colors">Ana Sayfa</a>
            <a href="#menu" className="hover:text-white transition-colors">Menü</a>
            <a href="#hikayemiz" className="hover:text-white transition-colors">Hikayemiz</a>
            <a href="#iletisim" className="hover:text-white transition-colors">İletişim</a>
          </div>
        </div>
        
        <div className="h-px bg-white/10 w-full mb-12" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-[10px] tracking-[0.2em] font-medium opacity-40 uppercase">
          <div className="mb-6 md:mb-0">© 2024 ÖZLEM PASTANESİ. KURUMSAL WEB SİTESİ.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">KVKK</a>
            <a href="#" className="hover:text-white transition-colors">GİZLİLİK SÖZLEŞMESİ</a>
            <a href="#" className="hover:text-white transition-colors">TASARIM: AIS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Pastalar');
  const currentItems = menuData.find(c => c.title === activeCategory)?.items || [];

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col pt-4">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-12 px-2">
        <div className="flex items-center gap-4">
          <img 
            src="https://ais-pre-kowwc344apjk6u75btqa42-263999500574.europe-west1.run.app/api/artifacts/input_file_1.png" 
            alt="Özlem Pastanesi Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full shadow-md"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight uppercase leading-none text-brand-chocolate">
              Özlem Pastanesi
            </h1>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50 mt-2">
              Geleneksel Lezzet Durağı • Est. 1984
            </span>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mt-6 md:mt-0">
          {menuData.map(cat => (
            <button 
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`pb-1 transition-all border-b-2 cursor-pointer ${
                activeCategory === cat.title ? 'border-brand-gold opacity-100' : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Bento Grid */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow pb-12">
        
        {/* Large Hero Card (7x4) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-12 lg:col-span-7 md:row-span-4 bento-card relative overflow-hidden flex flex-col justify-between"
        >
          <div className="relative z-10">
            <span className="bg-brand-gold text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">
              Haftanın Spesiyali
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-8 leading-[1.1] text-brand-maroon">
              Bol Cevizli<br/>
              <span className="italic text-brand-gold">Baklava</span>
            </h2>
            <p className="mt-8 text-sm opacity-70 max-w-sm leading-relaxed font-medium">
              Bol cevizli, çıtır dokulu, gerçek şeker pancarıyla hazırlanan bir gelenek. Klasikten vazgeçemeyenler için taptaze.
            </p>
          </div>
          
          <div className="relative z-10 flex items-center justify-between mt-12 md:mt-0">
            <div className="flex flex-col">
              <span className="text-xs opacity-40 uppercase font-black tracking-tight">Güncel fiyat için</span>
              <span className="text-2xl font-serif font-bold italic">Bizi Arayınız</span>
            </div>
            <button className="bg-brand-chocolate text-brand-cream px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-lg">
              ŞİMDİ İNCELE
            </button>
          </div>

          {/* Decorative background circle */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-cream rounded-full opacity-50 blur-3xl -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=600" 
            alt="Baklava"
            className="absolute right-0 bottom-0 w-80 h-80 object-contain opacity-20 -z-5 pointer-events-none grayscale brightness-125"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Dynamic Category List (5x3) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-12 lg:col-span-5 md:row-span-3 bento-card-dark flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-serif italic">{activeCategory}</h3>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="flex-grow space-y-6 overflow-y-auto pr-2 scrollbar-hide py-2">
            <AnimatePresence mode="wait">
              <motion.ul 
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {currentItems.map((item, idx) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex justify-between items-center group cursor-default"
                  >
                    <span className="text-sm font-medium tracking-wide group-hover:text-brand-gold transition-colors">{item.name}</span>
                    <span className="opacity-50 text-[10px] md:text-xs font-serif italic text-right ml-4 shrink-0">{item.price}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-[9px] uppercase tracking-[0.3em] opacity-40 italic">
            * Tüm ürünlerimiz günlük ve taze olarak tezgahımızda yerini alır.
          </div>
        </motion.div>

        {/* Brand Shoutout (2x3) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-6 lg:col-span-2 md:row-span-3 bento-card-gold flex flex-col justify-center items-center text-center p-6"
        >
          <h4 className="text-[9px] font-black uppercase tracking-[0.4em] mb-4 opacity-80 leading-relaxed">Kıtırtı Sevenlere</h4>
          <h3 className="text-3xl font-serif font-bold italic leading-tight">Geleneksel<br/>Simit & Poğaça</h3>
          <div className="mt-6 w-12 h-px bg-white/40" />
          <Utensils className="mt-6 opacity-20" size={32} />
        </motion.div>

        {/* Small Teaser/Highlight (3x3) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-6 lg:col-span-3 md:row-span-3 bento-card flex flex-col"
        >
          <h3 className="text-2xl font-serif font-bold text-brand-chocolate mb-3">Sütlü Tatlılar</h3>
          <p className="text-[11px] opacity-60 leading-relaxed font-medium mb-8">
            Hafif ve doğal. Günlük taze süt ile hazırlanan geleneksel tariflerimiz.
          </p>
          <div className="mt-auto flex flex-col space-y-4">
             <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full bg-brand-cream border-4 border-white flex items-center justify-center text-[8px] font-bold shadow-sm">Fırın</div>
              <div className="w-12 h-12 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center text-[8px] font-bold shadow-sm">Sütlaç</div>
              <div className="w-12 h-12 rounded-full bg-brand-gold text-white border-4 border-white flex items-center justify-center text-[8px] font-bold shadow-sm">+5</div>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest text-left hover:text-brand-gold transition-colors flex items-center group">
              TÜMÜNÜ GÖR <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Info/Location Bento (7x2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-12 lg:col-span-7 md:row-span-2 bg-brand-cream border-2 border-brand-chocolate/5 rounded-[40px] p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="bg-brand-chocolate text-white w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-1">BİZE ULAŞIN</p>
              <p className="text-lg font-serif font-bold leading-tight">Kazım Karabekir Paşa,<br/>Kongre Cd. No:8D,<br/><span className="text-brand-gold">Yakutiye, Erzurum</span></p>
            </div>
          </div>
          
          <div className="w-px h-12 bg-brand-chocolate/10 hidden md:block" />

          <div className="flex items-center gap-6 md:text-right">
             <div className="md:order-2">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-1">İLETİŞİM</p>
              <p className="text-xl font-serif font-bold">0538 974 28 36</p>
              <a 
                href="https://share.google/OtzYQy2QOdL1ybl7z" 
                target="_blank" 
                rel="noreferrer"
                className="text-[9px] font-black uppercase tracking-widest text-brand-gold mt-2 block hover:underline"
              >
                KONUMU GÖRÜNTÜLE
              </a>
            </div>
            <div className="bg-brand-gold/10 text-brand-gold w-14 h-14 rounded-2xl flex items-center justify-center md:order-1">
              <Phone size={24} />
            </div>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 flex flex-col md:flex-row justify-between items-center border-t border-brand-chocolate/10 text-[9px] font-bold uppercase tracking-[0.4em] opacity-30 gap-6 text-center">
        <div className="flex items-center gap-6">
          <img 
            src="https://ais-pre-kowwc344apjk6u75btqa42-263999500574.europe-west1.run.app/api/artifacts/input_file_1.png" 
            alt="Logo" 
            className="w-10 h-10 grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
          <a 
            href="https://www.instagram.com/ozlempastanesi25/" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-4 hover:text-brand-gold transition-colors"
          >
            <Instagram size={14} />
            <span>ozlempastanesi25</span>
          </a>
        </div>
        <span className="hidden md:block italic">Premium Pastry Experience • Heritage in every bite</span>
        <span>© 2024 Design by Ozlem-Art</span>
      </footer>
    </div>
  );
}
