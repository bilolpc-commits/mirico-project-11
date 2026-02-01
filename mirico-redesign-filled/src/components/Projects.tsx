import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Factory, Truck, Hotel, ShoppingBag, Pill, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    icon: Factory,
    category: 'Производство',
    title: 'UZTEX',
    description: 'Комплексная автоматизация текстильного производства с внедрением ERP-системы',
    results: ['Автоматизация склада', 'Учёт производства', 'Интеграция с оборудованием'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  },
  {
    icon: Factory,
    category: 'Производство',
    title: 'AYSEL-ENERGY',
    description: 'Внедрение системы управления энергетическим предприятием',
    results: ['Учёт энергоресурсов', 'Автоматизация отчётности', 'Контроль затрат'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
  },
  {
    icon: Factory,
    category: 'Производство',
    title: 'ВБТР',
    description: 'Автоматизация производственного учёта и управления',
    results: ['Планирование производства', 'Учёт материалов', 'Контроль качества'],
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop',
  },
  {
    icon: Factory,
    category: 'Производство',
    title: 'ROKA-CELL',
    description: 'Внедрение комплексной системы автоматизации',
    results: ['ERP внедрение', 'Складской учёт', 'Финансовый контроль'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&h=400&fit=crop',
  },
  {
    icon: Building2,
    category: 'Строительство',
    title: 'Строительные проекты',
    description: 'Автоматизация строительных компаний и девелоперов',
    results: ['Учёт объектов', 'Сметы и калькуляции', 'Управление проектами'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  },
  {
    icon: Truck,
    category: 'Логистика',
    title: 'Логистические компании',
    description: 'Внедрение систем управления логистикой и складами',
    results: ['Маршрутизация', 'Складской учёт', 'Отслеживание грузов'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
  },
  {
    icon: Hotel,
    category: 'Гостиницы',
    title: 'Гостиничный бизнес',
    description: 'Комплексная автоматизация гостиничного управления',
    results: ['Бронирование', 'Учёт услуг', 'Управление персоналом'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
  },
  {
    icon: ShoppingBag,
    category: 'Торговля',
    title: 'Торговые сети',
    description: 'Автоматизация розничной и оптовой торговли',
    results: ['POS-системы', 'Управление товаром', 'Аналитика продаж'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
  },
  {
    icon: Pill,
    category: 'Фармацевтика',
    title: 'Фармацевтические компании',
    description: 'Специализированные решения для фармацевтики',
    results: ['Учёт серий', 'Контроль сроков', 'Регуляторная отчётность'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Портфолио
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="text-gradient">Проекты</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 500 успешных внедрений в различных отраслях бизнеса
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 card-hover">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
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
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
            Все проекты
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
