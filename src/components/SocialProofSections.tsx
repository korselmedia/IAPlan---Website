import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X, Star, Quote, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HowItWorks = () => {
  const steps = [
    { title: "Conectas tu cuenta", desc: "Vinculamos nuestro sistema a tu Business Manager de Meta. No requiere código.", time: "5 min", step: "1" },
    { title: "Desplegamos la IA", desc: "Personalizamos la voz y el tono de tu agente según tu script de ventas.", time: "48h", step: "2" },
    { title: "Recibes citas", desc: "Los leads cualificados aparecen directamente en tu Google Calendar.", time: "Día 3", step: "3" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center mb-16 text-slate-900 tracking-tight">Implementación en tiempo récord</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((item) => (
            <Card key={item.step} className="border-none shadow-lg overflow-hidden transition-all hover:scale-[1.02]">
              <CardContent className="p-0">
                 <div className="bg-brand p-8 text-white">
                    <span className="text-5xl font-black opacity-40">Paso 0{item.step}</span>
                    <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
                 </div>
                 <div className="p-8 bg-white">
                    <p className="text-slate-600 mb-6 font-medium">{item.desc}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-wider">
                       Impacto: {item.time}
                    </div>
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudies = () => {
  const studies = [
    {
      name: "Clínica Dental Madrid",
      metrics: "De 12% a 38% de conversión",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop",
      quote: "El ROI fue inmediato. Recibimos más citas el primer día que en todo el mes anterior."
    },
    {
      name: "Agencia Inmobilaria Levante",
      metrics: "Coste por cita bajó 65%",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
      quote: "La IA filtra a los curiosos. Ahora solo hablamos con gente que realmente quiere comprar."
    },
    {
      name: "SaaS Software Express",
      metrics: "Ventas cerradas +220%",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
      quote: "No sabíamos cuántos leads perdíamos por el camino hasta que empezamos con IAPLAN."
    }
  ];

  return (
    <section className="py-24 bg-white" id="casos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center mb-16 text-slate-900 tracking-tight tracking-widest uppercase text-xs text-brand mb-4 block">Casos de Éxito</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                 <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" referrerPolicy="no-referrer" />
                 <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <div className="flex text-yellow-400 w-3 h-3 gap-0.5">
                       {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="currentColor" />)}
                    </div>
                 </div>
              </div>
              <div className="text-brand font-black text-xl mb-4 leading-tight">"{item.metrics}"</div>
              <p className="text-slate-600 italic leading-relaxed text-sm">
                 <Quote className="w-4 h-4 text-brand inline-block mr-2 rotate-180 opacity-50" />
                 {item.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const VideoTestimonial = () => (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-12">Escucha a un profesional como tú</h2>
            <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop"
                    alt="Testimonio real"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-brand text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand/40 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                </div>
                <div className="absolute bottom-6 left-6 text-left">
                    <div className="text-white font-bold text-xl">Roberto Fernández</div>
                    <div className="text-brand text-sm font-semibold">CEO en Growth Solutions</div>
                </div>
            </div>
            <p className="text-slate-400 mt-8 text-lg font-medium italic">
                \"Implementar IAPLAN fue la mejor decisión estratégica del año. Recuperamos el 100% de la inversión en 3 semanas.\"
            </p>
        </div>
    </section>
);

export const ComparisonTable = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-black text-center mb-16 text-slate-900">¿Cómo nos comparamos?</h2>
      <div className="overflow-x-auto">
        <Table className="border rounded-2xl overflow-hidden shadow-sm">
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[200px] text-slate-900 font-bold p-6">Capacidad</TableHead>
              <TableHead className="text-slate-500 font-medium p-6">SDR Manual</TableHead>
              <TableHead className="text-slate-500 font-medium p-6">Chatbot Genérico</TableHead>
              <TableHead className="bg-brand/5 text-brand font-bold p-6 border-x border-brand/20">IAPLAN</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { cap: "Tiempo Respuesta", sdr: "15-45 min", bot: "Instante", lead: "< 60 s" },
              { cap: "Costo Mensual", sdr: "1.200€ - 2.500€", bot: "99€", lead: "Desde 1.497€" },
              { cap: "Disponibilidad", sdr: "8h / 5 días", bot: "24/7", lead: "24/7" },
              { cap: "Cualificación", sdr: "Alta", bot: "Nula/Baja", lead: "Extrema (Voz + Texto)" },
              { cap: "ROI Promedio", sdr: "2x - 3x", bot: "Desconocido", lead: "6x o superior" },
            ].map((row, i) => (
              <TableRow key={row.cap} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/30"}>
                <TableCell className="font-bold text-slate-900 p-6">{row.cap}</TableCell>
                <TableCell className="text-slate-500 p-6">{row.sdr}</TableCell>
                <TableCell className="text-slate-500 p-6">{row.bot}</TableCell>
                <TableCell className="bg-brand/5 font-bold text-brand p-6 border-x border-brand/20">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    {row.lead}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </section>
);
