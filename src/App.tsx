import WormholeConnect, {
  WormholeConnectConfig,
  nttRoutes,
  WormholeConnectTheme,
} from '@wormhole-foundation/wormhole-connect';

const wormholeConfig: WormholeConnectConfig = {
  network: 'Testnet',
  chains: ['Solana', 'BaseSepolia'],
  tokens: ['LINGOsol', 'LINGObase'],
  ui: {
    title: 'Wormhole NTT UI',
    defaultInputs: {
      fromChain: 'Solana',
      toChain: 'BaseSepolia'
    },
    showHamburgerMenu: false,
  },
  routes: [
    ...nttRoutes({
      tokens: {
        LINGO_NTT: [
          {
            chain: 'Solana',
            manager: 'NTtE1h8KkULNQwiqvkA3pPmtEnLvvSd2tcFYq8MaNSS',
            token: 'mntatMdn5EVdqqhuR7cR22SDbY78Z324j5hXmphjaf6',
            transceiver: [
              {
                address: 'CYyZR7BoEYtFsSbSS6XMxHEpF1vPqToGgY51Gy92Rtt2',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'BaseSepolia',
            manager: '0x7A907B5fA758004a8e9582285298aeE291A4363d',
            token: '0x1b0981608F8D5Fb22fa38Bd445a877938cBf90FA',
            transceiver: [
              {
                address: '0x352dE7A3Cb32704Fb8146fe83D69F6880d9a8804',
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
      key: 'LINGOsol',
      symbol: 'LINGO',
      nativeChain: 'Solana',
      displayName: 'LINGO',
      tokenId: {
        chain: 'Solana',
        address: 'mntatMdn5EVdqqhuR7cR22SDbY78Z324j5hXmphjaf6'
      },
      coinGeckoId: 'wormhole',
      icon: 'https://bafybeif2lgpznfykwic572sbykexp6aazzb52awzyuehap2wclobmst46e.ipfs.w3s.link/lingo_token.png',
      decimals: 9
    },
    LINGObase: {
      key: 'LINGObase',
      symbol: 'LINGO',
      nativeChain: 'BaseSepolia',
      displayName: 'LINGO',
      tokenId: {
        chain: 'BaseSepolia',
        address: '0x1b0981608F8D5Fb22fa38Bd445a877938cBf90FA'
      },
      coinGeckoId: 'wormhole',
      icon: 'https://bafybeif2lgpznfykwic572sbykexp6aazzb52awzyuehap2wclobmst46e.ipfs.w3s.link/lingo_token.png',
      decimals: 9
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