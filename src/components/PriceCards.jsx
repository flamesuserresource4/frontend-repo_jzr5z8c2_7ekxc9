import React from 'react';
import { IndianRupee, LineChart, Building2 } from 'lucide-react';

const items = [
  {
    title: 'Price per sq.ft',
    value: '₹9,800',
    change: '+4.2% YoY',
    icon: <IndianRupee className="text-indigo-600" />,
  },
  {
    title: 'Average Rent',
    value: '₹34/sq.ft',
    change: '+2.1% QoQ',
    icon: <Building2 className="text-emerald-600" />,
  },
  {
    title: 'Price Trend',
    value: 'Stable',
    change: 'Last 6 months',
    icon: <LineChart className="text-orange-500" />,
  },
];

const PriceCards = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">{it.title}</h3>
              {it.icon}
            </div>
            <div className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">{it.value}</div>
            <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{it.change}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceCards;
