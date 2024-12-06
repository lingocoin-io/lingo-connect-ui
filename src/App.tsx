import WormholeConnect, {
    WormholeConnectConfig,
    nttRoutes,
    WormholeConnectTheme,
  } from '@wormhole-foundation/wormhole-connect';
  
  const wormholeConfig: WormholeConnectConfig = {
    network: 'Testnet',
    chains: ['Sepolia', 'Solana', 'BaseSepolia'],
    tokens: ['WSVsep', 'WSVsol', 'WSVbase', 'LINGO','LINGOsol'],
    ui: {
      title: 'Lingo & Wormhole NTT UI',
      defaultInputs: {
        fromChain: 'Sepolia',
        toChain: 'Solana'
      },
      showHamburgerMenu: false,
    },
    routes: [
      ...nttRoutes({
        tokens: {
          LINGO:[
            {
              chain: 'BaseSepolia',
              paused: false,
              manager: '0x7A907B5fA758004a8e9582285298aeE291A4363d',
              token: '0x1b0981608F8D5Fb22fa38Bd445a877938cBf90FA',
              transceiver: [
                {
                  address: '0x36D804A36ddb96fA81945100e1dB3Fbc26c1c037',
                  type: 'wormhole',
                },
              ],
            },
            {
              chain: 'Solana',
              paused: false,
              manager: 'NTtE1h8KkULNQwiqvkA3pPmtEnLvvSd2tcFYq8MaNSS',
              token: 'mntatMdn5EVdqqhuR7cR22SDbY78Z324j5hXmphjaf6',
              transceiver: [
                {
                  address: 'CYyZR7BoEYtFsSbSS6XMxHEpF1vPqToGgY51Gy92Rtt2',
                  type: 'wormhole',
                },
              ],
            },
          ],
          WSV_NTT: [
            {
              chain: 'Sepolia',
              manager: '0xD1542431f7da242Beebb72F283810fd6A40c62F7',
              token: '0xAdB9299DCeAc8440844Ee1C980bf7F4fCc26780A',
              transceiver: [
                {
                  address: '0x4C4e885E273e162b81a7D842521Eb1C9342c1d30',
                  type: 'wormhole',
                },
              ],
            },
            {
              chain: 'Solana',
              manager: 'nMxHx1o8GUg2pv99y8JAQb5RyWNqDWixbxWCaBcurQx',
              token: '2vLDzr7hUpLFHQotmR8EPcMTWczZUwCK31aefAzumkmv',
              transceiver: [
                {
                  address: 'AjL3f9FMHJ8VkNUHZqLYxa5aFy3aTN6LUWMv4qmdf5PN',
                  type: 'wormhole',
                },
              ],
            },
            {
              chain: 'BaseSepolia',
              manager: '0xaE02Ff9C3781C5BA295c522fB469B87Dc5EE9205',
              token: '0xb8dccDA8C166172159F029eb003d5479687452bD',
              transceiver: [
                {
                  address: '0xF4Af1Eac8995766b54210b179A837E3D59a9F146',
                  type: 'wormhole',
                },
              ],
            },
          ],
        },
      }),
    ],
    tokensConfig: {
    LINGO: {
      key: 'LINGO',
      symbol: 'LINGO',
      nativeChain: 'BaseSepolia',
      displayName: 'LINGO',
      tokenId: {
        chain: 'BaseSepolia',
        address: '0x1b0981608F8D5Fb22fa38Bd445a877938cBf90FA'
      },
      coinGeckoId: 'wormhole',
      icon: 'https://bafybeif2lgpznfykwic572sbykexp6aazzb52awzyuehap2wclobmst46e.ipfs.w3s.link/lingo_token.png',
      decimals: 18
    }
    ,
    LINGOsol: {
      key: 'LINGOsol',
      symbol: 'LINGO_SOL',
      nativeChain: 'Solana',
      displayName: 'LINGO',
      tokenId: {
        chain: 'Solana',
        address: 'EypNGTe6fyiTJVa1a89SHYjcJHABNSYbertf3gybmyXz'
      },
      coinGeckoId: 'wormhole',
      icon: 'https://bafybeif2lgpznfykwic572sbykexp6aazzb52awzyuehap2wclobmst46e.ipfs.w3s.link/lingo_token.png',
      decimals: 9
    },
      WSVsep: {
        key: 'WSVsep',
        symbol: 'WSV',
        nativeChain: 'Sepolia',
        displayName: 'WSV',
        tokenId: {
          chain: 'Sepolia',
          address: '0xAdB9299DCeAc8440844Ee1C980bf7F4fCc26780A'
        },
        coinGeckoId: 'wormhole',
        icon: 'https://wormhole.com/token.png',
        decimals: 18
      },
      WSVsol: {
        key: 'WSVsol',
        symbol: 'WSV',
        nativeChain: 'Solana',
        displayName: 'WSV',
        tokenId: {
          chain: 'Solana',
          address: '2vLDzr7hUpLFHQotmR8EPcMTWczZUwCK31aefAzumkmv'
        },
        coinGeckoId: 'wormhole',
        icon: 'https://wormhole.com/token.png',
        decimals: 9
      },
      WSVbase: {
        key: 'WSVbase',
        symbol: 'WSV',
        nativeChain: 'BaseSepolia',
        displayName: 'WSV',
        tokenId: {
          chain: 'BaseSepolia',
          address: '0xb8dccDA8C166172159F029eb003d5479687452bD'
        },
        coinGeckoId: 'wormhole',
        icon: 'https://wormhole.com/token.png',
        decimals: 9
      }
    }
  }
  
  function App() {
    console.log('Wormhole Config:', wormholeConfig);

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