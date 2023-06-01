'use client';

import Editor from '@monaco-editor/react';

export default function TextPage() {
  return (
    <main className="flex flex-1 max-h-screen flex-col items-center justify-between">
      <Editor theme="vs-dark" height="100vh" />
    </main>
  );
}
