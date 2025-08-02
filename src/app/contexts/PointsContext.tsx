'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { usePointsManager } from '@/hooks/usePointsManager';

type PointsContextType = {
  balance: number;
  convertToPoints: (amount: string | number) => Promise<boolean>;
  withdrawPoints: (amount: string | number) => Promise<boolean>;
  refreshBalance: () => Promise<void>;
  loading: boolean;
  error: string | null;
  etnPrice: number;
  isLoadingPrice: boolean;
};

const PointsContext = createContext<PointsContextType | null>(null);

export function PointsProvider({ children }: { children: ReactNode }) {
  const { authenticated, user } = usePrivy();
  const { 
    balance, 
    convertToPoints, 
    withdrawPoints, 
    getBalance,
    loading, 
    error 
  } = usePointsManager();

  const [etnPrice, setEtnPrice] = useState<number>(0);
  const [isLoadingPrice, setIsLoadingPrice] = useState(true);

  // Fetch ETN price
  useEffect(() => {
    const fetchEtnPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=electroneum&vs_currencies=usd');
        const data = await response.json();
        if (data.electroneum && data.electroneum.usd) {
          setEtnPrice(data.electroneum.usd);
        } else {
          console.error('Unexpected ETN price format:', data);
        }
        setIsLoadingPrice(false);
      } catch (error) {
        console.error('Error fetching ETN price:', error);
        setIsLoadingPrice(false);
      }
    };

    fetchEtnPrice();
    // Refresh price every 5 minutes
    const interval = setInterval(fetchEtnPrice, 300000);
    return () => clearInterval(interval);
  }, []);

  // Fetch balance whenever authentication state changes
  useEffect(() => {
    if (authenticated && user) {
      getBalance();
    }
  }, [authenticated, user, getBalance]);

  // Refresh function that can be called from any component
  const refreshBalance = async () => {
    if (authenticated && user) {
      await getBalance();
    }
  };

  const value = {
    balance,
    convertToPoints,
    withdrawPoints,
    refreshBalance,
    loading,
    error,
    etnPrice,
    isLoadingPrice
  };

  return (
    <PointsContext.Provider value={value}>
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  const context = useContext(PointsContext);
  if (context === null) {
    throw new Error('usePoints must be used within a PointsProvider');
  }
  return context;
}