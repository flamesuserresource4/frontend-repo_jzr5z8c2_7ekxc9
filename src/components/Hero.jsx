import React from 'react';
import Spline from '@splinetool/react-spline';
import { Home, TrendingUp, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[560px] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-16 md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <TrendingUp size={14} />
          Real-time locality insights
        </div>
        <h1 className="mt-5 text-center text-3xl font-semibold leading-tight md:text-5xl">
          Find your perfect home with live prices & trends
        </h1>
        <p className="mt-4 max-w-2xl text-center text-sm text-white/80 md:text-base">
          Explore locality-wise price per sq.ft, rentals, and compare neighborhoods like a pro.
        </p>

        <div className="mt-8 w-full max-w-3xl">
          {/* SearchBar will be injected from parent */}
        </div>

        <div className="mt-6 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-sm"><Home size={16} />Buy</div>
            <div className="mt-2 text-lg font-semibold">New Projects</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-sm"><MapPin size={16} />Rent</div>
            <div className="mt-2 text-lg font-semibold">Furnished Homes</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-sm"><TrendingUp size={16} />Trends</div>
            <div className="mt-2 text-lg font-semibold">Market Insights</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-sm"><MapPin size={16} />Explore</div>
            <div className="mt-2 text-lg font-semibold">Top Localities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
