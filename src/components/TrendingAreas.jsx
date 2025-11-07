import React from 'react';
import { Flame, MapPin, TrendingUp } from 'lucide-react';

const mockAreas = [
  { name: 'Koramangala', city: 'Bengaluru', price: 10250, rent: 38, trend: 5.4 },
  { name: 'Powai', city: 'Mumbai', price: 34500, rent: 72, trend: 3.1 },
  { name: 'Baner', city: 'Pune', price: 12800, rent: 35, trend: 4.8 },
  { name: 'Gachibowli', city: 'Hyderabad', price: 9800, rent: 32, trend: 6.2 },
];

const TrendingAreas = ({ onSelect }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-900">
          <Flame className="text-orange-600" />
          <h2 className="text-xl font-semibold">Trending Localities</h2>
        </div>
        <button className="text-sm font-medium text-indigo-600 hover:underline">View all</button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mockAreas.map((a) => (
          <button
            key={a.name}
            onClick={() => onSelect?.(a.name)}
            className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-700"><MapPin size={16}/> {a.city}</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{a.name}</h3>
              </div>
              <span className="rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700">Hot</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="text-slate-500">Price / sq.ft</div>
                <div className="text-slate-900">₹{a.price.toLocaleString()}</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="text-slate-500">Avg Rent (₹/sq.ft)</div>
                <div className="text-slate-900">₹{a.rent}</div>
              </div>
            </div>
            <div className="mt-3 inline-flex items-center gap-1 text-emerald-600">
              <TrendingUp size={16} /> {a.trend}% last 12m
            </div>
            <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
              <div className="h-1 rounded-full bg-indigo-600 transition-all group-hover:bg-indigo-700" style={{ width: `${Math.min(100, a.trend * 10)}%` }} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TrendingAreas;
