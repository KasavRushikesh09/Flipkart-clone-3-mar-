import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Building2,
  Gift,
  HelpCircle,
  Star,
  Shield,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#172337] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/flipkart-stories" className="hover:underline">Flipkart Stories</a></li>
              <li><a href="/press" className="hover:underline">Press</a></li>
              <li><a href="/corporate-information" className="hover:underline">Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">CUSTOMER CARE</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/payments" className="hover:underline">Payments</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping</a></li>
              <li><a href="/cancellation-returns" className="hover:underline">Cancellation & Returns</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/report-infringement" className="hover:underline">Report Infringement</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">POLICY</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/return-policy" className="hover:underline">Return Policy</a></li>
              <li><a href="/terms-of-use" className="hover:underline">Terms Of Use</a></li>
              <li><a href="/security" className="hover:underline">Security</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy</a></li>
              <li><a href="/sitemap" className="hover:underline">Sitemap</a></li>
              <li><a href="/epr-compliance" className="hover:underline">EPR Compliance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">SOCIAL</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Facebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Twitter size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><Instagram size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><Youtube size={20} /></a>
            </div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">Mail Us:</h3>
            <p className="text-sm">
              Flipkart Clone Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm">PAYMENT METHODS</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white p-2 rounded"><CreditCard className="text-[#172337]" size={24} /></div>
            <div className="bg-white p-2 rounded"><Building2 className="text-[#172337]" size={24} /></div>
            <div className="bg-white p-2 rounded"><Gift className="text-[#172337]" size={24} /></div>
            <div className="bg-white p-2 rounded"><Shield className="text-[#172337]" size={24} /></div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Star className="text-yellow-400" size={20} />
            <span className="text-sm">Trusted by millions of customers worldwide</span>
          </div>
          <div className="flex items-center space-x-2">
            <HelpCircle className="text-blue-400" size={20} />
            <span className="text-sm">24/7 Customer Support Available</span>
          </div>
        </div>
      </div>
      <div className="bg-[#0f1a2b] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Flipkart Clone. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Made with ❤️ for learning purposes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;