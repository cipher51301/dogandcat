import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-50 mt-20 pt-16 pb-8 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-amber-600 flex items-center gap-2 font-sans">
              Paws & Hearts <Heart className="fill-amber-400 text-amber-400" size={24} />
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-xs">
              我們相信每一隻毛小孩都值得擁有一個溫暖的家。來這裡尋找你生命中的快樂夥伴吧！
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-200 hover:scale-110 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-200 hover:scale-110 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold text-gray-800 mb-6">聯絡我們</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                  <Phone size={16} />
                </span>
                02-1234-5678
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                  <Mail size={16} />
                </span>
                hello@pawsandhearts.org
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                  <MapPin size={16} />
                </span>
                台北市毛孩路 100 號
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold text-gray-800 mb-6">開放時間</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between w-full max-w-[200px]">
                <span>平日 (一至五)</span>
                <span className="font-medium text-gray-800">11:00 - 19:00</span>
              </li>
              <li className="flex justify-between w-full max-w-[200px]">
                <span>週末 (六、日)</span>
                <span className="font-medium text-gray-800">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between w-full max-w-[200px]">
                <span>國定假日</span>
                <span className="font-medium text-gray-800">休息</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-200 text-center text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Paws & Hearts Adoption. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-rose-400 fill-rose-400" /> for the animals
          </div>
        </div>
      </div>
    </footer>
  );
}
