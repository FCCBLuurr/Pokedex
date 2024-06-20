import { ReactNode } from 'react';
import '../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Pokedex App</title>
        {/* You can add more metadata here */}
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl">Pokedex</h1>
          </header>
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>A Project by BLuurr</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
