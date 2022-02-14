import React, { createContext, useContext, useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';

const Web3Context = createContext(undefined);

export default function Web3Provider ({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isInitialize: false,
  });

  useEffect(() => {
    const loadProvider = async () => {
      if (window.ethereum) {
      const provider = await detectEthereumProvider();
        const web3 = new Web3(provider);
        setWeb3Api(api => ({
          ...api,
          provider,
          web3,
          contract: null,
          isInitialize: true,
        }));
      } else {
        setWeb3Api(api => ({ ...api, isInitialize: true }));
        console.error('please install metamask');
      }
    };
    loadProvider().then();
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3 () {
  return useContext(Web3Context);
}