import { ReactNode } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';

require("@solana/wallet-adapter-react-ui/styles.css")

const WalletConnectionProvider = ({children}) => {
  const url = useMemo(() => clusterApiUrl("devnet"), [])

  const phantom = new PhantomWalletAdapter();

  return (
    <ConnectionProvider endpoint={url}>
      <WalletProvider wallets={[phantom]}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletConnectionProvider;