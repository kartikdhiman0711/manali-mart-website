"use client";

import WhatsAppNoticeBanner from '@/components/WhatsAppNoticeBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Heart, Mountain, Clock, MapPin, Truck, Shield } from 'lucide-react';
import Link from 'next/link';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';

export default function AboutClient() {
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
      name: "Varun Mahajan",
      role: "Store Owner & Manager",
      image: "https://i.ibb.co/spy1Ftnq/Varun-Mahajan.webp",
      description: "With over 15 years of retail experience, Varun founded Manali Mart with a vision to serve the community."
    },
    {
      name: "Sanjay Thakur",
      role: "General Manager",
      image: "https://i.ibb.co/xK2yhKDH/Sanjay-Thakur.webp",
      description: "Sanjay ensures smooth financial operations and leads HR initiatives to support a productive and motivated workplace."
    },
    {
      name: "Anoop Kumar",
      role: "Customer Service",
      image: "https://i.ibb.co/GByC9rV/Arun-Kumar.webp",
      description: "Anoop helps customers find what they need and provides product information with a friendly smile."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <WhatsAppNoticeBanner />
      <Navbar />

      <FloatingSocialIcons />
        
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader className="flex-shrink-0">
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
                <CardContent className="flex-grow flex items-center justify-center">
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
                  Located in the heart of Manali at 18 Mile, we have witnessed the town&apos;s growth 
                  and have been proud to serve both the local community and the thousands of tourists 
                  who visit our beautiful hill station every year.
                </p>
                <p>
                  Our commitment to quality, customer service, and community support has made us more 
                  than just a store we&apos;re a part of the Manali family. From fresh dairy products 
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
                src="https://i.ibb.co/VWBrLpzD/Store-Outside.webp" 
                alt="Manali mountains and landscape"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Located in</p>
                    <p className="text-sm text-gray-600">18 Mile, Manali, H.P.</p>
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader className="flex-shrink-0">
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
                <CardContent className="flex-grow flex items-center justify-center">
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
            <Link href="https://www.google.com/maps/dir//32.16507, 77.17541" target='_blank'>
              <Button variant="outline" size="lg" className="border-white text-orange-500 hover:bg-white hover:text-black px-8 py-3">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}