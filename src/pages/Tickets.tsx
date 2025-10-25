import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Tickets = () => {
  const ticketTypes = [
    {
      id: 1,
      name: 'Базовый',
      price: '500₽',
      description: 'Стандартный входной билет',
      features: [
        'Доступ ко всем залам',
        'Базовая экскурсия',
        'Информационный буклет',
      ],
      icon: 'Ticket'
    },
    {
      id: 2,
      name: 'Расширенный',
      price: '900₽',
      description: 'Полный опыт погружения',
      features: [
        'Доступ ко всем залам',
        'Детальная экскурсия с гидом',
        'Аудиогид на выбор',
        'Фотосъемка без ограничений',
        'Памятная брошюра',
      ],
      icon: 'Star',
      popular: true
    },
    {
      id: 3,
      name: 'VIP',
      price: '1500₽',
      description: 'Эксклюзивное посещение',
      features: [
        'Приоритетный вход',
        'Частная экскурсия',
        'Доступ к закрытым экспонатам',
        'Профессиональная фотосессия',
        'Подарочный набор сувениров',
        'Встреча с куратором',
      ],
      icon: 'Crown'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Билеты
            </h1>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий вариант для посещения выставки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ticketTypes.map((ticket) => (
              <Card 
                key={ticket.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  ticket.popular ? 'border-accent border-2 shadow-lg' : ''
                }`}
              >
                {ticket.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    Популярный
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={ticket.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-3xl" style={{ fontFamily: 'Cormorant, serif' }}>
                    {ticket.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {ticket.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
                      {ticket.price}
                    </span>
                    <span className="text-muted-foreground"> / человек</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {ticket.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full gap-2" 
                    size="lg"
                    variant={ticket.popular ? 'default' : 'outline'}
                  >
                    <Icon name="ShoppingCart" size={20} />
                    Купить билет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Cormorant, serif' }}>
                  Важная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <Icon name="Clock" size={24} className="text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-sm text-muted-foreground">
                        Вторник - Воскресенье: 10:00 - 20:00<br/>
                        Понедельник: выходной
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="MapPin" size={24} className="text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-sm text-muted-foreground">
                        г. Москва, ул. Историческая, д. 15
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="Users" size={24} className="text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Групповые посещения</h3>
                      <p className="text-sm text-muted-foreground">
                        Скидка 15% для групп от 10 человек
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="Gift" size={24} className="text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Льготы</h3>
                      <p className="text-sm text-muted-foreground">
                        Дети до 7 лет, пенсионеры - бесплатно
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 px-4 bg-card">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Ретро Выставка. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Tickets;
