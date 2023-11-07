import { ChainMap, ChainMetadata, chainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // ----------- Add your chains here -----------------
  // Chains already in the SDK need not be included here. Example custom chain:
  engram: {
     protocol: ProtocolType.Ethereum,
     chainId: 130,
     domainId: 130,
     name: 'engram',
     displayName: 'Engram Tokio',
     nativeToken: { name: 'Engram Tokio', symbol: 'tGRAM', decimals: 18 },
     rpcUrls: [{ http: 'https://engram.tech/testnet' }],
     blockExplorers: [
       {
         name: 'Engram Scan',
         url: 'https://scan.engram.tech',
         apiUrl: 'https://scan.engram.tech/v2/api/stats',
       },
     ],
     blocks: {
       confirmations: 1,
       reorgPeriod: 1,
       estimateBlockTime: 12,
     },
     logoURI: '/logos/engram_black.svg',
   },

  // Including configs for some Solana chains by default
  solana: {
    ...chainMetadata.solana,
    rpcUrls: [
      {
        http: process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
      },
    ],
    mailbox: 'TODO',
  },
  solanatestnet: {
    ...chainMetadata.solanatestnet,
    mailbox: 'TODO',
  },
  solanadevnet: {
    ...chainMetadata.solanadevnet,
    mailbox: '4v25Dz9RccqUrTzmfHzJMsjd1iVoNrWzeJ4o6GYuJrVn',
  },
  cosmoshub: {
    protocol: ProtocolType.Cosmos,
    name: 'cosmoshub',
    chainId: 'cosmoshub-4',
    displayName: 'Cosmos Hub',
    domainId: 1234, // TODO
    bech32Prefix: 'cosmos',
    slip44: 118,
    rpcUrls: [
      { http: 'https://rpc-cosmoshub.blockapsis.com' },
      { http: 'https://lcd-cosmoshub.blockapsis.com' },
    ],
    nativeToken: {
      name: 'Atom',
      symbol: 'ATOM',
      decimals: 6,
    },
    logoURI: '/logos/cosmos.svg',
  },
};
