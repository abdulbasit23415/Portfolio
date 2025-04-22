'use client';
import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load components
const App = dynamic(() => import('./components/App'), { ssr: false });
const MyCard = dynamic(() => import('./components/MyCard'), { ssr: false });

function Page() {
  const [repo, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos();
  }, []);

  async function fetchRepos() {
    try {
      const response = await fetch('https://api.github.com/users/AbdulBasit23415/repos');
      const data = await response.json();
      console.log(data); // ✅ This will be an array of repos
      setRepos(data); // ✅ Directly set the array into state
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
  }

  return (
    <div className='bg-[#1F2233] min-h-screen'>
      {/* Suspense wrapper for lazy-loaded components */}
      <Suspense fallback={<div className="text-white">Loading App...</div>}>
        <App />
      </Suspense>
      <Suspense fallback={<div className="text-white">Loading Projects...</div>}>
        <MyCard repo={repo} />
      </Suspense>
    </div>
  );
}

export default Page;
