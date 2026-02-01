import { motion } from 'framer-motion';
import { Building2, Factory, Truck, Hotel, ShoppingBag, Pill, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

const allProjects = [
  {
    icon: Factory,
    category: 'Производство',
    title: 'UZTEX',
    description: 'Крупнейший текстильный производитель Узбекистана. Комплексная автоматизация всех производственных процессов с внедрением ERP-системы на базе 1С:ERP.',
    results: ['Автоматизация складского учёта', 'Учёт производственных операций', 'Интеграция с промышленным оборудованием', 'Отчётность в реальном времени'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    year: '2022',
  },
  {
    icon: Factory,
    category: 'Производство',
    title: 'AYSEL-ENERGY',
    description: 'Энергетическое предприятие. Внедрение комплексной системы управления с автоматизацией учёта энергоресурсов и формирования регуляторной отчётности.',
    results: ['Учёт потребления энергоресурсов', 'Автоматизация отчётности', 'Контроль затрат на энергию', 'Прогнозирование потребления'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop',
    year: '2021',
  },
  {
    icon: Factory,
    category: 'Производство',
    title: 'ВБТР',
    description: 'Производственное предприятие с полным циклом автоматизации производственного учёта, планирования и управления качеством продукции.',
    results: ['Планирование производства', 'Учёт материалов и комплектующих', 'Контроль качества', 'Управление заказами'],
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=500&fit=crop',
    year: '2020',
  },
  {
    icon: Factory,
    category: 'Производство',
    title: 'ROKA-CELL',
    description: 'Производитель строительных материалов. Внедрение комплексной системы автоматизации от склада сырья до отгрузки готовой продукции.',
    results: ['ERP система полного цикла', 'Складской учёт с ТСД', 'Финансовый контроль', 'Управление себестоимостью'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=800&h=500&fit=crop',
    year: '2023',
  },
  {
    icon: Building2,
    category: 'Строительство',
    title: 'Строительный холдинг',
    description: 'Крупный девелопер с множеством объектов. Автоматизация проектного управления, сметного дела и финансового учёта.',
    results: ['Учёт строительных объектов', 'Сметы и калькуляции', 'Управление проектами', 'Контроль подрядчиков'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    year: '2022',
  },
  {
    icon: Truck,
    category: 'Логистика',
    title: 'Транспортная компания',
    description: 'Логистический оператор с собственным автопарком. Внедрение системы управления транспортом и складскими операциями.',
    results: ['Маршрутизация перевозок', 'Складской учёт WMS', 'GPS-отслеживание', 'Оптимизация маршрутов'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    year: '2021',
  },
  {
    icon: Hotel,
    category: 'Гостиницы',
    title: 'Гостиничная сеть',
    description: 'Сеть отелей премиум-класса. Комплексная автоматизация управления номерным фондом, бронирования и обслуживания гостей.',
    results: ['Система бронирования', 'Учёт услуг', 'Управление персоналом', 'Интеграция с OTA'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
    year: '2023',
  },
  {
    icon: ShoppingBag,
    category: 'Торговля',
    title: 'Торговая сеть',
    description: 'Крупная розничная сеть с десятками магазинов. Автоматизация всей цепочки от закупки до продажи конечному покупателю.',
    results: ['POS-системы', 'Управление ассортиментом', 'Аналитика продаж', 'Программа лояльности'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
    year: '2022',
  },
  {
    icon: Pill,
    category: 'Фармацевтика',
    title: 'Фармацевтический дистрибьютор',
    description: 'Крупный фармацевтический дистрибьютор. Специализированное решение с учётом требований отрасли.',
    results: ['Партионный учёт', 'Контроль сроков годности', 'Регуляторная отчётность', 'Сертификация серий'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=500&fit=crop',
    year: '2021',
  },
];

const categories = [
  { name: 'Все', icon: null },
  { name: 'Производство', icon: Factory },
  { name: 'Строительство', icon: Building2 },
  { name: 'Логистика', icon: Truck },
  { name: 'Гостиницы', icon: Hotel },
  { name: 'Торговля', icon: ShoppingBag },
  { name: 'Фармацевтика', icon: Pill },
];

const ProjectsPage = () => {
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
              Портфолио
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Наши <span className="text-gradient">Проекты</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Более 500 успешных внедрений в различных отраслях бизнеса. 
              Каждый проект — это уникальное решение под задачи клиента.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat, index) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 card-hover h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                      <project.icon className="w-4 h-4" />
                      {project.category}
                    </div>

                    {/* Year */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-sm font-medium">
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2">
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '500+', label: 'Проектов' },
              { number: '8+', label: 'Лет опыта' },
              { number: '50+', label: 'Специалистов' },
              { number: '6', label: 'Отраслей' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
