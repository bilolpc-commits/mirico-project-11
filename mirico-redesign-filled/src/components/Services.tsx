import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Search, Users, Server, Shield, Cloud, Cog, ArrowRight, Database, Settings, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Внедрение 1С',
    description: 'Комплексная автоматизация бизнес-процессов на базе 1С:Предприятие 8: Управление предприятием, Бухгалтерия 3.0, Розница для Узбекистана.',
  },
  {
    icon: Server,
    title: 'ERP системы',
    description: 'Внедрение и настройка ERP-систем для управления всеми процессами предприятия: SAP Business One, 1С:ERP.',
  },
  {
    icon: Code,
    title: 'Разработка ПО',
    description: 'Индивидуальная разработка программных решений, доработка конфигураций 1С, создание веб и мобильных приложений.',
  },
  {
    icon: Search,
    title: 'IT-консалтинг',
    description: 'Консультационные услуги в области информационных технологий: аудит ИТ-инфраструктуры, оптимизация бизнес-процессов, стратегическое планирование.',
  },
  {
    icon: Smartphone,
    title: 'Мобильные решения',
    description: 'Программный комплекс на базе DataMobile для автоматизации складского учета и мобильной торговли.',
  },
  {
    icon: Settings,
    title: 'Автоматизация розничной торговли',
    description: 'Специализированные решения для автоматизации торговой деятельности магазинов и торговых сетей с учетом отраслевой специфики.',
  },
  {
    icon: Shield,
    title: 'Техническая поддержка',
    description: 'Профессиональное сопровождение и обслуживание внедренных систем: 1С:ИТС, консультации, обновления, устранение ошибок.',
  },
  {
    icon: Users,
    title: 'Обучение сотрудников',
    description: 'Комплексное обучение персонала работе с внедренными системами, сертификация специалистов по 1С.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Услуги
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Полный спектр <span className="text-gradient">IT-услуг</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Группа компаний MIRICO предоставляет широкий спектр услуг, охватывающий различные аспекты информационных технологий
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 h-full border border-border hover:border-primary/30 transition-all duration-500 card-hover">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#contacts" className="btn-primary inline-flex items-center gap-2 group">
            Заказать консультацию
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
