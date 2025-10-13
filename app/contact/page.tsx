"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Menu, 
  X, 
  Mountain,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
  Send
} from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: "Visit Our Store",
      details: [
        "Mall Road, Old Manali",
        "Manali, Himachal Pradesh",
        "175131, India"
      ],
      action: "Get Directions"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 98765 43211",
        "Landline: 01902-252XXX"
      ],
      action: "Call Now"
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-600" />,
      title: "Email Us",
      details: [
        "info@manalimart.com",
        "orders@manalimart.com",
        "support@manalimart.com"
      ],
      action: "Send Email"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Store Hours",
      details: [
        "Monday - Sunday",
        "7:00 AM - 10:00 PM",
        "Open all days"
      ],
      action: "View Schedule"
    }
  ];

  const faqs = [
    {
      question: "Do you provide home delivery?",
      answer: "Currently, we are a walk-in store and do not provide home delivery. However, we are located conveniently on Mall Road for easy access."
    },
    {
      question: "Do you accept online orders?",
      answer: "We are primarily an information website. Please visit our store or call us to check product availability and make purchases."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI payments, debit cards, and credit cards for your convenience."
    },
    {
      question: "Do you have parking facilities?",
      answer: "Yes, there is public parking available near our store on Mall Road. We also have a small parking area for customers."
    },
    {
      question: "Can I return or exchange products?",
      answer: "Yes, we have a return and exchange policy for unopened products within 7 days of purchase with a valid receipt."
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
              <Link href="/about" className="text-gray-700 hover:text-green-700 transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-green-700 font-medium border-b-2 border-green-700">Contact</Link>
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
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-700">About</Link>
              <Link href="/contact" className="block px-3 py-2 text-green-700 font-medium">Contact</Link>
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Visit us in the heart of Manali or reach out to us for any questions about our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us and visit our store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <CardDescription>
                    Have a question or feedback? We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Navigation className="h-6 w-6 text-green-600" />
                    <span>Find Us</span>
                  </CardTitle>
                  <CardDescription>
                    Located in the heart of Old Manali on Mall Road
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Map Placeholder */}
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Interactive Map</p>
                        <p className="text-sm text-gray-400">Mall Road, Old Manali</p>
                      </div>
                    </div>

                    {/* Location Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                        <p className="text-gray-600">
                          Manali Mart<br />
                          Mall Road, Old Manali<br />
                          Manali, Himachal Pradesh 175131
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Landmarks</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Near Old Manali Bridge</li>
                          <li>• Opposite to Cafe 1947</li>
                          <li>• 5 minutes walk from Bus Stand</li>
                        </ul>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our store
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Visit?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Come experience the warmth of mountain hospitality at Manali Mart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Browse Products
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3">
              Call Us Now
            </Button>
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