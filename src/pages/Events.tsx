import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Тематическая экскурсия "Быт начала века"',
      date: '15 ноября, 2024',
      time: '14:00 - 15:30',
      description: 'Погружение в атмосферу повседневной жизни людей эпохи 1900-1920 годов',
      category: 'Экскурсия',
      capacity: '20 мест',
      icon: 'Users'
    },
    {
      id: 2,
      title: 'Мастер-класс по каллиграфии',
      date: '18 ноября, 2024',
      time: '16:00 - 18:00',
      description: 'Изучение искусства письма перьевой ручкой под руководством опытного каллиграфа',
      category: 'Мастер-класс',
      capacity: '15 мест',
      icon: 'PenTool'
    },
    {
      id: 3,
      title: 'Концерт "Музыка золотого века"',
      date: '22 ноября, 2024',
      time: '19:00 - 21:00',
      description: 'Классические музыкальные произведения начала XX века в исполнении камерного оркестра',
      category: 'Концерт',
      capacity: '50 мест',
      icon: 'Music'
    },
    {
      id: 4,
      title: 'Лекция "История фотографии"',
      date: '25 ноября, 2024',
      time: '15:00 - 16:30',
      description: 'Эволюция фотографического искусства с момента его зарождения до 1930-х годов',
      category: 'Лекция',
      capacity: '30 мест',
      icon: 'Camera'
    },
    {
      id: 5,
      title: 'Детский квест "Тайны старого музея"',
      date: '29 ноября, 2024',
      time: '11:00 - 13:00',
      description: 'Интерактивное приключение для детей 7-12 лет с поиском артефактов',
      category: 'Для детей',
      capacity: '25 мест',
      icon: 'Sparkles'
    },
    {
      id: 6,
      title: 'Вечер старинных танцев',
      date: '2 декабря, 2024',
      time: '18:00 - 20:00',
      description: 'Изучение и практика бальных танцев начала XX века в исторических костюмах',
      category: 'Активность',
      capacity: '40 мест',
      icon: 'Heart'
    }
  ];

  const categoryColors: Record<string, string> = {
    'Экскурсия': 'bg-primary/10 text-primary',
    'Мастер-класс': 'bg-accent/20 text-accent-foreground',
    'Концерт': 'bg-secondary/20 text-secondary-foreground',
    'Лекция': 'bg-muted text-muted-foreground',
    'Для детей': 'bg-pink-100 text-pink-700',
    'Активность': 'bg-green-100 text-green-700'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              События
            </h1>
            <p className="text-xl text-muted-foreground">
              Расписание мероприятий и специальных программ выставки
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 flex-1">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name={event.icon} size={28} className="text-primary" />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-2xl" style={{ fontFamily: 'Cormorant, serif' }}>
                            {event.title}
                          </CardTitle>
                          <Badge className={categoryColors[event.category]}>
                            {event.category}
                          </Badge>
                        </div>
                        
                        <CardDescription className="text-base">
                          {event.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={18} className="text-muted-foreground" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={18} className="text-muted-foreground" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button className="gap-2">
                      <Icon name="Ticket" size={18} />
                      Записаться
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Info" size={18} />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-muted/50 to-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  <Icon name="Bell" size={24} className="text-accent" />
                  Подписка на новости
                </CardTitle>
                <CardDescription>
                  Узнавайте первыми о новых мероприятиях и специальных предложениях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="flex-1 px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button className="gap-2">
                    <Icon name="Send" size={18} />
                    Подписаться
                  </Button>
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

export default Events;
