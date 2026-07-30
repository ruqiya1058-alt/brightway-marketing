import React, { useState } from 'react';
import { BookOpen, Search, Clock, User, ArrowRight, X, Sparkles, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/agencyData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'SEO Tips', 'Google Ads', 'AI Marketing'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-xs text-[#00C2FF] font-semibold border border-slate-800">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Growth Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Latest Marketing Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Growth Tactics
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Actionable guides written by senior digital marketing strategists to help you scale traffic, conversions, and revenue.
          </p>
        </div>

        {/* Category & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition border ${
                  activeCategory === cat
                    ? 'bg-[#0B63F6] text-white border-blue-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2FF]"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-[10px] font-bold text-[#00C2FF] border border-slate-700">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#18C37E]" /> {post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#00C2FF] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-2.5 bg-slate-950 hover:bg-[#0B63F6] text-white border border-slate-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative space-y-6 shadow-2xl animate-scaleUp">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#0B63F6]/20 border border-[#0B63F6] text-[#00C2FF] font-bold text-xs">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white">{selectedPost.title}</h3>
                <p className="text-xs text-slate-400">By {selectedPost.author} • {selectedPost.date}</p>
              </div>

              <div className="text-xs text-slate-300 whitespace-pre-line leading-relaxed bg-slate-950 p-6 rounded-2xl border border-slate-800 max-h-80 overflow-y-auto">
                {selectedPost.content}
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-[10px] rounded-lg flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#18C37E]" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
