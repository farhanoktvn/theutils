import { useTheme } from 'next-themes';
import { Excalidraw, FONT_FAMILY, THEME } from '@excalidraw/excalidraw';

export default function DynamicExcalidraw() {
  const { theme } = useTheme();
  const currentTheme = theme === 'dark' ? THEME.DARK : THEME.LIGHT;

  return (
    <Excalidraw
      initialData={{
        appState: {
          theme: currentTheme,
          currentItemFontFamily: FONT_FAMILY.Cascadia,
        },
      }}
    />
  );
}
