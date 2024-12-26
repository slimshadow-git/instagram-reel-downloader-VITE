import React from 'react';
import { Header } from './components/Header';
import { DownloadForm } from './components/DownloadForm';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Header />

        <main className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Download Instagram Reels
            </h2>
            
            <DownloadForm />

            <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
              <p className="text-center">
                Simply paste the Instagram reel URL and click download.
                The video will open in a new tab.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;