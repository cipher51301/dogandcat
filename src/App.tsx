import React, { useState } from 'react';
import { PawPrint, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { animals } from './data';
import { Animal, AnimalType } from './types';
import { AnimalCard } from './components/AnimalCard';
import { AdoptModal } from './components/AdoptModal';
import { Footer } from './components/Footer';

type FilterType = 'All' | AnimalType;

export default function App() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filteredAnimals = animals.filter(
    (animal) => filter === 'All' || animal.type === filter
  );

  return (
    <div className="min-h-screen bg-orange-50/30 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5"
          >
            <div className="bg-amber-100 p-2.5 rounded-2xl text-amber-600">
              <PawPrint size={28} />
            </div>
            <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
              Paws & Hearts
            </h1>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="text-amber-600">尋找夥伴</a>
            <a href="#" className="hover:text-amber-600 transition-colors">認養流程</a>
            <a href="#" className="hover:text-amber-600 transition-colors">關於我們</a>
            <a href="#" className="hover:text-amber-600 transition-colors">常見問題</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 text-center max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-6">
            <Sparkles size={16} />
            遇見你生命中的毛孩
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            讓愛不流浪，給牠們一個 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              溫暖的家 (這是測試網站，請勿點選)
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            在這裡，每一隻貓咪和狗狗都在等待一個愛牠的主人。
            來看看這些可愛的孩子們，或許你的下一個家人就在這裡。
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-amber-100"
        >
          {(['All', 'Dog', 'Cat'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                filter === type ? 'text-white' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {filter === type && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gray-900 rounded-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {type === 'All' ? '全部毛孩' : type === 'Dog' ? '狗狗' : '貓咪'}
              </span>
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAnimals.map((animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
                onAdopt={setSelectedAnimal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🐾</div>
            <h3 className="text-xl font-bold text-gray-800">目前沒有符合的毛孩</h3>
            <p className="text-gray-500 mt-2">請稍後再回來看看！</p>
          </div>
        )}
      </main>

      <Footer />

      {/* Modal */}
      {selectedAnimal && (
        <AdoptModal
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </div>
  );
}
