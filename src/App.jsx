import React from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import TrendingAreas from './components/TrendingAreas';
import PriceCards from './components/PriceCards';

function App() {
  const onSearch = (q) => {
    if (!q) return;
    // For now, just log. In full app, navigate to locality page.
    console.log('Search locality:', q);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-slate-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">RE</div>
            <span className="text-lg font-semibold">RealEstate Compare</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#trending" className="hover:text-indigo-600">Trending</a>
            <a href="#prices" className="hover:text-indigo-600">Prices</a>
            <a href="#listings" className="hover:text-indigo-600">Listings</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600">Login</button>
            <button className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">Sign up</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <div className="relative -mt-16 z-10 mx-auto w-full max-w-3xl px-6">
          <SearchBar onSearch={onSearch} />
        </div>

        <div id="trending">
          <TrendingAreas onSelect={onSearch} />
        </div>

        <div id="prices">
          <PriceCards />
        </div>

        <section id="listings" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Featured Properties</h2>
            <a className="text-sm font-medium text-indigo-600 hover:underline" href="#">View all</a>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img src={`https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop`} alt="Property" className="h-44 w-full object-cover"/>
                <div className="p-4">
                  <div className="text-lg font-semibold text-slate-900">2 BHK Apartment</div>
                  <div className="mt-1 text-sm text-slate-600">Koramangala, Bengaluru</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-indigo-600 font-semibold">₹1.2 Cr</div>
                    <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50">Save</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-600">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} RealEstate Compare — Built for locality insights.
        </div>
      </footer>
    </div>
  );
}

export default App;
