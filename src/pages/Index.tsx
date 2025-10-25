import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Index = () => {
  const exhibits = [
    {
      id: 1,
      title: 'Граммофон 1900-х',
      description: 'Элегантный граммофон начала XX века из частной коллекции',
      image: 'https://cdn.poehali.dev/projects/7532a164-65a2-4a47-a823-d149ee564eaf/files/7e8e3870-f93a-4b5f-b58f-317a0fed3891.jpg',
      year: '1905'
    },
    {
      id: 2,
      title: 'Пишущая машинка',
      description: 'Классическая печатная машинка эпохи 1920-х годов',
      image: 'https://cdn.poehali.dev/projects/7532a164-65a2-4a47-a823-d149ee564eaf/files/60396a96-8665-46ab-bd81-f2359b092416.jpg',
      year: '1925'
    },
    {
      id: 3,
      title: 'Исторический зал',
      description: 'Воссозданный интерьер выставочного зала начала века',
      image: 'https://cdn.poehali.dev/projects/7532a164-65a2-4a47-a823-d149ee564eaf/files/c2ce6b12-57c1-406b-8b1c-e55304908e60.jpg',
      year: '1920'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
              Путешествие в прошлое
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уникальная коллекция исторических артефактов и предметов быта начала XX века
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Link to="/tickets">
                <Button size="lg" className="gap-2">
                  <Icon name="Ticket" size={20} />
                  Купить билет
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Calendar" size={20} />
                  Расписание
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Избранные экспонаты
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {exhibits.map((exhibit) => (
              <Card key={exhibit.id} className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={exhibit.image} 
                    alt={exhibit.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Cormorant, serif' }}>
                      {exhibit.title}
                    </h3>
                    <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                      {exhibit.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {exhibit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              О выставке
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Ретро-выставка — это уникальное культурное пространство, где оживает история начала XX века. 
                Мы собрали более 200 редких экспонатов из частных коллекций со всего мира.
              </p>
              <p>
                Каждый предмет имеет свою историю и помогает нам лучше понять быт и культуру той эпохи. 
                От элегантных граммофонов до изысканных предметов интерьера — все экспонаты 
                тщательно отреставрированы и представлены в аутентичной обстановке.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>200+</div>
                  <div className="text-sm">Экспонатов</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>5</div>
                  <div className="text-sm">Тематических залов</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>1900-1930</div>
                  <div className="text-sm">Период экспонатов</div>
                </div>
              </div>
            </div>
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

export default Index;
