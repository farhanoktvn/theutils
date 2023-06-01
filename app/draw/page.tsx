'use client';

import { useTheme } from 'next-themes';
import { Excalidraw, FONT_FAMILY, THEME } from '@excalidraw/excalidraw';

export default function TextPage() {
  const { theme } = useTheme();

  const currentTheme = theme === 'dark' ? THEME.DARK : THEME.LIGHT;

  return (
    <main className="flex flex-1 max-h-screen flex-col items-center">
      <div style={{ height: '100vh', width: '100vw' }}>
        <Excalidraw
          initialData={{
            appState: {
              theme: currentTheme,
              currentItemFontFamily: FONT_FAMILY.Cascadia,
            },
          }}
        />
      </div>
    </main>
  );
}
