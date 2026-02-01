import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'ERP Управление',
    subtitle: 'предприятием',
    description: 'ERP - это ключ к интеграции всех аспектов вашего бизнеса в одной централизованной системе. Увеличьте производительность и обеспечьте гибкость для роста вашей компании.',
    cta: 'Подробнее',
    link: '#solutions',
  },
  {
    id: 2,
    title: 'Управление',
    subtitle: 'компанией 8',
    description: 'Самое эффективное решение для управления торговой и производственной компанией в Узбекистане!',
    cta: 'Узнать больше',
    link: '#solutions',
  },
  {
    id: 3,
    title: 'Бухгалтерия 3.0',
    subtitle: 'для Узбекистана',
    description: 'Программное обеспечение на платформе 1С Предприятие 8.3 для автоматизации бухгалтерского учёта.',
    cta: 'Заказать',
    link: '#contacts',
  },
  {
    id: 4,
    title: 'Мобильные',
    subtitle: 'решения',
    description: 'Программный комплекс на базе решений DataMobile для автоматизации складского учета',
    cta: 'Подробнее',
    link: '#solutions',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container-custom relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>IT Решения для бизнеса</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                  <span className="text-foreground">{slides[currentSlide].title}</span>
                  <br />
                  <span className="text-gradient">{slides[currentSlide].subtitle}</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href={slides[currentSlide].link} className="btn-primary inline-flex items-center gap-2 group">
                    {slides[currentSlide].cta}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#about" className="btn-outline inline-flex items-center gap-2">
                    О компании
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex gap-3 mt-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? 'w-10 bg-primary'
                      : 'w-2 bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="perspective-1000">
              <motion.div
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, -5, 0, 5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="relative preserve-3d"
              >
                {/* Main Card */}
                <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
                  {/* Red accent glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-3xl blur-xl opacity-50" />
                  
                  <div className="relative">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-6 bg-secondary rounded-2xl">
                        <div className="text-4xl font-bold text-primary mb-2">8+</div>
                        <div className="text-sm text-muted-foreground">Лет опыта</div>
                      </div>
                      <div className="text-center p-6 bg-secondary rounded-2xl">
                        <div className="text-4xl font-bold text-primary mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Клиентов</div>
                      </div>
                      <div className="text-center p-6 bg-secondary rounded-2xl">
                        <div className="text-4xl font-bold text-primary mb-2">1С</div>
                        <div className="text-sm text-muted-foreground">Франчайзи</div>
                      </div>
                      <div className="text-center p-6 bg-secondary rounded-2xl">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-sm text-muted-foreground">Поддержка</div>
                      </div>
                    </div>

                    {/* Bottom section */}
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <ChevronRight className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Начать проект</div>
                          <div className="text-sm text-muted-foreground">Бесплатная консультация</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-20 h-20 rounded-2xl bg-primary/20 backdrop-blur-sm"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full bg-primary animate-pulse-glow"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
