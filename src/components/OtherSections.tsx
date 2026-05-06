import React from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FAQS, CALENDLY_URL, WHATSAPP_NUMBER, SITE_NAME, LEGAL_ENTITY, COMPANY_ADDRESS, EIN } from '@/src/constants';
import { Check, MessageCircle, Mail, MapPin, Globe, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Pricing = () => {
  const packs = [
    {
      name: "Pack Starter",
      tagline: "Ideal para pequeñas empresas",
      features: [
        "Respuesta automática vía WhatsApp",
        "Conexión con Meta Ads API",
        "Integración básica con CRM",
        "Setup en menos de 48h",
        "Dashboard semanal de métricas",
        "Soporte vía email certificado"
      ],
      highlight: false
    },
    {
      name: "Pack Business",
      tagline: "El estándar de alta conversión",
      features: [
        "Agente de IA por Llamada + WhatsApp",
        "Cualificación de leads avanzada",
        "Integración nativa con HubSpot/Salesforce",
        "Entrenamiento de voz personalizado",
        "Dashboard en tiempo real",
        "Soporte prioritario por WhatsApp"
      ],
      highlight: true
    },
    {
      name: "Pack Enterprise",
      tagline: "Escala masiva personalizada",
      features: [
        "Infraestructura de IA dedicada",
        "Integraciones API personalizadas",
        "Múltiples agentes concurrentes",
        "Análisis de sentimiento avanzado",
        "Account Manager dedicado",
        "SLA de respuesta garantizado"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-white" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">Soluciones a medida para tu crecimiento</h2>
           <p className="text-slate-600">Selecciona el nivel de automatización que tu negocio necesita para dejar de perder leads.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((pack) => (
            <Card key={pack.name} className={`rounded-[2.5rem] overflow-hidden relative transition-all duration-300 hover:shadow-2xl ${pack.highlight ? 'border-4 border-brand shadow-xl scale-105 z-10' : 'border border-slate-100 shadow-sm'}`}>
              {pack.highlight && (
                <div className="bg-brand text-white text-center py-2 px-4 text-[10px] font-black uppercase tracking-[0.2em]">Más Demandado</div>
              )}
              <CardContent className="p-8 lg:p-10">
                 <h3 className="text-2xl font-bold text-slate-900 mb-1">{pack.name}</h3>
                 <p className="text-slate-500 text-sm mb-8">{pack.tagline}</p>

                 <div className="space-y-4 mb-10">
                    {pack.features.map((item) => (
                      <div key={item} className="flex gap-3 items-start font-medium text-slate-600 group">
                         <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pack.highlight ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'}`}>
                            <Check className="w-3 h-3" />
                         </div>
                         <span className="text-sm leading-tight">{item}</span>
                      </div>
                    ))}
                 </div>

                 <Button asChild variant={pack.highlight ? 'default' : 'outline'} size="lg" className={`w-full h-14 font-bold transition-all ${pack.highlight ? 'bg-brand hover:bg-brand-dark' : 'border-brand text-brand hover:bg-brand/5'}`}>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Consultar Disponibilidad</a>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center mt-12 text-slate-400 text-sm font-medium">
          *Auditamos tu volumen de leads para ofrecerte un presupuesto optimizado a tu ROI.
        </p>
      </div>
    </section>
  );
};

export const FAQ = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-black text-center mb-16 text-slate-900 tracking-tight">Preguntas frecuentes</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-white border border-slate-200 rounded-2xl px-6"
          >
            <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-brand hover:no-underline py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export const FinalCTA = () => (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/40 via-transparent to-brand/20 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                    Cada minuto que esperas,<br />
                    <span className="text-brand">un lead se enfría.</span>
                </h2>
                <p className="text-slate-300 text-xl lg:text-2xl mb-12 max-w-3xl mx-auto">
                    Reserva tu auditoría gratuita hoy y descubre exactamente cuánto dinero estás dejando escapar cada mes por no automatizar tu respuesta.
                </p>
                <Button asChild size="lg" className="h-20 px-12 text-2xl font-black bg-white text-slate-950 hover:bg-slate-100 shadow-2xl shadow-brand/20">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                        RESERVAR MI AUDITORÍA GRATIS
                    </a>
                </Button>
            </motion.div>
        </div>
    </section>
);

export const Footer = () => {
    const year = new Date().getFullYear();
    const columns = [
        {
            title: "Producto",
            links: [
                { name: "Cómo funciona", href: "#como-funciona" },
                { name: "Calculadora ROI", href: "#roi" },
                { name: "Casos de éxito", href: "#casos" },
                { name: "Precios", href: "#precios" }
            ]
        },
        {
            title: "Empresa",
            links: [
                { name: "Sobre nosotros", href: "#" },
                { name: "Carreras", href: "#" },
                { name: "Partners", href: "#" },
                { name: "Prensa", href: "#" }
            ]
        },
        {
            title: "Recursos",
            links: [
                { name: "Blog", href: "#blog" },
                { name: "Newsletter", href: "#" },
                { name: "API Docs", href: "#" },
                { name: "Status", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacidad", href: "#" },
                { name: "Términos", href: "#" },
                { name: "Cookies", href: "#" },
                { name: "RGPD", href: "#" }
            ]
        }
    ];

    return (
        <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900">{SITE_NAME}</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Maximizamos el retorno de tu inversión en Meta Ads mediante agentes de IA de respuesta ultra-rápida.
                        </p>
                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-6">
                            Operado por {LEGAL_ENTITY}<br/>
                            {COMPANY_ADDRESS}<br/>
                            EIN: {EIN}
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-brand hover:border-brand transition-all"><Instagram size={18} /></a>
                            <a href="#" className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-brand hover:border-brand transition-all"><Linkedin size={18} /></a>
                            <a href="#" className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-brand hover:border-brand transition-all"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-slate-500 hover:text-brand text-sm transition-colors">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-slate-400 text-xs">
                        &copy; {year} {LEGAL_ENTITY}. Todos los derechos reservados.
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 opacity-30 grayscale items-center">
                        <span className="text-[10px] font-black uppercase tracking-tighter">Meta Ads Partner</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter">HubSpot Certified</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter">Zapier Expert</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[60] bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all group"
  >
    <MessageCircle className="w-6 h-6 fill-current" />
    <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
       Chatea con nosotros
    </span>
  </a>
);

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  if (!isVisible) return null;
  return (
    <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-8 right-8 md:right-auto md:w-96 z-[60] bg-white border border-slate-200 p-6 rounded-3xl shadow-2xl"
    >
        <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            🍪 Privacidad y Cookies
        </h5>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Utilizamos cookies para mejorar tu experiencia. Al navegar, aceptas el uso de cookies por parte de <strong>{LEGAL_ENTITY}</strong> conforme al RGPD internacional y normativas vigentes.
        </p>
        <div className="flex gap-3">
             <Button size="sm" className="bg-brand flex-1" onClick={() => setIsVisible(false)}>Aceptar todo</Button>
             <Button variant="outline" size="sm" className="flex-1" onClick={() => setIsVisible(false)}>Configurar</Button>
        </div>
    </motion.div>
  );
};
