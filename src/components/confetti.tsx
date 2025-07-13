'use client';

import React, { useEffect, useState } from 'react';

const Confetti = () => {
  const [pieces, setPieces] = useState<number[]>([]);

  useEffect(() => {
    // This ensures the component only runs on the client
    setPieces(Array.from({ length: 150 }, (_, i) => i));

    const timer = setTimeout(() => {
      setPieces([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (pieces.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {pieces.map((i) => (
        <div
          key={i}
          className="confetti-piece"
          style={
            {
              '--x-start': `${45 + Math.random() * 10}vw`,
              '--x-end': `${(Math.random() - 0.5) * 200 + 50}vw`,
              '--y-end': '110vh',
              '--delay': `${Math.random() * 0.2}s`,
              '--duration': `${2.5 + Math.random() * 2}s`,
              '--rotation': `${Math.random() * 720 - 360}deg`,
              '--scale': `${Math.random() * 0.4 + 0.6}`,
              '--color': ['#FFA500', '#FFC300', '#e5e7eb'][i % 3],
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default Confetti;
