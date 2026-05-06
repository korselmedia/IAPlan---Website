import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CALENDLY_URL, TRUST_BADGES } from '@/src/constants';
import { ArrowDown, CheckCircle2, PhoneCall, Zap } from 'lucide-react';

const DashboardMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] bg-slate-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group"
  >
    {/* Dashboard Header */}
    <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <div className="ml-4 px-3 py-1 bg-white/5 rounded text-[10px] text-white/40 font-mono">
        lead-analyzer.ai/dashboard
      </div>
    </div>

    {/* Dashboard Content */}
    <div className="mt-12 p-6 flex flex-col h-full gap-6">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-white/80 text-sm font-semibold">Conversión en Tiempo Real</h4>
          <p className="text-white/40 text-xs mt-1">Últimos 7 días (+24% vs semana anterior)</p>
        </div>
        <div className="flex -space-x-2">
           {[1, 2, 3].map((i) => (
             <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-brand flex items-center justify-center text-[10px] font-bold text-white uppercase">
               u{i}
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold">Leads Procesados</span>
          <div className="text-2xl font-bold text-white mt-1">1,482</div>
        </div>
        <div className="bg-brand/10 rounded-xl p-4 border border-brand/20">
          <span className="text-[10px] text-brand uppercase tracking-wider font-bold text-blue-400">Conversión</span>
          <div className="text-2xl font-bold text-white mt-1">38.4%</div>
        </div>
      </div>

      <div className="flex-1 bg-white/[0.02] rounded-xl border border-white/5 p-4 flex flex-col gap-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-white/80 text-xs font-semibold">Lead Entrante de Meta Ads</span>
          </div>
          <span className="text-white/40 text-[10px]">Hace 12s</span>
        </div>

        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10"
        >
          <div className="bg-brand rounded p-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1">
            <div className="h-2 w-24 bg-white/20 rounded" />
            <div className="h-1.5 w-16 bg-white/10 rounded mt-1.5" />
          </div>
          <div className="text-emerald-400 text-[10px] font-mono font-bold">
            00:47s
          </div>
        </motion.div>

        <div className="text-[10px] text-white/30 italic text-center mt-auto">
          "Agente de IA conectó con éxito. Cita agendada para mañana 10:00 AM"
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand/10 blur-[60px] pointer-events-none" />
      </div>
    </div>
  </motion.div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-brand/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 rounded-full text-brand text-xs font-bold mb-6 tracking-wide uppercase">
                <Zap className="w-3 h-3 fill-current" />
                Conversión Extrema con IA
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-6 text-balance">
                Contactamos tus leads de Facebook Ads en <span className="text-brand">menos de 60 segundos</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl text-balance">
                Mientras tu competencia tarda 47 minutos en llamar, nuestra IA ya cerró la cita. <span className="font-bold text-slate-900">+40% de conversión</span> asegurada sobre tu mismo gasto en ads.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button asChild size="lg" className="bg-brand hover:bg-brand-dark h-14 px-8 text-lg font-bold shadow-xl shadow-brand/20 transition-all hover:scale-105 active:scale-95">
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Reserva tu Auditoría Gratuita
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-14 px-8 text-lg font-semibold text-slate-600 hover:text-brand transition-colors group">
                  <a href="#como-funciona" className="flex items-center gap-2">
                    Ver cómo funciona
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <DashboardMockup />
            {/* Float elements */}
            <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 bg-white p-4 rounded-xl shadow-2xl border border-slate-100 hidden sm:block"
            >
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Citas Hoy</div>
               <div className="text-2xl font-black text-brand">12</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
