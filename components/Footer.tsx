import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo-footer.png" alt="Website Logo" width={120} height={60} className="w-auto h-16 md:h-20" />
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
              <li><Link href="/products">Dairy & Frozen</Link></li>
              <li><Link href="/products">Grocery & Daily Needs</Link></li>
              <li><Link href="/products">Snacks & Drinks</Link></li>
              <li><Link href="/products">Household Essentials</Link></li>
              <li><Link href="/products">Beauty & Personal Care</Link></li>
              <li><Link href="/products">Pet Food & Accessories</Link></li>
              <li><Link href="/products">Kids Food & Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link target='_blank' href="https://www.google.com/maps/dir//Manali+Mart,opposite+Hotel+Park+Paradise,+Aleo,+Bashisht,+Manali,+Himachal+Pradesh+175131">18 Mile, Manali, H.P.</Link></li>
              <li><Link href="tel:+91 62303 37333">+91 62303 37333</Link></li>
              <li><Link href="mailto:info@manalimart.co.in">info@manalimart.co.in</Link></li>
              <li>7 AM - 10 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Manali Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}