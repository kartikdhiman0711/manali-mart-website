"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';
import { on } from 'node:events';

export default function Contact() {
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
        "18 Mile, Manali",
        "Himachal Pradesh",
        "175131, India"
      ],
      action: "https://www.google.com/maps/dir//Manali+Mart,opposite+Hotel+Park+Paradise,+Aleo,+Bashisht,+Manali,+Himachal+Pradesh+175131",
      buttonText: "Get Directions"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Call Us",
      details: [
        "+91 62303 37333",
        "+91 79471 21545",
        "WhatsApp: +91 62303 35333"
      ],
      action: "tel:+916230337333",
      buttonText: "Call Now"
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-600" />,
      title: "Email Us",
      details: [
        "info@manalimart.co.in",
        "contact@manalimart.co.in",
        "support@manalimart.co.in"
      ],
      action: "mailto:info@manalimart.co.in",
      buttonText: "Send Email"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Store Hours",
      details: [
        "Monday - Sunday",
        "7:00 AM - 10:00 PM",
        "Open all days"
      ],
      action: "#",
      buttonText: "View Schedule"
    }
  ];

  const faqs = [
    {
      question: "Do you provide home delivery?",
      answer: "Currently, we are a walk-in store and do not provide home delivery. However, we are located conveniently at 18 Mile, Manali for easy access."
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
      <Navbar />

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
                  <Link href={info.action}>
                    <Button variant="outline" size="sm" className="w-full">
                      {info.buttonText}
                    </Button>
                  </Link>
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
                        <iframe
                        className='rounded-lg'
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.4133326645697!2d77.19384177439132!3d32.228089911838445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390462a7254c865d%3A0x4da59e7ad0000000!2sMANALI%20MART!5e1!3m2!1sen!2sin!4v1760727110363!5m2!1sen!2sin"
                          width="525"
                          height="260"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Location Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                        <p className="text-gray-600">
                          Manali Mart<br />
                          18 Mile, Manali<br />
                          Himachal Pradesh 175131
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

                      <div>
                        <Link href="https://www.google.com/maps/dir//Manali+Mart,opposite+Hotel+Park+Paradise,+Aleo,+Bashisht,+Manali,+Himachal+Pradesh+175131" target="_blank">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            <Navigation className="h-4 w-4 mr-2" />
                            Get Directions
                          </Button>
                        </Link>
                      </div>
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
            <Link href="tel:+916230337333">
              <Button variant="outline" size="lg" className="border-white text-orange-500 hover:bg-white hover:text-black px-8 py-3">
                Call Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}