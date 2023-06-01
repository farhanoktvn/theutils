'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Welcome to the Utilities!</h1>
        <div className="flex flex-col mt-6 gap-2">
          <Button asChild>
            <Link href="/text">Text Editor</Link>
          </Button>
          <Button asChild>
            <Link href="/draw">Excalidraw</Link>
          </Button>
        </div>
        <div className="flex justify-center">
          <Link
            href="https://github.com/farhanoktvn"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href="https://twitter.com/farhanoktvn"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}
            >
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
              console.log(theme);
            }}
          >
            <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
