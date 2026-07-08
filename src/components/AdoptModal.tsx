import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Animal } from '../types';
import { X, Heart, Send } from 'lucide-react';

interface AdoptModalProps {
  animal: Animal | null;
  onClose: () => void;
}

export function AdoptModal({ animal, onClose }: AdoptModalProps) {
  if (!animal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col"
        >
          <div className="h-32 bg-gradient-to-br from-amber-200 to-orange-300 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>
            <div className="absolute -bottom-12 left-8 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
              <img src={animal.images[0]} alt={animal.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="pt-16 pb-8 px-8 flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              認養 {animal.name} <Heart className="text-rose-400 fill-rose-400" size={24} />
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              謝謝你願意給 {animal.name} 一個溫暖的家！請留下你的聯絡方式，我們會盡快與你聯繫。
            </p>

            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('感謝您的申請！我們已收到您的資訊。'); onClose(); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                  placeholder="王大明"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">電話</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                  placeholder="0912-345-678"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">想對我們說的話</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all resize-none"
                  placeholder="分享一下你的養寵物經驗，或是為什麼想認養..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                送出申請
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
