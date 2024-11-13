import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function HeroSection({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-block animate-bounce-slow">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Transform Your Life Naturally
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Natural Harmony Healing <span className="text-green-300">YSD</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Experience the ancient wisdom of acupressure therapy, reimagined for modern healing. Your journey to wellness begins here.
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={onWhatsAppClick}
                className="group bg-white text-green-700 h-[40px] rounded-lg font-medium flex items-center justify-center gap-1 hover:bg-green-50 transition-all text-sm"
              >
                <MessageCircle className="w-3 h-3" />
                Start Your Healing Journey
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#testimonials" 
                className="text-white border border-white/30 h-[40px] rounded-lg font-medium flex items-center justify-center gap-1 hover:bg-white/10 transition-all text-sm text-center"
              >
                See Success Stories
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                alt="Natural Harmony Healing YSD Treatment"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}