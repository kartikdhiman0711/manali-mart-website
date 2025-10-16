"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Menu, 
  X, 
  Mountain,
  Users,
  Award,
  Heart,
  Clock,
  MapPin,
  Truck,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      number: "10+",
      label: "Years of Service",
      description: "Serving the Manali community since 2014"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "5000+",
      label: "Happy Customers",
      description: "Trusted by locals and tourists alike"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      number: "1200+",
      label: "Products Available",
      description: "Across 7 major categories"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      number: "100%",
      label: "Customer Satisfaction",
      description: "Our commitment to quality service"
    }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Quality Assurance",
      description: "We source only the finest products from trusted suppliers and local farmers, ensuring freshness and quality in every item we stock."
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. We strive to provide personalized service and build lasting relationships."
    },
    {
      icon: <Mountain className="h-12 w-12 text-blue-600" />,
      title: "Local Community",
      description: "We are proud to be part of the Manali community, supporting local farmers and contributing to the local economy."
    },
    {
      icon: <Truck className="h-12 w-12 text-orange-600" />,
      title: "Reliable Service",
      description: "From early morning to late evening, we're here to serve you with consistent, reliable service every day of the year."
    }
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Store Owner & Manager",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "With over 15 years of retail experience, Rajesh founded Manali Mart with a vision to serve the community."
    },
    {
      name: "Priya Thakur",
      role: "Assistant Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Priya manages daily operations and ensures our shelves are always stocked with fresh products."
    },
    {
      name: "Amit Kumar",
      role: "Customer Service",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Amit helps customers find what they need and provides product information with a friendly smile."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-green-700" />
              <div>
                <h1 className="text-xl font-bold text-green-700">Manali Mart</h1>
                <p className="text-xs text-gray-500">Mountain Fresh</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Products</Link>
              <Link href="/about" className="text-green-700 font-medium border-b-2 border-green-700">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Contact</Link>
            </div>

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
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-700">Home</Link>
              <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-green-700">Products</Link>
              <Link href="/about" className="block px-3 py-2 text-green-700 font-medium">About</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-700">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Manali Mart
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Your trusted neighborhood store in the heart of the Himalayas, serving the community with dedication and care since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    {stat.number}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Manali Mart began as a small family business in 2014 with a simple mission: to provide 
                  the residents and visitors of Manali with high-quality products at fair prices. What 
                  started as a modest store has grown into a trusted community hub.
                </p>
                <p>
                  Located in the heart of Old Manali on Mall Road, we have witnessed the town's growth 
                  and have been proud to serve both the local community and the thousands of tourists 
                  who visit our beautiful hill station every year.
                </p>
                <p>
                  Our commitment to quality, customer service, and community support has made us more 
                  than just a store – we're a part of the Manali family. From fresh dairy products 
                  sourced from local farms to essential household items, we ensure that our shelves 
                  are always stocked with what our customers need.
                </p>
                <p>
                  Today, we proudly offer over 1,200 products across 7 major categories, serving more 
                  than 5,000 satisfied customers who trust us for their daily needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Manali mountains and landscape"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Located in</p>
                    <p className="text-sm text-gray-600">Mall Road, Old Manali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in serving our community every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The friendly faces behind Manali Mart who make your shopping experience special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Visit Us Today</h2>
          <p className="text-green-100 mb-8 text-lg">
            Experience the warmth of mountain hospitality and find everything you need under one roof
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Browse Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-green-700 px-8 py-3">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-bold">Manali Mart</h3>
                  <p className="text-sm text-gray-400">Mountain Fresh</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted neighborhood store in the heart of Manali, serving quality products since 2014.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dairy & Frozen</li>
                <li>Grocery & Daily Needs</li>
                <li>Snacks & Drinks</li>
                <li>Household Essentials</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mall Road, Old Manali</li>
                <li>+91 98765 43210</li>
                <li>info@manalimart.com</li>
                <li>7 AM - 10 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Manali Mart. All rights reserved. Made with ❤️ in the mountains.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}