'use client';

import { useEffect, useState } from 'react';

export function VisitorCounter() {
  const [views, setViews] = useState<string>('---');

  useEffect(() => {
    fetch('/api/views')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.views === 'number') {
          // Format number minimally (e.g., 1,000)
          setViews(data.views.toLocaleString());
        }
      })
      .catch(() => setViews('---'));
  }, []);

  return (
    <div className="mt-4 font-[--font-inter] text-[0.65rem] tracking-[0.3em] uppercase text-[#E4E6C3]/20 flex justify-center items-center gap-2">
      <span>VISITOR NO.</span>
      <span className="tabular-nums font-medium text-[#E4E6C3]/40 tracking-normal text-xs">{views}</span>
    </div>
  );
}
