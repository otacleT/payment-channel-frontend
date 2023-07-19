import {ethers} from 'ethers'
import {useCallback} from 'react'
import {useAccount, useConnect, useDisconnect} from 'wagmi'
import {InjectedConnector} from 'wagmi/connectors/injected'

export const useHome = () => {
  const {address, isConnected} = useAccount()
  const {connect} = useConnect({
    connector: new InjectedConnector(),
  })
  const {disconnect} = useDisconnect()

  const handleSignMessage = useCallback(async () => {
    const message = ethers.solidityPackedKeccak256(
      [
        'string',
        'string',
        'address',
        'uint256',
        'uint256',
        'uint256',
        'address',
        'uint256',
        'uint256',
      ],
      [
        '\x19Ethereum Signed Message:\n',
        '200',
        '0x93Ff8fe9BF40051E8763C864B15A0E87f2f96468',
        1,
        3,
        1,
        '0xB3ba4fb6aef1aE0A1cE8df91Ff4EC0cc936f2152',
        1000,
        1000,
      ]
    )
    console.info(message)
    const arrayifyMessage = ethers.getBytes(message)
    console.info(arrayifyMessage)
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const flatSignature = await signer.signMessage(arrayifyMessage)
    console.info(flatSignature)
  }, [])

  return {
    address,
    isConnected,
    connect,
    disconnect,
    handleSignMessage,
  }
}
