import { motion } from 'framer-motion';
import { ArrowLeft, Code, Settings, Headphones, GraduationCap, Database, Cloud, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

const services = [
  {
    icon: Code,
    title: 'Разработка ПО',
    description: 'Создание программного обеспечения на заказ с учётом специфики вашего бизнеса. Разработка на платформе 1С, мобильные приложения, веб-системы.',
    features: ['Разработка на 1С', 'Мобильные приложения', 'Веб-приложения', 'Интеграции'],
  },
  {
    icon: Settings,
    title: 'Внедрение и настройка',
    description: 'Профессиональное внедрение программных продуктов с настройкой под ваши бизнес-процессы. Перенос данных из других систем.',
    features: ['Настройка систем', 'Миграция данных', 'Обучение персонала', 'Запуск в эксплуатацию'],
  },
  {
    icon: Headphones,
    title: 'Техническая поддержка',
    description: 'Круглосуточная техническая поддержка и оперативное решение возникающих вопросов. SLA гарантии качества.',
    features: ['Поддержка 24/7', 'Удалённое администрирование', 'Выезд специалистов', 'SLA гарантии'],
  },
  {
    icon: GraduationCap,
    title: 'Обучение',
    description: 'Комплексное обучение сотрудников работе с внедрёнными системами. Групповые и индивидуальные занятия.',
    features: ['Групповое обучение', 'Индивидуальные занятия', 'Онлайн-курсы', 'Документация'],
  },
  {
    icon: Database,
    title: 'IT-инфраструктура',
    description: 'Проектирование и развёртывание серверной инфраструктуры, настройка сетей, организация рабочих мест.',
    features: ['Серверы', 'Сети', 'Рабочие станции', 'Резервное копирование'],
  },
  {
    icon: Cloud,
    title: 'Облачные решения',
    description: 'Размещение ваших систем в облаке с гарантией доступности и безопасности. Аренда 1С в облаке.',
    features: ['1С в облаке', 'Хостинг', 'Резервирование', 'Масштабирование'],
  },
  {
    icon: Shield,
    title: 'Информационная безопасность',
    description: 'Защита данных и информационных систем от угроз. Аудит безопасности, внедрение защитных мер.',
    features: ['Аудит безопасности', 'Защита данных', 'Антивирусы', 'Контроль доступа'],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Услуги
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Наши <span className="text-gradient">услуги</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр IT-услуг для вашего бизнеса — от разработки до поддержки
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card rounded-3xl p-8 h-full border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden card-hover">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      to="/contacts"
                      className="inline-flex items-center gap-2 text-primary font-medium group/link"
                    >
                      Заказать услугу
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center bg-primary/5 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Нужна консультация?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для получения бесплатной консультации по автоматизации вашего бизнеса
            </p>
            <Link to="/contacts" className="btn-primary inline-flex items-center gap-2">
              Связаться с нами
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
