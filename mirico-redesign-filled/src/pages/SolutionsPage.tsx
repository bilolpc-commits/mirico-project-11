import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Calculator, ShoppingCart, Smartphone, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

const solutions = [
  {
    icon: Building2,
    title: 'ERP Управление предприятием',
    description: 'ERP - это ключ к интеграции всех аспектов вашего бизнеса в одной централизованной системе. Увеличите производительность, улучшите управление рисками и обеспечите гибкость для роста.',
    features: [
      'Полная автоматизация бизнес-процессов',
      'Интеграция всех подсистем предприятия',
      'Управление рисками и прогнозирование',
      'Масштабируемость под рост бизнеса',
      'Единая база данных',
      'Отчётность в реальном времени',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
  {
    icon: Calculator,
    title: 'Бухгалтерия 3.0 для Узбекистана',
    description: 'Программное обеспечение на платформе 1С Предприятие 8.3 для автоматизации бухгалтерского учета с учётом требований законодательства Республики Узбекистан.',
    features: [
      'Платформа 1С Предприятие 8.3',
      'Соответствие НК РУз',
      'Автоматическая налоговая отчётность',
      'Учёт в нескольких валютах',
      'Интеграция с банками',
      'Регуляторная отчётность',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
  },
  {
    icon: ShoppingCart,
    title: 'Управление торговлей 11',
    description: 'Программное обеспечение на платформе 1С Предприятие 8.3 для автоматизации учета торговой компании любого масштаба.',
    features: [
      'Оптовая и розничная торговля',
      'Управление ценообразованием',
      'Складской учёт',
      'CRM-функционал',
      'Аналитика продаж',
      'Управление закупками',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
  },
  {
    icon: Factory,
    title: 'Управление компанией 8',
    description: 'Самое эффективное решение для управления торговой и производственной компанией в Узбекистане! Комплексное решение под ключ.',
    features: [
      'Торговля и производство',
      'Финансовое управление',
      'Управление персоналом',
      'Документооборот',
      'Управление проектами',
      'Бюджетирование',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
  },
  {
    icon: Smartphone,
    title: 'Мобильные решения DataMobile',
    description: 'Программный комплекс на базе решений DataMobile для автоматизации складского учета с использованием терминалов сбора данных.',
    features: [
      'Терминалы сбора данных',
      'Инвентаризация',
      'Приёмка товара',
      'Отгрузка',
      'Маркировка',
      'Интеграция с 1С',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
  },
];

const SolutionsPage = () => {
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
              Продукты
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT-<span className="text-gradient">Решения</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Комплексные решения для автоматизации бизнеса на базе платформы 1С
            </p>
          </motion.div>

          {/* Solutions */}
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <solution.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{solution.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8">
                    {solution.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contacts" className="btn-primary inline-flex items-center gap-2">
                    Получить консультацию
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-3xl overflow-hidden group">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
