import React from 'react';
import { Star, Users, Activity, Heart, Brain, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "100% Natural & Safe",
    description: "Experience healing without medications or invasive procedures"
  },
  {
    icon: Heart,
    title: "Holistic Healing",
    description: "Treating both body and mind for complete wellness"
  },
  {
    icon: Users,
    title: "Expert Care",
    description: "Years of experience in traditional healing methods"
  },
  {
    icon: Brain,
    title: "Stress Relief",
    description: "Natural techniques for mental peace and clarity"
  },
  {
    icon: Activity,
    title: "Proven Results",
    description: "Thousands of successful healing journeys"
  },
  {
    icon: Star,
    title: "Personalized Care",
    description: "Treatment plans tailored to your needs"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/0"></div>
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Natural Harmony Healing?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unique YSD approach combines ancient acupressure wisdom with modern healing techniques
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}