'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import {defineChain} from 'viem';
import { useEffect, useState } from 'react';
import { PointsProvider } from './contexts/PointsContext';
import { WalletProvider } from './contexts/WalletContext';

export const electroneumMainnet = defineChain({
  id: 52014,
  name: 'Electroneum Mainnet',
  network: 'electroneum-mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ETN',
    symbol: 'ETN',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.ankr.com/electroneum'],
    },
  },
  blockExplorers: {
    default: {name: 'Electroneum Explorer', url: 'https://blockexplorer.electroneum.com'},
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {

  return (
    <PrivyProvider
      appId="cm81bj6ce0093zs43wrr4cizm"
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'dark',
          accentColor: '#FF10F0',
          logo: 'https://corecade.netlify.app/_next/image?url=%2Fcorecade-logo.png&w=96&q=75',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        defaultChain: electroneumMainnet,
        supportedChains: [electroneumMainnet],
      }}
    >
      <WalletProvider>
        <PointsProvider>
          {children}
        </PointsProvider>
      </WalletProvider>
    </PrivyProvider>
  );
} 