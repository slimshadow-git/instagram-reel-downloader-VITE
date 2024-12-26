import React from 'react';
import { Instagram } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <div className="flex items-center space-x-2">
        <Instagram className="w-8 h-8 text-pink-500" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reel Downloader</h1>
      </div>
      <ThemeToggle />
    </header>
  );
};