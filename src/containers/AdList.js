import React, { useState, useEffect } from 'react';
import AdCard from '../components/AdCard';
// предположим, что у вас есть функции для работы с API
import { getAds, deleteAd } from '../api';

function AdList() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    loadAds();
  }, []);

  const loadAds = async () => {
    const adsData = await getAds();
    setAds(adsData);
  };

  const handleDelete = async (id) => {
    await deleteAd(id);
    loadAds();
  };

  return (
    <div>
      {ads.map(ad => (
        <AdCard key={ad.id} ad={ad} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default AdList;
