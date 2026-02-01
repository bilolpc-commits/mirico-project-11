import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Building2, Calculator, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: Building2,
    title: 'ERP Управление предприятием',
    description: 'ERP - это ключ к интеграции всех аспектов вашего бизнеса в одной централизованной системе. Увеличите производительность, улучшите управление рисками и обеспечите гибкость для роста.',
    features: ['Полная автоматизация', 'Интеграция систем', 'Управление рисками'],
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Calculator,
    title: 'Бухгалтерия 3.0 для Узбекистана',
    description: 'Программное обеспечение на платформе 1С Предприятие 8.3 для автоматизации бухгалтерского учета.',
    features: ['1С Предприятие 8.3', 'Налоговая отчётность', 'НК РУз'],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: ShoppingCart,
    title: 'Управление торговлей 11',
    description: 'Программное обеспечение на платформе 1С Предприятие 8.3 для автоматизации учета торговой компании.',
    features: ['1С:УТ 11', 'Оптовая торговля', 'Розничная торговля'],
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Building2,
    title: 'Управление компанией 8',
    description: 'Самое эффективное решение для управления торговой и производственной компанией в Узбекистане!',
    features: ['Торговля', 'Производство', 'Финансы'],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: Smartphone,
    title: 'Мобильные решения DataMobile',
    description: 'Программный комплекс на базе решений DataMobile для автоматизации складского учета.',
    features: ['Cleverence', 'Складской учет', 'Инвентаризация'],
    color: 'from-red-500 to-red-600',
  },
];

const Solutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Наши решения
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Комплексные <span className="text-gradient">IT-решения</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий спектр продуктов и услуг для автоматизации вашего бизнеса
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-card rounded-3xl p-8 h-full border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden card-hover">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-red-dark flex items-center justify-center shadow-[var(--shadow-red)]">
                      <solution.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 text-primary font-medium group/link"
                  >
                    <span>Подробнее</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
