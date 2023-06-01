'use client';

import dynamic from 'next/dynamic';

const DynamicExcalidraw = dynamic(() => import('./dynamic-excalidraw'), {
  ssr: false,
});

export default function TextPage() {
  return (
    <main className="flex flex-1 max-h-screen flex-col items-center">
      <div style={{ height: '100vh', width: '100vw' }}>
        <DynamicExcalidraw />
      </div>
    </main>
  );
}
