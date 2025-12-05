import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, CircleAlert as AlertCircle, Clock, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read Manali Mart terms and conditions for using our services and shopping at our store. Store policies, returns, and customer guidelines. Updated November 2025.',
  keywords: 'terms and conditions, Manali Mart policies, store terms, return policy',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://manalimart.co.in/terms',
  },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <FileText className="h-16 w-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>1. Introduction</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Manali Mart. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Manali Mart is a retail store located at 18 Mile, Manali Himachal Pradesh 175131, India, providing grocery, household, and daily essential products to our customers.
                </p>
              </CardContent>
            </Card>

            {/* Store Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  <span>2. Store Information & Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2.1 Store Operations</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>We are a physical retail store operating from 18 Miles, Manali</li>
                    <li>Store hours: 08:00 AM to 09:00 PM, Monday through Sunday</li>
                    <li>We currently operate as a walk-in store and do not provide home delivery services</li>
                    <li>This website serves as an information portal about our products and services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2.2 Product Information</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Product images are for representation purposes only</li>
                    <li>Actual product packaging may differ based on current stock</li>
                    <li>Prices displayed are subject to change without prior notice</li>
                    <li>Product availability is subject to stock levels at our physical store</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Website Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>3. Website Usage</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.1 Permitted Use</h4>
                  <p className="text-gray-700 leading-relaxed">
                    You may use our website to browse product information, learn about our store, and contact us for inquiries. The website is intended for informational purposes and to facilitate in-store visits.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.2 Prohibited Activities</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Using the website for any unlawful purpose</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Interfering with the website's functionality</li>
                    <li>Copying or reproducing content without permission</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Purchases and Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span>4. Purchases and Payments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.1 In-Store Purchases</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>All purchases must be made at our physical store location</li>
                    <li>We accept cash, UPI payments, debit cards, and credit cards</li>
                    <li>Prices are inclusive of applicable taxes</li>
                    <li>Receipt will be provided for all purchases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4.2 Returns and Exchanges</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Returns accepted within 7 days of purchase with valid receipt</li>
                    <li>Products must be unopened and in original condition</li>
                    <li>Perishable items cannot be returned</li>
                    <li>Exchange subject to product availability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Liability and Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>5. Liability and Disclaimers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.1 Product Quality</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We strive to provide high-quality products and maintain proper storage conditions. However, we cannot guarantee the suitability of products for specific purposes beyond their intended use.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5.2 Website Information</h4>
                  <p className="text-gray-700 leading-relaxed">
                    While we make every effort to ensure accuracy, we do not guarantee that all information on our website is complete, accurate, or up-to-date. Product availability and prices may vary.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span>6. Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">+91 62303 37333</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">info@manalimart.co.in</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-gray-600 mt-0.5" />
                        <span className="text-gray-700">Behind Bran School 17-18 Miles, Manali Distt Kullu HP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span>7. Changes to Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                  immediately upon posting on our website. Your continued use of our services after any changes 
                  constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}