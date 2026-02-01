import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, RefreshCcw, Users, Shield, Zap, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Профессионализм',
    description: 'Сертифицированные специалисты с многолетним опытом в сфере IT и автоматизации бизнеса',
  },
  {
    icon: RefreshCcw,
    title: 'Адаптивность',
    description: 'Гибкие решения, которые легко масштабируются и адаптируются под ваши нужды',
  },
  {
    icon: HeartHandshake,
    title: 'Клиентоориентированность',
    description: 'Индивидуальный подход к каждому клиенту и оперативная техническая поддержка',
  },
  {
    icon: Shield,
    title: 'Надёжность',
    description: 'Защита данных и стабильная работа систем обеспечивают бесперебойность бизнеса',
  },
  {
    icon: Zap,
    title: 'Инновации',
    description: 'Используем передовые технологии для создания эффективных IT-решений',
  },
  {
    icon: Users,
    title: 'Команда экспертов',
    description: 'Опытные разработчики, аналитики и консультанты в области 1С и мобильных технологий',
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Наши преимущества
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают <span className="text-gradient">MIRICO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы объединяем технологическую экспертизу с глубоким пониманием бизнес-процессов
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-8 h-full card-hover border border-border hover:border-primary/30">
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
