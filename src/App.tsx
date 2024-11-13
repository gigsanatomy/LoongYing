import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialCard from './components/TestimonialCard';
import ContactForm from './components/ContactForm';
import BookingSystem from './components/BookingSystem';
import MapSection from './components/MapSection';
import { testimonials } from './data/testimonials';

function App() {
  const openWhatsApp = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  const openTelegramChannel = () => {
    window.open('https://t.me/YOUR_CHANNEL', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection onWhatsAppClick={openWhatsApp} />
      <BenefitsSection />

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold">BOOK NOW</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Schedule Your Treatment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your preferred date and time for your healing session
            </p>
          </div>
          <BookingSystem />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold">REAL STORIES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Life-Changing Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how Loong Ying Natural Treatment has transformed lives through the power of acupressure
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={openTelegramChannel}
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              See More Success Stories
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <MapSection />

      {/* Contact Form Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 max-w-3xl relative">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Begin Your Healing Journey Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take the first step towards natural wellness with Loong Ying Natural Treatment
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Analytics Scripts */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Facebook Pixel Code
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');

          // TikTok Pixel Code
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
            ttq.load('YOUR_TIKTOK_PIXEL_ID');
            ttq.page();
          }(window, document, 'ttq');

          // Google Analytics Code
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'YOUR_GA_ID', 'auto');
          ga('send', 'pageview');
        `
      }} />
    </div>
  );
}