import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'О нас', icon: 'Building2' },
    { id: 'why', label: 'Почему мы', icon: 'Star' },
    { id: 'contracts', label: 'Наши контракты', icon: 'FileText' }
  ];

  const tabContent = {
    about: {
      title: 'О компании ЦВЭРТ',
      description: 'Мы — ведущий производитель промышленного оборудования с многолетним опытом работы. Наша команда специализируется на разработке и внедрении современных технологических решений для различных отраслей промышленности.',
      points: [
        'Более 10 лет на рынке промышленного оборудования',
        'Собственное производство полного цикла',
        'Команда квалифицированных инженеров',
        'Индивидуальный подход к каждому проекту'
      ]
    },
    why: {
      title: 'Почему выбирают нас',
      description: 'Наши решения отличаются высокой надежностью, энергоэффективностью и долговечностью. Мы используем только проверенные компоненты и современные технологии производства.',
      points: [
        'Гарантия качества на все оборудование',
        'Полное техническое сопровождение',
        'Быстрые сроки производства и монтажа',
        'Конкурентные цены при высоком качестве'
      ]
    },
    contracts: {
      title: 'Наши контракты',
      description: 'Мы успешно реализовали множество проектов для крупных промышленных предприятий по всей России. Наше оборудование работает на объектах нефтегазовой, химической и других отраслях.',
      points: [
        'Более 50 реализованных проектов',
        'Работа с крупнейшими предприятиями РФ',
        'Гарантийное и постгарантийное обслуживание',
        'Полный пакет проектной документации'
      ]
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/30 to-white">
      <Button 
        onClick={scrollToContact}
        className="fixed top-6 right-6 bg-cyan-600 hover:bg-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 z-50 animate-fade-in"
      >
        <Icon name="MessageCircle" size={18} className="mr-2" />
        Свяжитесь с нами
      </Button>
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2 animate-fade-in">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              className={`flex items-center gap-2 whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-200' 
                  : 'border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50'
              }`}
            >
              <Icon name={tab.icon as any} size={18} />
              {tab.label}
            </Button>
          ))}
        </div>

        <Card className="p-8 mb-16 border-cyan-100 shadow-xl shadow-cyan-100/50 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-cyan-900 mb-4 flex items-center gap-2">
            <Icon name={tabs.find(t => t.id === activeTab)?.icon as any} className="text-cyan-600" size={28} />
            {tabContent[activeTab as keyof typeof tabContent].title}
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {tabContent[activeTab as keyof typeof tabContent].description}
          </p>
          <ul className="space-y-3">
            {tabContent[activeTab as keyof typeof tabContent].points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <Icon name="CheckCircle2" className="text-cyan-600 mt-0.5 flex-shrink-0" size={20} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-cyan-600 rounded-full"></div>
              <Icon name="Factory" className="text-cyan-600" size={40} />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-cyan-600 rounded-full"></div>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent mb-3">
              ЦВЭРТ
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-600 to-transparent rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-cyan-900 font-semibold mb-2">Производство и установка</p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Осушители сжатого воздуха и водородные станции в контейнерном исполнении
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-cyan-100 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Icon name="Wind" size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-cyan-900 mb-3">Осушители сжатого воздуха</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Современное оборудование для эффективного осушения сжатого воздуха в промышленных системах. 
              Обеспечивает высокое качество воздуха и защиту оборудования от коррозии.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Icon name="Zap" className="text-cyan-600" size={16} />
                Энергоэффективные технологии
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Shield" className="text-cyan-600" size={16} />
                Надежная конструкция
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Settings" className="text-cyan-600" size={16} />
                Простое обслуживание
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-cyan-100 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Icon name="Container" size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-cyan-900 mb-3">Водородные станции</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Компактные водородные станции в контейнерном исполнении. Полная готовность к работе, 
              быстрый монтаж и ввод в эксплуатацию на любых объектах.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Icon name="Package" className="text-cyan-600" size={16} />
                Контейнерное исполнение
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Gauge" className="text-cyan-600" size={16} />
                Автоматизированное управление
              </li>
              <li className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-cyan-600" size={16} />
                Готовое решение "под ключ"
              </li>
            </ul>
          </Card>
        </div>

        <Card id="contact-section" className="p-10 border-cyan-100 bg-gradient-to-br from-cyan-50 to-white shadow-xl shadow-cyan-100/50">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-900 mb-6">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Получите консультацию наших специалистов и индивидуальное коммерческое предложение
            </p>
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-1">Генеральный директор</p>
              <p className="text-cyan-900 font-semibold text-lg">Андрей Галиней</p>
              <a href="tel:+79258054064" className="text-cyan-600 hover:text-cyan-700 font-semibold text-xl transition-colors">
                +7 925 805 40 64
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <a href="tel:+79258054064">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить
                </a>
              </Button>
              <Button variant="outline" className="border-cyan-600 text-cyan-700 hover:bg-cyan-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <Icon name="Mail" size={18} className="mr-2" />
                Написать
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;