import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'О компании', href: '/about' },
      { name: 'Решения', href: '/solutions' },
      { name: 'Проекты', href: '/projects' },
      { name: 'Контакты', href: '/contacts' },
    ],
    services: [
      { name: 'Мобильные решения', href: '/solutions' },
      { name: 'ERP системы', href: '/solutions' },
      { name: 'Бухгалтерия 3.0', href: '/solutions' },
      { name: 'Управление торговлей', href: '/solutions' },
    ],
    support: [
      { name: 'Техподдержка', href: '/contacts' },
      { name: 'Услуги', href: '/services' },
      { name: 'Обучение', href: '/services' },
      { name: 'Партнёры', href: '/about' },
    ],
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-500 to-primary" />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-2xl">M</span>
                </div>
                <span className="text-3xl font-bold text-background">MIRICO</span>
              </Link>
              <p className="text-background/70 leading-relaxed max-w-md">
                Ведущая IT-компания в Узбекистане, специализирующаяся на внедрении 1С и 
                разработке мобильных решений для автоматизации бизнеса.
              </p>
            </motion.div>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:+998712033994" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+998 (71) 203-39-94</span>
              </a>
              <a href="mailto:info@mirico.uz" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@mirico.uz</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>г. Ташкент, Яккасарайский р-н, ул. Кушбеги 18</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} MIRICO. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-background/50 hover:text-primary text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:shadow-[var(--shadow-red)] transition-shadow"
              >
                <ArrowUp className="w-5 h-5 text-primary-foreground" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
