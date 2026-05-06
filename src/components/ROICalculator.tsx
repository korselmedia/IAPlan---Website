import React, { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'motion/react';
import { TrendingUp, DollarSign } from 'lucide-react';
import { CALENDLY_URL } from '@/src/constants';

export const ROICalculator = () => {
  const [adSpend, setAdSpend] = useState(2000);
  const [leadsPerMonth, setLeadsPerMonth] = useState(100);
  const [currentConv, setCurrentConv] = useState(12);

  const stats = useMemo(() => {
    const costPerLead = adSpend / leadsPerMonth;
    const currentSales = (leadsPerMonth * currentConv) / 100;
    const targetConv = currentConv * 1.4; // 40% increase
    const targetSales = (leadsPerMonth * targetConv) / 100;

    // Assuming average ticket value of 1500€
    const ticketValue = 1500;
    const currentRevenue = currentSales * ticketValue;
    const targetRevenue = targetSales * ticketValue;
    const moneyLeftOnTable = targetRevenue - currentRevenue;

    return {
      currentRevenue,
      targetRevenue,
      moneyLeftOnTable,
      potentialIncrease: targetSales - currentSales
    };
  }, [adSpend, leadsPerMonth, currentConv]);

  const chartData = [
    { name: 'Actual', value: stats.currentRevenue },
    { name: 'Con IA', value: stats.targetRevenue },
  ];

  return (
    <section className="py-24 bg-slate-50" id="roi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Calcula cuánto dinero estás perdiendo
          </h2>
          <p className="text-slate-600 text-lg">
            La lentitud en el seguimiento es el mayor "impuesto silencioso" de tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="border-none shadow-2xl p-8 rounded-3xl">
            <CardContent className="p-0 space-y-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900 uppercase tracking-wider">
                  <span>Inversión Mensual en Ads</span>
                  <span className="text-brand text-lg">{adSpend.toLocaleString()}€</span>
                </div>
                <Slider
                  value={[adSpend]}
                  onValueChange={(v) => setAdSpend(v[0])}
                  max={10000}
                  step={100}
                  className="[&_[role=slider]]:bg-brand"
                />
              </div>

              <div className="space-y-6">
                 <div className="flex justify-between items-center text-sm font-bold text-slate-900 uppercase tracking-wider">
                  <span>Leads por mes</span>
                  <span className="text-brand text-lg">{leadsPerMonth}</span>
                </div>
                <Slider
                  value={[leadsPerMonth]}
                  onValueChange={(v) => setLeadsPerMonth(v[0])}
                  max={500}
                  step={5}
                />
              </div>

              <div className="space-y-6">
                 <div className="flex justify-between items-center text-sm font-bold text-slate-900 uppercase tracking-wider">
                  <span>Tasa actual de conversión (%)</span>
                  <span className="text-brand text-lg">{currentConv}%</span>
                </div>
                <Slider
                  value={[currentConv]}
                  onValueChange={(v) => setCurrentConv(v[0])}
                  max={50}
                  step={1}
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <motion.div
              layout
              className="bg-brand text-white p-10 rounded-3xl shadow-xl shadow-brand/20 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-white/80 font-bold uppercase tracking-[0.15em] text-xs mb-4">
                   <TrendingUp className="w-4 h-4" />
                   Resultados Estimados
                </div>
                <div className="text-sm font-medium mb-1 opacity-80">Estás dejando en la mesa cada mes:</div>
                <motion.div
                  key={stats.moneyLeftOnTable}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter"
                >
                  {Math.round(stats.moneyLeftOnTable).toLocaleString()}€
                </motion.div>
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 inline-flex items-center gap-3">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                   </div>
                   <div className="text-sm font-semibold">
                      Con nosotros recuperarías {Math.round(stats.targetRevenue).toLocaleString()}€/mes
                   </div>
                </div>
              </div>

              {/* Background accent */}
              <div className="absolute -bottom-12 -right-12 text-[200px] font-black text-white/5 select-none leading-none pointer-events-none">
                ROI
              </div>
            </motion.div>

            <div className="h-[250px] w-full bg-white rounded-3xl p-6 border border-slate-100 shadow-xl">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`${value.toLocaleString()}€`, 'Ingresos']}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#CBD5E1' : '#2563EB'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <Button asChild size="lg" className="w-full h-16 text-xl font-bold bg-brand hover:bg-brand-dark transition-all hover:scale-[1.02] active:scale-95">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Quiero recuperar ese dinero
                </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
