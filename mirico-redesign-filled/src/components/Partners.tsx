import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: '1C', logo: '1C' },
  { name: 'Cleverence', logo: 'Cleverence' },
  { name: 'Venkon', logo: 'Venkon' },
  { name: 'Integral Asia', logo: 'Integral Asia' },
  { name: 'Scanport', logo: 'Scanport' },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Партнёры
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Нам <span className="text-gradient">доверяют</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы являемся официальными партнёрами ведущих мировых производителей
          </p>
        </motion.div>

        {/* Partners Marquee */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex animate-marquee"
          >
            {/* First set */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8"
              >
                <div className="w-48 h-24 flex items-center justify-center rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group">
                  <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {partner.logo}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Клиентов' },
            { value: '50+', label: 'Проектов' },
            { value: '15+', label: 'Лет опыта' },
            { value: '99%', label: 'Довольных клиентов' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
