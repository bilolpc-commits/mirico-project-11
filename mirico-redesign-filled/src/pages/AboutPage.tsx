import { motion } from 'framer-motion';
import { ArrowLeft, Award, Users, Target, Lightbulb, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

const AboutPage = () => {
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
              О компании
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Группа компаний <span className="text-gradient">MIRICO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              С 2016 года мы помогаем бизнесу расти с помощью современных IT-решений
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-secondary">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="MIRICO - О компании"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* History */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Наша <span className="text-gradient">история</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Группа компаний MIRICO создана в 2016 году. Компания занимается разработкой и внедрением 
                  программ для автоматизации бизнеса: производственных предприятий, предприятий сферы услуг, 
                  общественного питания и розничной торговли.
                </p>
                <p>
                  Компания MIRICO имеет статус "1С:Франчайзи", а также статус "Центр реальной автоматизации". 
                  Наш конечный результат – выполняющая свои задачи система «под ключ».
                </p>
                <p>
                  За годы работы мы реализовали более 500 проектов в различных отраслях, от небольших 
                  компаний до крупных холдингов.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, title: '1С:Франчайзи', desc: 'Официальный статус партнёра 1С' },
                { icon: Users, title: '50+ специалистов', desc: 'Команда профессионалов' },
                { icon: Target, title: 'Центр автоматизации', desc: 'Статус центра реальной автоматизации' },
                { icon: Lightbulb, title: '500+ проектов', desc: 'Успешных внедрений' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-20"
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Наша <span className="text-gradient">миссия</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы стремимся предоставить нашим клиентам инновационные и надёжные решения, 
                которые помогут им достичь успеха в бизнесе. Наша команда профессионалов 
                работает над тем, чтобы каждый проект был реализован на высшем уровне.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Наши <span className="text-gradient">ценности</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Качество',
                  description: 'Мы не идём на компромиссы в качестве. Каждое решение проходит тщательное тестирование.',
                },
                {
                  title: 'Надёжность',
                  description: 'Наши системы работают стабильно 24/7. Мы гарантируем техническую поддержку.',
                },
                {
                  title: 'Инновации',
                  description: 'Мы постоянно изучаем новые технологии и внедряем лучшие практики.',
                },
              ].map((value, index) => (
                <div key={value.title} className="text-center p-8 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="text-6xl font-bold text-gradient mb-4">0{index + 1}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
