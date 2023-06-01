'use client';

import { Excalidraw } from '@excalidraw/excalidraw';

export default function TextPage() {
  return (
    <main className="flex flex-1 max-h-screen flex-col items-center justify-between">
      <Excalidraw />
    </main>
  );
}
