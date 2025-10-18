"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Menu, 
  X
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
}

export default function Navbar({ searchTerm = '', onSearchChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Determine if search bar should be shown
  const showSearchBar = pathname === '/' || pathname === '/products';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-24">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-footer.png" alt="Website Logo" width={120} height={60} className="w-auto h-16 md:h-24" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`transition-colors font-medium ${
                  isActiveLink(link.href)
                    ? 'text-green-700 border-b-2 border-green-700'
                    : 'text-gray-700 hover:text-green-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {showSearchBar && (
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Input 
                  placeholder="Search products..." 
                  className="w-64 pr-10"
                  value={searchTerm}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                />
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>
          )}

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink(link.href)
                    ? 'text-green-700 font-medium'
                    : 'text-gray-700 hover:text-green-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Search */}
          {showSearchBar && (
            <div className="px-4 pb-3">
              <div className="relative">
                <Input 
                  placeholder="Search products..." 
                  className="w-full pr-10"
                  value={searchTerm}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                />
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}