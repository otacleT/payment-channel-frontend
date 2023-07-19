'use client'

import {useHome} from '@/component/Home/hook/useHome'

export const Home = () => {
  const {address, connect, disconnect, handleSignMessage, isConnected} = useHome()

  if (isConnected) {
    return (
      <main>
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
        <button onClick={handleSignMessage}>Sign Message</button>
      </main>
    )
  }
  return <button onClick={() => connect()}>Connect Wallet</button>
}
