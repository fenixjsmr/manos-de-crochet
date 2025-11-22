import React, { useState } from 'react';
import { 
  PieChart, TrendingUp, Shield, Users, DollarSign, 
  Target, BookOpen, AlertTriangle, CheckCircle, Menu, X, 
  Briefcase, Calculator, Scale, Globe, ShoppingBag, FileText, Landmark, Calendar, BarChart
} from 'lucide-react';

// --- COMPONENTS ---

// 1. DASHBOARD HOME
const DashboardHome = ({ navigate }) => (
  <div className="p-6 md:p-10 space-y-8 animate-fade-in">
    <div className="text-center space-y-4 mb-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight">
        MDC <span className="text-teal-600">ACADEMY</span>
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl mx-auto">
        Plan Estratégico de Negocio 2025-2029
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-bold shadow-sm">
          🚀 Validación: Año 1
        </span>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold shadow-sm">
          ⚖️ Modelo: SAS + RST
        </span>
        <span className="px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-bold shadow-sm">
          📈 Meta: Escalamiento
        </span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div onClick={() => navigate('financial')} className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-teal-500 cursor-pointer hover:translate-y-1 transition-all group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-100 transition-colors">
            <TrendingUp className="w-8 h-8 text-teal-600" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">Proyección</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Modelo Financiero</h3>
        <p className="text-slate-500 text-sm">Escenario Base vs Optimista, Calendario de Ventas y Desglose de Costos.</p>
      </div>

      <div onClick={() => navigate('partnership')} className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-rose-500 cursor-pointer hover:translate-y-1 transition-all group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-rose-50 rounded-xl group-hover:bg-rose-100 transition-colors">
            <Users className="w-8 h-8 text-rose-600" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">Estructura</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Socios & Roles</h3>
        <p className="text-slate-500 text-sm">Propuesta de asociación 60/40, distribución de funciones y el MOU.</p>
      </div>

      <div onClick={() => navigate('legal')} className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-blue-500 cursor-pointer hover:translate-y-1 transition-all group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
            <Scale className="w-8 h-8 text-blue-600" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">Fiscal</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Legal & Impuestos</h3>
        <p className="text-slate-500 text-sm">Costos de constitución SAS, Ley 1780 y estrategia RST.</p>
      </div>
    </div>
    
    <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
       <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
       <div className="relative z-10 max-w-3xl">
         <h2 className="text-3xl font-bold mb-4">La Oportunidad de Mercado</h2>
         <p className="text-slate-300 text-lg mb-6">
           Transformar una audiencia orgánica de <span className="text-teal-400 font-bold">641k seguidores</span> en una empresa de educación digital rentable, aprovechando la ingeniería de patrones y el posicionamiento premium.
         </p>
         <button onClick={() => navigate('validation')} className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-3 px-8 rounded-full transition-colors">
           Ver Diagnóstico de Validación
         </button>
       </div>
    </div>
  </div>
);

