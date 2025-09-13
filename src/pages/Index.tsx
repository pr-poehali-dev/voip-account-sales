import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const accounts = [
    {
      id: 1,
      title: "Plusofon",
      description: "Номера для регистрации и SMS-активаций",
      price: "$70",
      oldPrice: "$90",
      rating: 4.9,
      sales: 1247,
      badge: "Хит продаж"
    },
    {
      id: 2,
      title: "МТС Exolve",
      description: "Облачная IP-телефония от МТС",
      price: "$100",
      oldPrice: "$130",
      rating: 4.8,
      sales: 856,
      badge: "Премиум"
    },
    {
      id: 3,
      title: "SIPOUT",
      description: "SIP-провайдер для бизнес-коммуникаций",
      price: "$120",
      oldPrice: "$150",
      rating: 4.7,
      sales: 432,
      badge: "Новинка"
    },
    {
      id: 4,
      title: "1ats",
      description: "Виртуальная АТС для малого бизнеса",
      price: "$20",
      oldPrice: "$30",
      rating: 4.9,
      sales: 623,
      badge: "Скидка"
    },
    {
      id: 5,
      title: "SIPNET",
      description: "IP-телефония с широким функционалом",
      price: "$70",
      oldPrice: "$95",
      rating: 4.6,
      sales: 234,
      badge: "Топ"
    },
    {
      id: 6,
      title: "Cloff",
      description: "Облачная телефония для колл-центров",
      price: "$50",
      oldPrice: "$70",
      rating: 4.8,
      sales: 789,
      badge: "Популярно"
    },
    {
      id: 7,
      title: "Zvonok",
      description: "VoIP-решения для бизнеса",
      price: "$60",
      oldPrice: "$80",
      rating: 4.5,
      sales: 567,
      badge: "Новинка"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-center">
                <img 
                  src="/img/66246985-facc-44e4-93b8-fa121fd6403b.jpg" 
                  alt="Scream mask"
                  className="w-6 h-6 object-contain filter invert"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                ScreamShop
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#delivery" className="text-gray-700 hover:text-blue-600 transition-colors">Доставка</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Телефонные Аккаунты
              </span>
              <br />
              <span className="text-gray-800">с Мгновенной Доставкой</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Получите доступ к премиум аккаунтам телефоний за секунды. Автоматическая доставка после оплаты!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white px-8 py-4 text-lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Купить сейчас
              </Button>
              <Button variant="outline" size="lg" className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Мгновенная доставка</h3>
              <p className="text-gray-600">Получайте аккаунты сразу после оплаты</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% гарантия</h3>
              <p className="text-gray-600">Возврат средств в случае проблем</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 поддержка</h3>
              <p className="text-gray-600">Помощь в любое время суток</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные Аккаунты</h2>
            <p className="text-gray-600 text-lg">Выберите подходящий аккаунт из нашего каталога</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts.map((account, index) => (
              <Card key={account.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="relative">
                  <div className="flex justify-between items-start">
                    <Badge 
                      variant={account.badge === 'Хит продаж' ? 'default' : 'secondary'}
                      className={account.badge === 'Хит продаж' ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white' : ''}
                    >
                      {account.badge}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Icon name="Star" size={16} className="fill-current" />
                      <span className="ml-1 text-sm font-medium">{account.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{account.title}</CardTitle>
                  <CardDescription>{account.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{account.price}</span>
                      <span className="text-sm text-gray-500 line-through">{account.oldPrice}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <Icon name="Users" size={16} className="inline mr-1" />
                      {account.sales} продаж
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить сейчас
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section id="delivery" className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/img/e3274108-b817-48b2-8788-e8086b7563d2.jpg" 
              alt="Автоматическая доставка"
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">Как работает автоматическая доставка?</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Выберите аккаунт</h3>
              <p className="text-white/80 text-sm">Найдите подходящий товар в каталоге</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Оплатите покупку</h3>
              <p className="text-white/80 text-sm">Безопасная оплата любым способом</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Получите данные</h3>
              <p className="text-white/80 text-sm">Автоматическая отправка на email</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Пользуйтесь!</h3>
              <p className="text-white/80 text-sm">Сразу начинайте использовать</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Остались вопросы?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageCircle" size={24} className="mr-2 text-blue-500" />
                  Онлайн чат
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Быстрые ответы на ваши вопросы</p>
                <Button className="w-full">Начать чат</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" size={24} className="mr-2 text-pink-500" />
                  Email поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Подробная помощь по email</p>
                <Button variant="outline" className="w-full">support@screamshop.ru</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <img 
                    src="/img/66246985-facc-44e4-93b8-fa121fd6403b.jpg" 
                    alt="Scream mask"
                    className="w-6 h-6 object-contain filter invert"
                  />
                </div>
                <span className="text-xl font-bold">ScreamShop</span>
              </div>
              <p className="text-gray-400">Лучшие телефонные аккаунты с мгновенной доставкой</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Telegram</li>
                <li>WhatsApp</li>
                <li>Instagram</li>
                <li>Discord</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Помощь</li>
                <li>Гарантии</li>
                <li>Возврат</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@screamshop.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Онлайн чат 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ScreamShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;