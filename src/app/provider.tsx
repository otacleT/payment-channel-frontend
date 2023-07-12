'use client'

import type {ReactNode} from 'react'
import {configureChains, createConfig, mainnet, WagmiConfig} from 'wagmi'
import {publicProvider} from 'wagmi/providers/public'

export const WagmiProvider = ({children}: {children: ReactNode}) => {
  const {publicClient, webSocketPublicClient} = configureChains([mainnet], [publicProvider()])

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  })

  return <WagmiConfig config={config}>{children}</WagmiConfig>
}
