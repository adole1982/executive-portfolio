import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FORMSPREE_URL = "https://formspree.io/f/mojkzgeb";

export const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('sent');
      } else {
        setStatus('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <nav className="p-8">
        <Link to="/" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Overview</span>
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-8 md:pb-12 flex flex-col lg:flex-row gap-12 md:gap-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-4 md:mb-8 leading-tight">
            Connect & <br />
            <span className="italic font-normal text-slate-600">Strategize.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8 md:mb-12 max-w-md leading-relaxed">
            Drawing on 20 years of leadership within Fortune 100 environments to bridge the gap between complex data lifecycles and enterprise-scale AI enablement. From building high-performance analytical teams to translating deep technical architectures for senior executive audiences—let’s define the path forward.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-1">Email</p>
              <p className="text-base md:text-lg font-medium text-slate-900">alexdole@gmail.com</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-1">Location</p>
              <p className="text-base md:text-lg font-medium text-slate-900">Philadelphia / Remote</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pt-52 pt-0">
          {status === 'sent' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 p-12 rounded-3xl border border-slate-100 text-center"
            >
              <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-6" />
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Thank you!</h2>
              <p className="text-slate-600 text-lg">
                Thank you, I will be in touch shortly.
              </p>
            </motion.div>
          ) : (
<form onSubmit={handleSubmit} className="space-y-10 md:space-y-12" method="POST">
  {/* 1. SECURE HONEYPOT: Invisible to humans, catches bots */}
  <input type="text" name="_gotcha" style={{ display: 'none' }} />

  <div className="space-y-8">
    <div className="relative group">
      <input 
        type="text" 
        name="full-name"
        required 
        placeholder=" "
        className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-slate-900 transition-colors peer"
      />
      <label className="absolute left-0 top-4 text-slate-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-slate-900 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
        Full Name
      </label>
    </div>

    <div className="relative group">
      <input 
        type="text" 
        name="company"
        required 
        placeholder=" "
        className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-slate-900 transition-colors peer"
      />
      <label className="absolute left-0 top-4 text-slate-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-slate-900 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
        Company
      </label>
    </div>

    {/* 2. EMAIL VALIDATION: 'type="email"' catches missing @ or bad domains */}
    <div className="relative group">
      <input 
        type="email" 
        name="email"
        required 
        placeholder=" "
        className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-slate-900 transition-colors peer"
      />
      <label className="absolute left-0 top-4 text-slate-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-slate-900 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
        Email Address
      </label>
    </div>

    <div className="relative group">
      <textarea 
        name="message"
        required 
        rows={4}
        placeholder=" "
        className="w-full bg-transparent border-b border-slate-200 py-4 outline-none focus:border-slate-900 transition-colors peer resize-none"
      />
      <label className="absolute left-0 top-4 text-slate-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-slate-900 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
        Strategy Inquiry
      </label>
    </div>
  </div>

  <button 
    type="submit"
    disabled={status !== 'idle'}
    className="btn-apple w-full flex items-center justify-center gap-2 h-16 text-lg"
  >
    {status === 'idle' && (
      <>
        <span>Send Inquiry</span>
        <Send size={20} />
      </>
    )}
    {status === 'sending' && (
      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    )}
  </button>
</form>
          )}
        </div>
      </main>

      {/* Philadelphia Background Graphic - Positioned at the bottom of the page flow */}
      <div className="w-full h-[20vh] md:h-[30vh] pointer-events-none opacity-50 flex items-end justify-center mt-8 md:mt-12 mb-8">
        <img 
          src="/logos/philadelphia.png" 
          alt="" 
          className="w-full h-full object-contain object-bottom grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  );
};
