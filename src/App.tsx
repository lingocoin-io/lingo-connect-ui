import WormholeConnect, {
  WormholeConnectConfig,
  nttRoutes,
  WormholeConnectTheme,
} from '@wormhole-foundation/wormhole-connect';

const wormholeConfig: WormholeConnectConfig = {
  network: 'Mainnet',
  chains: ['Solana', 'Base'],
  tokens: ['LINGOsol', 'LINGObase'],
  ui: {
    title: 'Lingo WormHole Bridge ',
    defaultInputs: {
      fromChain: 'Base',
      toChain: 'Solana'
    },
  },
  rpcs: {
    Solana: 'https://dalia-3uo0e8-fast-mainnet.helius-rpc.com'
  },
  routes: [
    ...nttRoutes({
      tokens: {
        LINGO_NTT: [
          {
            chain: 'Solana',
            manager: 'nTTQspEC1JoEUJVFTcgZSatgcv4PNT8UYtCtyaUSKcX',
            token: 'GWZGj6AM4pkWxQW6bifE6JChSRf2hEQFWFkYC4REaL7H',
            transceiver: [
              {
                address: 'CnDQ53A3j2EcniJAm7UtuYKmQtovFAmumcuzC648moSE',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Base',
            manager: '0x7c91bAca69ad289eC5De46B0b36287770a1Ea91e',
            token: '0xfb42Da273158B0F642F59F2Ba7cc1d5457481677',
            transceiver: [
              {
                address: '0x017aBb6a1C42f27C449E98Ed23003592D86A7300',
                type: 'wormhole',
              },
            ],
          },
        ],
      },
    }),
  ],
  tokensConfig: {
    LINGOsol: {
      symbol: 'LINGO',
      tokenId: {
        chain: 'Solana',
        address: 'GWZGj6AM4pkWxQW6bifE6JChSRf2hEQFWFkYC4REaL7H'
      },
      icon: 'https://bafybeif2lgpznfykwic572sbykexp6aazzb52awzyuehap2wclobmst46e.ipfs.w3s.link/lingo_token.png',
      decimals: 9
    },
    LINGObase: {
      symbol: 'LINGO',
      tokenId: {
        chain: 'Base',
        address: '0xfb42Da273158B0F642F59F2Ba7cc1d5457481677'
      },
      icon: 'https://bafybeif2lgpznfykwic572sbykexp6aazzb52awzyuehap2wclobmst46e.ipfs.w3s.link/lingo_token.png',
      decimals: 18
    }
  },
  transactionSettings: {
    Solana: {
      priorityFee: {
        // Number between 0-1, defaults to 0.9. Higher percentile yields higher fees.
        // For example, you can set percentile to 0.95 to make Connect compute the
        // 95th percentile priority fee amount based on recent transactions
        percentile: 0.95,

        // Any number, defaults to 1.0. The fee amount is multiplied by this number.
        // This can be used to further raise or lower the fees Connect is using.
        // For example, percentile=0.95 and percentileMultiple=1.1 would use
        // the 95th percentile fee, with a 10% increase
        percentileMultiple: 1.1,

        // Minimum fee you want to use in microlamports, regardless of recent transactions
        // Defaults to 1
        min: 200_000,

        // Maximum fee you want to use in microlamports, regardless of recent transactions
        // Defaults to 100,000,000
        max: 5_000_000,
      }
    }
  }
}

function App() {
  const theme: WormholeConnectTheme = {
    mode: 'dark',
    primary: '#78c4b6',
  };

  return (
      <div>
        <WormholeConnect config={wormholeConfig} theme={theme} />
      </div>
  )
}
export default App