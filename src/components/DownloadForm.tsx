import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { downloadReel } from '../api/downloadReel';
import toast from 'react-hot-toast';

export const DownloadForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.includes('instagram.com')) {
      toast.error('Please enter a valid Instagram reel URL');
      return;
    }

    setLoading(true);
    try {
      const downloadLink = await downloadReel(url);
      window.open(downloadLink, '_blank');
      toast.success('Download started!');
      setUrl('');
    } catch (error) {
      toast.error('Failed to download reel. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label 
          htmlFor="url" 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Reel URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.instagram.com/reels/..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-5 h-5" />
        <span>{loading ? 'Processing...' : 'Download Reel'}</span>
      </button>
    </form>
  );
};