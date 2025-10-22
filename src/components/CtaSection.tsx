import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Zap, MapPin } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Morocco's Startup Ecosystem: Hidden Opportunities for Growth",
      excerpt: "Discover how Casablanca is becoming Africa's next tech hub and what it means for ambitious entrepreneurs.",
      category: "Market Insights",
      readTime: "5 min read",
      image: "/img/casa1.jpg",
      tag: "🇲🇦 Morocco Focus",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      id: 2,
      title: "Growth Hacking Strategies That Actually Work in 2025",
      excerpt: "Learn the proven tactics elite brands use to achieve 10x growth without burning through their budget.",
      category: "Growth Hacking",
      readTime: "7 min read",
      image: "/img/casa3.jpg",
      tag: "🚀 Trending",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 3,
      title: "From Zero to Market Leader: A Blueprint for Success",
      excerpt: "The exact framework we use to transform struggling brands into industry leaders in less than 12 months.",
      category: "Business Growth",
      readTime: "6 min read",
      image: "/img/casa2.jpg",
      tag: "💡 Strategy",
      gradient: "from-orange-600 to-amber-500"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-[#0a0a0a] to-gray-900 py-8 md:py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"></div>
      
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-3 border border-orange-500/20">
            <TrendingUp className="w-4 h-4" />
            <span>Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Growth Strategies & 
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"> Market Insights</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert knowledge on business growth, marketing excellence, and the evolving Moroccan market landscape
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group relative bg-gradient-to-b from-gray-900/50 to-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:scale-[1.02]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-orange-500/30">
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="text-orange-400 font-semibold">{post.category}</span>
                  <span className="text-gray-600">•</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-orange-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button 
            className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-8 py-6 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(251,146,60,0.4)] hover:shadow-[0_0_50px_rgba(251,146,60,0.7)] hover:scale-105 group"
          >
            <span className="flex items-center gap-2">
              Explore All Insights
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogSection;