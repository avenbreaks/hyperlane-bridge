import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  // Example collateral token for an EVM chain
   {
     type: 'collateral',
     chainId: 5,
     address: '0x2cE89A6c99B45d1b62c1c07cAF731bF12d88C293',
     hypCollateralAddress: '0x145de8760021c4ac6676376691b78038d3DE9097',
     name: 'Wrapped Ethereum',
     symbol: 'WETH',
     decimals: 18,
     logoURI: '/logos/weth.png', // See public/logos/
   },

  // Example native token for an EVM chain
  {
    type: 'native',
    chainId: 130,
    name: 'Engram Tokio',
    symbol: 'tGRAM',
    decimals: 18,
    hypNativeAddress: '0xBf8c15C88D15Ed002b610e24413a00bB0e81f36d',
    logoURI: '/logos/engram_black.svg',
  },

  // Example NFT (ERC721) token for an EVM chain
  {
    chainId: 5,
    name: 'Test721',
    symbol: 'TEST721',
    decimals: 0,
    type: 'collateral',
    address: '0x77566D540d1E207dFf8DA205ed78750F9a1e7c55',
    hypCollateralAddress: '0xDcbc0faAA269Cf649AC8950838664BB7B355BD6B',
    isNft: true,
  },
];
