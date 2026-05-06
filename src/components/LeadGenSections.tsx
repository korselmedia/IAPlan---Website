import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Clock, TrendingDown, Laptop, Phone, MessageSquare, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDLY_URL } from '@/src/constants';

export const LogoCloud = () => {
  const logos = ['Meta', 'HubSpot', 'Salesforce', 'WhatsApp', 'Pipedrive', 'Shopify'];
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
          Empresas que ya no pierden leads
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {logos.map((logo) => (
             <span key={logo} className="text-2xl font-black text-slate-400 hover:text-brand transition-colors cursor-default">
               {logo}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export const ProblemSection = () => {
  const stats = [
    { label: "Leads fríos en 5min", value: "78%", icon: Clock },
    { label: "SDR medio tarda", value: "47min", icon: AlertCircle },
    { label: "Leads convertidos", value: "12%", icon: TrendingDown },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden" id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Cada minuto que esperas, pierdes un cliente</h2>
          <p className="text-slate-400 text-lg">
            La velocidad de contacto es el factor #1 que determina si un lead de Facebook se convierte en venta o si simplemente has tirado el dinero en publicidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-transform hover:-translate-y-2"
            >
              <stat.icon className="w-10 h-10 text-brand mb-6" />
              <div className="text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-brand/20 to-transparent border border-brand/20 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-8">Pagas el 100% de los leads, pero solo aprovechas el 12%</h3>
            <div className="w-full max-w-2xl aspect-video bg-white/5 rounded-xl border border-white/10 relative flex items-end justify-between p-8 gap-4 overflow-hidden">
               {/* Simplified animated chart mocking the dropoff */}
               {[90, 80, 50, 25, 10, 5].map((h, i) => (
                 <motion.div
                   key={i}
                   initial={{ height: 0 }}
                   whileInView={{ height: `${h}%` }}
                   transition={{ delay: i * 0.1, duration: 0.8 }}
                   viewport={{ once: true }}
                   className={`flex-1 rounded-t-lg relative group ${i === 0 ? 'bg-brand' : 'bg-white/10 hover:bg-white/20'}`}
                 >
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold">
                      {i === 0 ? '< 1 min' : `${i * 5} min`}
                   </div>
                 </motion.div>
               ))}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-brand/20 text-9xl font-black -rotate-12 select-none tracking-tighter">
                     DROPOFF
                  </div>
               </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-slate-400 text-sm italic">
               <AlertCircle className="w-4 h-4" />
               Curva de conversión vs Tiempo de respuesta (Fuente: LeadConnect Studio 2024)
            </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 blur-[150px] -z-10" />
    </section>
  );
};

export const SolutionSection = () => {
  const steps = [
    { title: "Lead llega desde Meta", desc: "Capturamos el lead al instante vía API.", icon: Laptop },
    { title: "IA contacta en <60s", desc: "Llamada o WhatsApp personalizado.", icon: Phone },
    { title: "Cualifica al lead", desc: "Filtra interés y presupuesto real.", icon: MessageSquare },
    { title: "Agenda en tu CRM", desc: "Cita confirmada en tu calendario.", icon: Calendar },
  ];

  return (
    <section className="py-24 bg-white" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6">Tu IA comercial trabajando 24/7</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Hemos digitalizado al mejor vendedor del mundo y lo hemos multiplicado por mil. Nunca duerme, nunca se olvida de llamar y nunca se frustra.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block -z-10" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-100 relative group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>

                {/* Step number badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-950 text-white rounded-lg flex items-center justify-center font-bold text-xs ring-4 ring-white">
                  0{i + 1}
                </div>

                {/* Arrow on mobile/tablet */}
                {i < steps.length - 1 && (
                   <div className="lg:hidden mt-8 text-slate-200">
                      <ChevronRight className="w-8 h-8 rotate-90" />
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
            <Button asChild size="lg" className="bg-brand hover:bg-brand-dark">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Quiero este flujo para mi negocio
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
};
