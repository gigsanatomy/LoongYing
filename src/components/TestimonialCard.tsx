import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface TestimonialProps {
  name: string;
  videoUrl: string;
  testimonial: string;
  thumbnail: string;
}

export default function TestimonialCard({ name, videoUrl, testimonial, thumbnail }: TestimonialProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
        <div 
          className="relative group cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          <img 
            src={thumbnail} 
            alt={`${name}'s testimonial`} 
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-center justify-center rounded-t-lg">
            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <h3 className="font-semibold text-lg">{name}</h3>
          </div>
          <p className="text-gray-600 line-clamp-3">{testimonial}</p>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl.replace('watch?v=', 'embed/')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}