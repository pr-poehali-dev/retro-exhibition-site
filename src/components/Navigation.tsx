import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/tickets', label: 'Билеты', icon: 'Ticket' },
    { path: '/events', label: 'События', icon: 'Calendar' }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xl font-bold">Р</span>
            </div>
            <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Ретро Выставка
            </span>
          </Link>
          
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 transition-colors hover:text-primary ${
                  location.pathname === link.path 
                    ? 'text-primary font-semibold' 
                    : 'text-muted-foreground'
                }`}
              >
                <Icon name={link.icon} size={20} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
