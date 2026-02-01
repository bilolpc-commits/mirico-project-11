import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  'Статус "1С:Франчайзи"',
  'Центр реальной автоматизации',
  'Проектное управление',
  'Применение Best Practices',
  'Система «под ключ»',
  'Ориентация на результат',
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="about" className="section-padding bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        
        <div className="container-custom" ref={ref}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Video/Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative group">
                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1)_0%,transparent_50%)]" />
                    
                    {/* Logo representation */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <div className="w-32 h-32 rounded-3xl bg-primary flex items-center justify-center shadow-[var(--shadow-red)]">
                        <span className="text-6xl font-bold text-primary-foreground">M</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Video play button overlay */}
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-[var(--shadow-red)] cursor-pointer"
                    >
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </motion.div>
                  </button>
                </div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">8+</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Лет на рынке</div>
                      <div className="text-sm text-muted-foreground">С 2016 года</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                О компании
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Группа компаний <span className="text-gradient">MIRICO</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Группа компаний MIRICO создана в 2016 году. Компания занимается разработкой и внедрением 
                программ для автоматизации бизнеса: производственных предприятий, предприятий сферы услуг, 
                общественного питания и розничной торговли, а также систем поддержки принятия решений.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Компания MIRICO имеет статус "1С:Франчайзи", а также статус "Центр реальной автоматизации". 
                Наш конечный результат – выполняющая свои задачи система «под ключ».
              </p>

              {/* Benefits list */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Узнать больше
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl aspect-video bg-background rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-background hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="MIRICO Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default About;
