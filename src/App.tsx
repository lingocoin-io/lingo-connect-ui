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
    title: 'Lingo NTT UI',
    defaultInputs: {
      fromChain: 'Solana',
      toChain: 'Base'
    },
  },
  rpcs: {
    Solana: 'https://api.mainnet-beta.solana.com'
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