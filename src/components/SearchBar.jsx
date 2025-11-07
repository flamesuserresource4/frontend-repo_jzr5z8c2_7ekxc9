import React from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex w-full items-center gap-2 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/10">
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-slate-600">
          <MapPin size={18} />
          <span className="text-sm">Locality</span>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a locality, e.g., Koramangala"
          className="w-full rounded-md px-3 py-3 text-sm outline-none placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 active:translate-y-[1px]"
        >
          <Search size={18} />
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
