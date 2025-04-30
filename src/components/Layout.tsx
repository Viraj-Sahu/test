import React, { useState } from 'react';
import { Home, CreditCard, Smartphone, Video, ShieldCheck, ClipboardList, Shield, X, Menu, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Tawk.to Chat Script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/680b40d28be16c190c7ee4e0/1iplvaeja';
    script.charset = 'UTF-8';
    script.setAttribute('crossOrigin', '*');

    const scripts = document.getElementsByTagName('script');
    if (scripts.length > 0) {
      scripts[0].parentNode?.insertBefore(script, scripts[0]);
    } else {
      document.head.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const navItems: NavItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: 'Credit Monitoring',
      path: '/credit-monitoring',
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      name: 'SIM Protection',
      path: '/sim-protection',
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      name: 'Deepfake Defense',
      path: '/deepfake-defense',
      icon: <Video className="w-5 h-5" />,
    },
    {
      name: 'Fintech App Verification',
      path: '/fintech-verification',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      name: 'Assessment',
      path: '/assessment',
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <PhoneCall className="w-5 h-5" />,
    },
    {
      name: 'A/अ', // Using a small dot character
      path: '#',
      icon: (
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
      ),
    },
    {
      name: '🌓', // Using a small dot character
      path: '#',
      icon: (
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">IdentityGuard</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === item.path
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium ${location.pathname === item.path
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">IdentityGuard</span>
            </div>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} IdentityGuard. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;