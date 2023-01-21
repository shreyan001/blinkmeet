import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider,  darkTheme , getDefaultWallets} from '@rainbow-me/rainbowkit';

import { configureChains, createClient, useAccount, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';



const { chains, provider } = configureChains(
  [mainnet, polygon],
  [
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})




ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<WagmiConfig client={wagmiClient}>
<RainbowKitProvider chains={chains}  coolMode    theme={darkTheme({
        accentColor: 'linear-gradient(91.44deg, #D800A8 17.68%, #FF007A 88.87%)',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
      })}
>      <App />
</RainbowKitProvider>
</WagmiConfig>
 </BrowserRouter>
);