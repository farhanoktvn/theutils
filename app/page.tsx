'use client';

import Editor from '@monaco-editor/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Editor height="75vh" theme="vs-dark" />
    </main>
  );
}
