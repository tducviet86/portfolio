'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border transition-smooth">
      <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-foreground hover:opacity-80 transition-smooth"
        >
          Đức Việt
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Skills
            </Link>
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
