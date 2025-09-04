'use client';

import React from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, backgroundImage }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ 
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url(${backgroundImage})
        ` 
      }}
    >
      <Navigation />
      <main className="pt-24">
        {children}
      </main>
    </div>
  );
};