// 2. FINANCIAL MODEL
const FinancialModel = () => (
  <div className="p-6 md:p-10 space-y-12 animate-fade-in">
    
    {/* HEADER & SUMMARY */}
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Modelo Financiero Maestro</h2>
          <p className="text-slate-500">Proyección Detallada 2025-2029</p>
        </div>
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-bold flex items-center">
          <CheckCircle className="w-4 h-4 mr-2"/> Rentable desde Año 1
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Ventas Año 1", val: "850 Und", sub: "Validación", color: "bg-blue-50 text-blue-700" },
          { label: "Ingresos Año 2", val: "$122.5 M", sub: "Escalamiento Ads", color: "bg-teal-50 text-teal-700" },
          { label: "Margen Neto", val: "~66%", sub: "Promedio 5 Años", color: "bg-emerald-50 text-emerald-700" },
          { label: "Conversión", val: "1.03%", sub: "Escenario Base", color: "bg-purple-50 text-purple-700" },
        ].map((item, idx) => (
          <div key={idx} className={`p-4 rounded-xl border border-slate-100 ${item.color}`}>
            <p className="text-xs uppercase font-bold opacity-70 mb-1">{item.label}</p>
            <p className="text-2xl font-extrabold">{item.val}</p>
            <p className="text-xs opacity-80 mt-1">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>

    {/* MAIN TABLE (CONSERVATIVE) */}
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
           <Shield className="w-5 h-5 text-teal-600"/> Escenario Base (Conservador)
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-4 text-left sticky left-0 bg-slate-800 z-10">RUBRO (Millones COP)</th>
              <th className="p-4 min-w-[100px]">AÑO 1<br/><span className="text-xs font-normal text-slate-400">Validación</span></th>
              <th className="p-4 min-w-[100px]">AÑO 2<br/><span className="text-xs font-normal text-slate-400">Escala</span></th>
              <th className="p-4 min-w-[100px]">AÑO 3<br/><span className="text-xs font-normal text-slate-400">Crecimiento</span></th>
              <th className="p-4 min-w-[100px]">AÑO 4<br/><span className="text-xs font-normal text-slate-400">Madurez</span></th>
              <th className="p-4 min-w-[100px]">AÑO 5<br/><span className="text-xs font-normal text-slate-400">Imperio</span></th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="bg-slate-50 font-bold text-xs uppercase tracking-wider text-left text-slate-500">
              <td colSpan="6" className="p-2 px-4">Ingresos Operativos</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50">
              <td className="p-3 text-left font-medium text-slate-900 sticky left-0 bg-white">Total Ventas (Unidades)</td>
              <td className="p-3">850</td>
              <td className="p-3 font-bold text-teal-600">1,911</td>
              <td className="p-3">2,580</td>
              <td className="p-3">3,133</td>
              <td className="p-3">3,700</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50 font-bold bg-blue-50/30">
              <td className="p-3 text-left text-blue-900 sticky left-0 bg-blue-50/30">(+) VENTAS BRUTAS ($)</td>
              <td className="p-3">$51.4</td>
              <td className="p-3">$122.5</td>
              <td className="p-3">$175.4</td>
              <td className="p-3">$225.6</td>
              <td className="p-3">$282.7</td>
            </tr>
            <tr className="border-b border-slate-100 text-rose-500 text-xs">
              <td className="p-2 text-left sticky left-0 bg-white">(-) Descuentos & Promos</td>
              <td className="p-2">($9.2)</td>
              <td className="p-2">($22.0)</td>
              <td className="p-2">($31.5)</td>
              <td className="p-2">($40.6)</td>
              <td className="p-2">($50.8)</td>
            </tr>
            <tr className="bg-slate-50 font-bold text-xs uppercase tracking-wider text-left text-slate-500">
              <td colSpan="6" className="p-2 px-4">Egresos y Costos</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50 text-xs">
              <td className="p-2 text-left sticky left-0 bg-white">Comisión Wompi (~4.6%)</td>
              <td className="p-2">($1.9)</td>
              <td className="p-2">($4.6)</td>
              <td className="p-2">($6.6)</td>
              <td className="p-2">($8.5)</td>
              <td className="p-2">($10.6)</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50 text-xs">
              <td className="p-2 text-left sticky left-0 bg-white">Impuesto RST (7.3%)</td>
              <td className="p-2">($3.1)</td>
              <td className="p-2">($7.3)</td>
              <td className="p-2">($10.5)</td>
              <td className="p-2">($13.5)</td>
              <td className="p-2">($16.9)</td>
            </tr>
             <tr className="border-b border-slate-100 hover:bg-slate-50 text-xs bg-rose-50/30 text-rose-700 font-medium">
              <td className="p-2 text-left sticky left-0 bg-rose-50/30">Seguridad Social (2 Socios)</td>
              <td className="p-2">($10.1)</td>
              <td className="p-2">($10.7)</td>
              <td className="p-2">($11.3)</td>
              <td className="p-2">($12.0)</td>
              <td className="p-2">($12.7)</td>
            </tr>
             <tr className="border-b border-slate-100 hover:bg-slate-50 text-xs text-amber-600">
              <td className="p-2 text-left sticky left-0 bg-white">Reinversión en Ads</td>
              <td className="p-2">$0</td>
              <td className="p-2">($4.9)</td>
              <td className="p-2">($13.4)</td>
              <td className="p-2">($19.0)</td>
              <td className="p-2">($24.7)</td>
            </tr>
            <tr className="bg-slate-900 text-white font-bold text-lg">
              <td className="p-4 text-left sticky left-0 bg-slate-900 text-teal-400">UTILIDAD NETA</td>
              <td className="p-4">$24.5</td>
              <td className="p-4">$66.8</td>
              <td className="p-4">$94.8</td>
              <td className="p-4">$123.4</td>
              <td className="p-4">$156.5</td>
            </tr>
            <tr className="bg-slate-800 text-slate-400 font-bold text-xs">
              <td className="p-2 text-left sticky left-0 bg-slate-800">% Margen Neto</td>
              <td className="p-2">58%</td>
              <td className="p-2">66%</td>
              <td className="p-2">66%</td>
              <td className="p-2">67%</td>
              <td className="p-2">68%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* DETAILED COST BREAKDOWN */}
    <section>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600"/> 3. Desglose de Gastos Operativos Reales
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
            {/* Security Social */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-2">
                    <h4 className="font-bold text-slate-700">🏥 Seguridad Social</h4>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">Obligatorio</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex justify-between"><span>Base (1 SMMLV)</span> <span>$1.423.500</span></li>
                    <li className="flex justify-between"><span>Salud (12.5%)</span> <span>$178.000</span></li>
                    <li className="flex justify-between"><span>Pensión (16%)</span> <span>$228.000</span></li>
                    <li className="pt-2 border-t border-dashed border-slate-200 flex justify-between font-bold text-slate-800">
                        <span>Total x Socio</span> <span>$421k/mes</span>
                    </li>
                    <li className="flex justify-between font-bold text-blue-600">
                        <span>Total (2 Socios)</span> <span>$842k/mes</span>
                    </li>
                </ul>
            </div>

            {/* Accountant */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-2">
                    <h4 className="font-bold text-slate-700">⚖️ Contador</h4>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">Escalonado</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex justify-between items-center">
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded">Año 1</span>
                        <span className="font-bold text-slate-800">$800.000</span>
                    </li>
                    <p className="text-xs text-slate-400 mb-2">Pago único anual por declaración (Validación).</p>
                    <li className="flex justify-between items-center border-t border-dashed border-slate-200 pt-2">
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded">Año 2+</span>
                        <span className="font-bold text-slate-800">$3.6 M/año</span>
                    </li>
                    <p className="text-xs text-slate-400">Mensualidad de $300k (Escalamiento).</p>
                </ul>
            </div>

            {/* Platform */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-2">
                    <h4 className="font-bold text-slate-700">💻 Plataforma Web</h4>
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">Anual</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex justify-between"><span>Hosting + Dominio</span> <span>$570k</span></li>
                    <li className="flex justify-between"><span>Plugins (PDF/Seguridad)</span> <span>$440k</span></li>
                    <li className="flex justify-between"><span>Certificado SSL</span> <span>$270k</span></li>
                    <li className="pt-2 border-t border-dashed border-slate-200 flex justify-between font-bold text-purple-700">
                        <span>Total Anual</span> <span>~$1.28 M</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    {/* CALENDAR & GROWTH ANALYSIS */}
    <section className="grid md:grid-cols-12 gap-8">
        {/* Calendar */}
        <div className="md:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-rose-500"/> Calendario "Francotirador"
            </h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border-l-4 border-blue-400">
                    <div>
                        <div className="font-bold text-slate-700 text-sm">Q1 (Enero) • Resolución Año Nuevo</div>
                        <div className="text-xs text-slate-500">Curso Principiante (+ Patrones Básicos)</div>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-blue-600">20% OFF</div>
                        <div className="text-[10px] text-slate-400">7 Días</div>
                    </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border-l-4 border-amber-400">
                    <div>
                        <div className="font-bold text-slate-700 text-sm">Q2 (Mayo) • Día de la Madre</div>
                        <div className="text-xs text-slate-500">Packs de Patrones (Regalos)</div>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-amber-600">15% OFF</div>
                        <div className="text-[10px] text-slate-400">3 Días</div>
                    </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border-l-4 border-purple-400">
                    <div>
                        <div className="font-bold text-slate-700 text-sm">Q3 (Agosto) • Upsell Alumnos</div>
                        <div className="text-xs text-slate-500">Curso Intermedio (Solo Email)</div>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-purple-600">10% OFF</div>
                        <div className="text-[10px] text-slate-400">48 Horas</div>
                    </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border-l-4 border-rose-500">
                    <div>
                        <div className="font-bold text-white text-sm">Q4 (Noviembre) • Black Friday</div>
                        <div className="text-xs text-slate-400">Catálogo Completo</div>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-rose-400">35% OFF</div>
                        <div className="text-[10px] text-slate-400">5 Días</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Growth Analysis */}
        <div className="md:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-teal-600"/> Análisis de Crecimiento
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                La tasa de conversión del Año 2 <strong>(1.05%)</strong> se mantiene estable y conservadora porque es un promedio ponderado:
            </p>
            
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>Audiencia Nueva (Ads) - Tráfico Frío</span>
                        <span>0.8%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-400 h-full w-[30%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>Audiencia Vieja (Email) - Tráfico Caliente</span>
                        <span>3.0%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-full w-[80%]"></div>
                    </div>
                </div>
            </div>

            <div className="mt-6 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 text-center">
                    <strong>Veredicto:</strong> Estamos en el límite inferior seguro. El riesgo de no cumplir es mínimo.
                </p>
            </div>
        </div>
    </section>

    {/* OPTIMISTIC SCENARIO */}
    <section className="bg-purple-50 rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden">
        <div className="p-6 bg-purple-100 border-b border-purple-200">
            <h3 className="font-bold text-purple-900 flex items-center gap-2 text-xl">
                <TrendingUp className="w-6 h-6 text-purple-700"/> Escenario Optimista (Ajustado)
            </h3>
            <p className="text-purple-700 text-sm mt-1">¿Qué pasa si logramos una conversión del <strong>3.0%</strong> (Estándar Alto)?</p>
        </div>
        
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
                <thead className="bg-purple-900 text-white">
                    <tr>
                        <th className="p-4 text-left">CONCEPTO</th>
                        <th className="p-4">AÑO 1 🚀</th>
                        <th className="p-4">AÑO 2 🌟</th>
                        <th className="p-4">AÑO 3 🏰</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    <tr className="bg-purple-50 font-bold text-xs uppercase tracking-wider text-left text-purple-800">
                        <td colSpan="4" className="p-2 px-4">Tráfico y Ventas</td>
                    </tr>
                    <tr className="border-b border-purple-200">
                        <td className="p-3 text-left font-medium">Ventas Orgánicas</td>
                        <td className="p-3">1,230 <span className="text-[10px] text-purple-600">(1.5%)</span></td>
                        <td className="p-3">2,710 <span className="text-[10px] text-purple-600">(3.0%)</span></td>
                        <td className="p-3">2,980 <span className="text-[10px] text-purple-600">(3.0%)</span></td>
                    </tr>
                     <tr className="border-b border-purple-200">
                        <td className="p-3 text-left font-medium">Ventas Ads</td>
                        <td className="p-3">0</td>
                        <td className="p-3">1,400</td>
                        <td className="p-3">2,060</td>
                    </tr>
                    <tr className="border-b border-purple-200 bg-purple-100/50 font-bold">
                        <td className="p-3 text-left text-purple-900">(+) INGRESOS NETOS</td>
                        <td className="p-3">$61.0 M</td>
                        <td className="p-3">$216.0 M</td>
                        <td className="p-3">$281.0 M</td>
                    </tr>
                    
                    <tr className="bg-purple-50 font-bold text-xs uppercase tracking-wider text-left text-purple-800">
                        <td colSpan="4" className="p-2 px-4">Egresos Clave</td>
                    </tr>
                    <tr className="border-b border-purple-200 text-rose-600 text-xs">
                        <td className="p-2 text-left">Costos Directos + Ads</td>
                        <td className="p-2">($7.3 M)</td>
                        <td className="p-2">($33.9 M)</td>
                        <td className="p-2">($66.4 M)</td>
                    </tr>
                    <tr className="border-b border-purple-200 text-rose-600 text-xs">
                        <td className="p-2 text-left">Contador + Seg. Social</td>
                        <td className="p-2">($10.9 M)</td>
                        <td className="p-2">($14.3 M)</td>
                        <td className="p-2">($15.1 M)</td>
                    </tr>

                    <tr className="bg-purple-800 text-white font-bold text-lg">
                        <td className="p-4 text-left">UTILIDAD NETA OPTIMISTA</td>
                        <td className="p-4">$41.0 M</td>
                        <td className="p-4">$165.2 M</td>
                        <td className="p-4">$195.7 M</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className="p-4 bg-purple-100 text-purple-800 text-xs text-center">
            <strong>Herramientas clave:</strong> Funnels de venta "Tripwire" inmediatos y Webinars grabados para vender en automático.
        </div>
    </section>

  </div>
);

// 3. PARTNERSHIP STRATEGY
const PartnershipStrategy = () => (
  <div className="p-6 md:p-10 space-y-8 animate-fade-in">
    <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Propuesta de Asociación</h2>
        <p className="text-slate-500">Estructura Societaria y Distribución de Valor</p>
    </div>

    {/* Fase 1: Constitución & Estructura */}
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border-l-8 border-rose-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-full opacity-50 z-0"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Briefcase className="text-rose-500 w-8 h-8" />
              Fase 1: Constitución & Estructura
            </h2>
            <p className="text-slate-500 mt-1 font-medium">Formalidad inmediata desde el Día 1</p>
          </div>
          <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-xs font-bold border border-rose-200">
            ESTRATEGIA PRIORITARIA
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Landmark className="text-blue-500 w-5 h-5"/> Constitución SAS
            </h3>
            <p className="text-slate-600 mb-2">
              Creamos la <strong>SAS inmediatamente</strong>. Es la mejor opción para proteger el patrimonio personal y facilitar trámites bancarios.
            </p>
          </div>
          <div className="bg-rose-50 p-5 rounded-xl border border-rose-100 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
               <FileText className="text-rose-500 w-5 h-5"/> Memorando (MOU)
            </h3>
            <p className="text-slate-700 mb-2">
              <strong>¿Qué es?</strong> Es nuestro "Acuerdo de Socios" privado. Define las reglas del juego, roles y valores morales que la ley no cubre.
            </p>
            <div className="bg-white p-2 rounded text-xs text-rose-600 italic font-medium border border-rose-200 text-center">
              "El manual de convivencia de la sociedad."
            </div>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
               <CheckCircle className="text-green-500 w-5 h-5"/> Resultado
            </h3>
            <p className="text-slate-600">
              Operamos legalmente desde el inicio, evitando reprocesos futuros y generando confianza inmediata en clientes y proveedores.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-12 gap-8">
        {/* The Split */}
        <div className="md:col-span-5 bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden border-t-8 border-slate-800 h-full">
             <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                <PieChart className="w-6 h-6 text-teal-600" />
                Participación (Split)
            </h3>
            
            <div className="space-y-8">
                <div>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                        <span>Estefany (Creadora & Contenido)</span>
                        <span className="text-rose-500">60%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-6 overflow-hidden relative shadow-inner">
                         <div className="absolute top-0 left-0 h-full bg-rose-500 w-[60%] rounded-full shadow-lg"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Talento, Audiencia (641k), Producto.</p>
                </div>
                 <div>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                        <span>Gece (Estrategia & Tech)</span>
                        <span className="text-teal-600">40%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-6 overflow-hidden relative shadow-inner">
                         <div className="absolute top-0 left-0 h-full bg-teal-600 w-[40%] rounded-full shadow-lg"></div>
                    </div>
                     <p className="text-xs text-slate-500 mt-2">Capital Inicial, Operaciones, Tecnología, Legal.</p>
                </div>
            </div>
        </div>

        {/* Roles & Timeline */}
        <div className="md:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow text-rose-500 font-bold">E</div>
                    <h4 className="font-bold text-rose-900 mb-2">Rol Estefany</h4>
                    <ul className="text-sm text-rose-800 space-y-1 list-disc list-inside">
                        <li>Dirección de Contenido.</li>
                        <li>Gestión de Comunidad.</li>
                        <li>Diseño de Patrones y Cursos.</li>
                    </ul>
                 </div>
                 <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow text-teal-600 font-bold">G</div>
                    <h4 className="font-bold text-teal-900 mb-2">Rol Gece</h4>
                    <ul className="text-sm text-teal-800 space-y-1 list-disc list-inside">
                        <li>Arquitectura de Negocio.</li>
                        <li>Plataforma Tecnológica.</li>
                        <li>Gestión Fiscal y Ads.</li>
                    </ul>
                 </div>
            </div>

             <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-4">Estrategia Financiera (Bootstrap)</h4>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 border-l-2 border-green-500 pl-4">
                            <div className="text-green-400 font-bold text-sm">AÑO 1</div>
                            <div className="font-bold text-xl mb-1">Validación Orgánica</div>
                            <div className="text-xs text-slate-400">Gasto en Ads: $0. Todo se basa en la audiencia actual para generar caja inicial.</div>
                        </div>
                        <div className="flex-1 border-l-2 border-blue-500 pl-4">
                            <div className="text-blue-400 font-bold text-sm">AÑO 2</div>
                            <div className="font-bold text-xl mb-1">Escalamiento</div>
                            <div className="text-xs text-slate-400">Se reinvierte el 20% de la utilidad del Año 1 para traer tráfico pago.</div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  </div>
);

// 4. VALIDATION STRATEGY
const ValidationStrategy = () => (
  <div className="p-6 md:p-10 space-y-8 animate-fade-in">
      <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Diagnóstico de Validación</h2>
          <p className="text-slate-500">¿Es posible vender 850 unidades el primer año?</p>
      </div>

      {/* Audience Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
              { icon: "fab fa-youtube", color: "text-red-600", val: "269K", label: "YouTube (Educador)" },
              { icon: "fab fa-facebook", color: "text-blue-600", val: "192K", label: "Facebook (Comunidad)" },
              { icon: "fab fa-instagram", color: "text-pink-600", val: "128K", label: "Instagram (Vitrina)" },
              { icon: "fab fa-tiktok", color: "text-black", val: "52K", label: "TikTok (Imán)" },
          ].map((s, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                  <div className={`text-2xl font-bold ${s.color} mb-1`}>{s.val}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase">{s.label}</div>
              </div>
          ))}
      </div>

      {/* Funnel Section (Embudo de la Realidad) */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
          <h3 className="font-bold text-slate-700 mb-6 text-center uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5 text-teal-600"/> 2. El Embudo de la Realidad
          </h3>
          
          {/* Math Breakdown */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-700 mb-4 border-b border-slate-200 pb-2">Cálculo de Audiencia Activa</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex justify-between">
                        <span><strong>YouTube</strong> (269k x 15% visión)</span>
                        <span className="font-bold text-slate-800">40,350</span>
                    </li>
                    <li className="flex justify-between">
                        <span><strong>IG + TikTok</strong> (180k x 20% alcance)</span>
                        <span className="font-bold text-slate-800">36,000</span>
                    </li>
                    <li className="flex justify-between">
                        <span><strong>Facebook</strong> (192k x 3% alcance)</span>
                        <span className="font-bold text-slate-800">5,760</span>
                    </li>
                    <li className="flex justify-between pt-3 border-t border-slate-300">
                        <span className="font-bold text-teal-700">TOTAL PERSONAS REALES</span>
                        <span className="font-bold text-teal-700 text-lg">82,110</span>
                    </li>
                </ul>
             </div>

             <div className="bg-teal-50 p-6 rounded-2xl border border-teal-200 flex flex-col justify-center text-center">
                <h4 className="font-bold text-teal-800 mb-2">3. Validación Matemática (Año 1)</h4>
                <p className="text-sm text-teal-600 mb-4">Para lograr la meta de 850 ventas, ¿qué tan efectivos debemos ser?</p>
                
                <div className="bg-white py-3 px-6 rounded-xl shadow-sm font-mono text-lg font-bold text-slate-700 mb-4">
                    850 Ventas ÷ 82,110 Vistas = <span className="text-green-600">1.03%</span>
                </div>
                
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wide bg-teal-100 inline-block py-1 px-3 rounded-full mx-auto">
                    Veredicto: Meta Segura (Benchmark 1% - 3%)
                </div>
             </div>
          </div>
      </div>

      {/* Traffic Lights */}
      <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border-t-4 border-green-500 shadow-sm">
              <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5"/> LUZ VERDE (Hacer)</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3"><div className="w-1 h-full bg-green-200"></div> <div><strong>Estrategia de Packs ($50k):</strong> Agrupa patrones para diluir la comisión bancaria y subir ticket.</div></li>
                  <li className="flex gap-3"><div className="w-1 h-full bg-green-200"></div> <div><strong>Captura Emails:</strong> Regala un patrón simple a cambio del correo (activo propio).</div></li>
              </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border-t-4 border-red-500 shadow-sm">
              <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2"><X className="w-5 h-5"/> LUZ ROJA (Evitar)</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3"><div className="w-1 h-full bg-red-200"></div> <div><strong>Vender Unitarios Baratos:</strong> Evita tickets de $20k individuales. Wompi se lleva mucho % en comisión fija.</div></li>
                  <li className="flex gap-3"><div className="w-1 h-full bg-red-200"></div> <div><strong>Esperar Perfección:</strong> Lanza con el Curso Principiante + Packs existentes.</div></li>
              </ul>
          </div>
      </div>
  </div>
);

// 5. LEGAL & TAX
const LegalStrategy = () => (
  <div className="p-6 md:p-10 space-y-8 animate-fade-in">
       <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Estrategia Legal y Fiscal</h2>
          <p className="text-slate-500">Comparativa: Régimen Ordinario vs. Régimen Simple (RST) y Costos de Constitución.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
          {/* RUT Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-700">Persona Natural (RUT)</h3>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">Riesgoso</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0"/> <div><strong>Responsabilidad Ilimitada:</strong> Tu patrimonio personal responde por deudas.</div></li>
                  <li className="flex gap-3"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0"/> <div><strong>Renta Progresiva (35%+):</strong> Al crecer, el impuesto se dispara.</div></li>
                  <li className="flex gap-3"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0"/> <div><strong>Seguridad Social:</strong> Pagas sobre el 40% de TODOS tus ingresos brutos.</div></li>
              </ul>
          </div>

          {/* RST Card */}
          <div className="bg-white p-6 rounded-2xl border-2 border-teal-500 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMENDADO</div>
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-teal-700">SAS + Régimen Simple</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3"><Shield className="w-5 h-5 text-teal-500 shrink-0"/> <div><strong>Tarifa Fija (~7.3%):</strong> Sobre ingresos brutos. Incluye Renta, ICA y Avisos.</div></li>
                  <li className="flex gap-3"><BookOpen className="w-5 h-5 text-teal-500 shrink-0"/> <div><strong>Límite UVT:</strong> Nos cobija indefinidamente mientras ventas sean &lt; 100.000 UVT (aprox $4.700 Millones/año).</div></li>
                  <li className="flex gap-3"><Shield className="w-5 h-5 text-teal-500 shrink-0"/> <div><strong>Exención Parafiscales:</strong> No pagas aportes de Salud ni SENA/ICBF por los socios (si sueldo &lt; 10 SMMLV).</div></li>
                  <li className="flex gap-3"><Shield className="w-5 h-5 text-teal-500 shrink-0"/> <div><strong>Ley 1780:</strong> Matrícula mercantil a $0 el primer año (Jóvenes &lt; 35 años).</div></li>
              </ul>
          </div>
      </div>
      
      {/* --- NEW SECTION: Costos de Constitución SAS --- */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 mt-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Briefcase className="text-slate-600 w-6 h-6" /> Estructura Legal y Costos de Constitución (SAS)
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <div className="bg-green-50 p-4 rounded-xl mb-6 border border-green-100">
                    <p className="text-sm text-green-800 font-medium flex items-center gap-2">
                        <CheckCircle className="w-4 h-4"/> Aplica Ley de Emprendimiento Joven (Ley 1780)
                    </p>
                </div>
                
                <div className="space-y-4">
                    <div className="flex flex-col border-b border-slate-100 pb-2">
                        <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Derechos Inscripción</span>
                        <span className="font-semibold">$69.000</span>
                        </div>
                    </div>

                    <div className="flex flex-col border-b border-slate-100 pb-2">
                        <div className="flex justify-between text-sm items-center">
                        <span className="text-slate-600 flex items-center gap-1">
                            Matrícula Mercantil (Año 1)
                            <span className="bg-green-100 text-green-700 text-[10px] px-1 rounded">Ley 1780</span>
                        </span>
                        <span className="font-bold text-green-600">$0 (Ahorro)</span>
                        </div>
                    </div>

                    <div className="flex flex-col border-b border-slate-100 pb-2 bg-slate-50 p-2 rounded">
                        <div className="flex justify-between text-sm items-center">
                        <span className="text-slate-500 flex items-center gap-1">
                            Renovación (Año 2 en adelante)
                        </span>
                        <span className="font-bold text-slate-600">~$200k - $300k</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                            *Se paga SIEMPRE después del primer año. El costo depende de los Activos reportados, no de las ventas.
                        </p>
                    </div>

                    <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                        <span className="text-slate-600">Impuesto Registro (0.7%) + Papelería</span>
                        <span className="font-semibold">~$101.000</span>
                    </div>
                        
                    <div className="flex justify-between items-center pt-2 mt-2 bg-slate-50 p-3 rounded-lg">
                        <span className="font-bold text-slate-800">TOTAL TRÁMITES AÑO 1</span>
                        <span className="font-bold text-xl text-blue-600">~$170.000 COP</span>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-center">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 h-full flex flex-col justify-center">
                    <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <DollarSign className="w-5 h-5"/> Capital Declarado: $5.000.000
                    </h4>
                    <p className="text-sm text-blue-700 leading-relaxed">
                        <strong>Importante:</strong> Este dinero <span className="underline">NO es un gasto</span> a fondo perdido. 
                        <br/><br/>
                        Es la inversión inicial que entra a la caja de la empresa para pagar la página web, insumos y comenzar a operar. Legalmente es el patrimonio con el que nace la SAS.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Chart Simulation */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mt-8">
          <h3 className="font-bold text-slate-800 mb-6 text-center">Ahorro Fiscal Proyectado (Año 1 y 2)</h3>
          <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                  <div className="flex justify-between text-xs font-bold mb-1 text-slate-500">
                      <span>Año 1: Impuestos Totales</span>
                      <span>Ahorro: $6.6M</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-8 flex overflow-hidden">
                      <div className="bg-red-400 h-full flex items-center justify-center text-white text-xs font-bold" style={{width: '75%'}}>Ordinario ($9.7M)</div>
                      <div className="bg-teal-500 h-full flex items-center justify-center text-white text-xs font-bold" style={{width: '25%'}}>RST ($3.1M)</div>
                  </div>
              </div>
              <div>
                  <div className="flex justify-between text-xs font-bold mb-1 text-slate-500">
                      <span>Año 2: Impuestos Totales</span>
                      <span>Ahorro: $16.1M</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-8 flex overflow-hidden">
                      <div className="bg-red-400 h-full flex items-center justify-center text-white text-xs font-bold" style={{width: '80%'}}>Ordinario ($23.4M)</div>
                      <div className="bg-teal-500 h-full flex items-center justify-center text-white text-xs font-bold" style={{width: '20%'}}>RST ($7.3M)</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
);

// 6. MARKET & PRICING
const MarketPricing = () => (
  <div className="p-6 md:p-10 space-y-8 animate-fade-in">
      <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Mercado & Estrategia de Precios</h2>
          <p className="text-slate-500">Posicionamiento Premium y Análisis Geográfico</p>
      </div>

      {/* USA vs Hispanic Analysis */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-4 flex items-center gap-2"><Globe className="w-5 h-5"/> Mercado EE.UU. (Tendencias)</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">•</span> <div><strong>Estacionalidad Fuerte:</strong> Halloween (Otoño) y Navidad dominan las ventas.</div></li>
                  <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">•</span> <div><strong>Cultura Pop:</strong> Personajes de películas, series y videojuegos.</div></li>
                  <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">•</span> <div><strong>Moda Rápida:</strong> "Granny squares", tops y balaclavas.</div></li>
              </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-teal-600">
              <h3 className="font-bold text-teal-800 text-lg mb-4 flex items-center gap-2"><Users className="w-5 h-5"/> Mercado Hispano (Tradición)</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2 items-start"><span className="text-teal-500 font-bold">•</span> <div><strong>Artículos Bebé:</strong> Zapatitos, vestidos y ajuares (Alta demanda).</div></li>
                  <li className="flex gap-2 items-start"><span className="text-teal-500 font-bold">•</span> <div><strong>Hogar:</strong> Tapetes, caminos de mesa y cojines.</div></li>
                  <li className="flex gap-2 items-start"><span className="text-teal-500 font-bold">•</span> <div><strong>Fidelidad:</strong> Buscan proyectos completos y detallados en español.</div></li>
              </ul>
          </div>
      </div>

      {/* Price Matrix & Justification */}
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Matriz de Competencia: ¿Por qué $90.000 COP?</h3>
          <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 opacity-75">
                  <div className="text-xs font-bold uppercase text-slate-400 mb-1">Competencia Estándar</div>
                  <div className="text-2xl font-bold text-slate-600 mb-2">$60k - $80k</div>
                  <p className="text-xs text-slate-500">Patrones con buena redacción, pero delegan el riesgo (cálculo de hilo y tallas) al cliente.</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-lg border-2 border-teal-500 transform scale-105 z-10">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xs font-bold uppercase text-teal-600">Tu Posición Estratégica</div>
                    <span className="bg-teal-100 text-teal-700 text-[10px] px-2 py-0.5 rounded-full font-bold">RECOMENDADO</span>
                  </div>
                  <div className="text-3xl font-bold text-teal-700 mb-2">$90.000 COP</div>
                  <p className="text-xs text-slate-600 font-medium">Precio fijo base. Justificado por <strong>Ingeniería de Sizing</strong>, Validación de Gramos y Video Soporte.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 opacity-75">
                  <div className="text-xs font-bold uppercase text-slate-400 mb-1">Proyectos Alto Nivel</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">$105k - $120k</div>
                  <p className="text-xs text-slate-500">Reservado para patrones Avanzados (encaje, puntadas complejas) con soporte intensivo.</p>
              </div>
          </div>
      </div>

      {/* Pricing Ladder (CORRECTED) */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute left-0 top-0 w-full h-full bg-pattern opacity-5"></div>
          <h3 className="text-2xl font-bold mb-8 text-center relative z-10">Escalera de Valor y Precios (COP)</h3>
          
          <div className="flex flex-col md:flex-row items-end justify-center gap-4 relative z-10 h-64">
              {/* Step 1: Packs */}
              <div className="w-full md:w-1/3 bg-slate-700 p-4 rounded-t-xl h-40 flex flex-col justify-between border-t-4 border-amber-400 hover:bg-slate-600 transition-colors">
                   <span className="text-xs uppercase font-bold text-amber-400">Nivel 1: Packs (Volumen)</span>
                  <div>
                      <div className="font-bold text-2xl text-white">$50k - $60k</div>
                      <div className="text-xs text-slate-300">Colecciones temáticas (Mínimo viable)</div>
                  </div>
              </div>
               {/* Step 2: Core */}
              <div className="w-full md:w-1/3 bg-teal-800 p-4 rounded-t-xl h-56 flex flex-col justify-between border-t-4 border-teal-400 shadow-lg transform scale-105 z-20">
                   <span className="text-xs uppercase font-bold text-teal-300">Nivel 2: Core (Premium)</span>
                  <div>
                      <div className="font-bold text-3xl text-white">$90k - $120k</div>
                      <div className="text-xs text-teal-200">Curso + Patrón Ing.</div>
                      <div className="text-[10px] bg-teal-900/50 px-2 py-1 rounded mt-1 inline-block">Sizing Garantizado</div>
                  </div>
              </div>
               {/* Step 3: Avanzado + Future */}
               <div className="w-full md:w-1/3 bg-slate-700 p-4 rounded-t-xl h-64 flex flex-col justify-between border-t-4 border-blue-400 hover:bg-slate-600 transition-colors">
                   <span className="text-xs uppercase font-bold text-blue-400">Nivel 3: Físico / Futuro</span>
                  <div>
                      <div className="font-bold text-2xl">Futuro</div>
                      <div className="text-xs text-slate-300">Kits & Productos Físicos</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
);


// --- MAIN LAYOUT COMPONENT ---

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: <Target size={20} /> },
    { id: 'validation', label: 'Validación', icon: <CheckCircle size={20} /> },
    { id: 'financial', label: 'Finanzas', icon: <TrendingUp size={20} /> },
    { id: 'partnership', label: 'Socios', icon: <Users size={20} /> },
    { id: 'legal', label: 'Legal & RST', icon: <Shield size={20} /> },
    { id: 'market', label: 'Mercado', icon: <ShoppingBag size={20} /> },
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'home': return <DashboardHome navigate={setActiveSection} />;
      case 'validation': return <ValidationStrategy />;
      case 'financial': return <FinancialModel />;
      case 'partnership': return <PartnershipStrategy />;
      case 'legal': return <LegalStrategy />;
      case 'market': return <MarketPricing />;
      default: return <DashboardHome navigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex text-slate-800 overflow-hidden">
      
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-slate-300 border-r border-slate-800 h-screen sticky top-0 shrink-0">
        <div className="p-6 border-b border-slate-800">
          <div className="text-2xl font-extrabold text-white tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-slate-900 font-black">M</div>
            MDC
          </div>
          <p className="text-xs text-slate-500 mt-1">Proyecto 2025</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="text-xs font-bold text-slate-600 uppercase px-3 py-2">Menú Principal</div>
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.id 
                  ? 'bg-teal-600/10 text-teal-400 border border-teal-500/20' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
           <div className="bg-slate-800 rounded-xl p-4">
              <div className="text-xs text-slate-400 mb-1">Estado del Proyecto</div>
              <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-sm font-bold text-white">En Ejecución</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-slate-900 text-white z-50 px-4 py-3 flex justify-between items-center shadow-md">
         <div className="font-bold flex items-center gap-2">
            <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center text-slate-900 text-xs">M</div>
            MDC ACADEMY
         </div>
         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
           {isMobileMenuOpen ? <X /> : <Menu />}
         </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900 z-40 pt-16 px-4">
           <nav className="space-y-2">
             {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-medium border-b border-slate-800 ${
                    activeSection === item.id ? 'text-teal-400' : 'text-slate-300'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
           </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto pt-16 md:pt-0 bg-slate-50">
        <div className="max-w-6xl mx-auto">
            {renderContent()}
        </div>
      </main>

    </div>
  );
}