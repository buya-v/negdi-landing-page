import React from 'react';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { HowItWorks } from './components/HowItWorks';
import { AssetMix } from './components/AssetMix';
import { StickyDownload } from './components/StickyDownload';

function App() {
  return (
    <main className="min-h-screen bg-white relative">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <AssetMix />
      
      {/* Footer / Copyright area */}
      <footer className="bg-secondary text-white py-12">
        <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h4 className="text-2xl font-bold text-primary mb-2">negdi</h4>
                    <p className="text-gray-400 text-sm">© 2024 Negdi Technologies LLC. All rights reserved.</p>
                </div>
                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500">
                <p>Investment involves risk. Past performance is not indicative of future results. Please read the product disclosure statement before investing.</p>
            </div>
        </div>
      </footer>

      <StickyDownload />
    </main>
  );
}

export default App;