
# WormholeConnect NTT Integration

This project demonstrates the integration of **WormholeConnect** for Non-Transferable Tokens (NTTs) between the **Solana** and **BaseSepolia** chains. The application simplifies token management and routing for the `LINGOsol` and `LINGObase` tokens.

## Features

- **Multi-Chain Support**:
    - Enables token bridging between **Solana** and **BaseSepolia**.

- **Token Configurations**:
    - Supports `LINGOsol` (on Solana) and `LINGObase` (on BaseSepolia).

- **User-Friendly Interface**:
    - Simplified UI for NTT bridging with custom theming.

## Configuration

### WormholeConnect Configuration

The `wormholeConfig` object defines:

- **Network**: Set to `Testnet` for testing purposes.
- **Chains**: Focuses on Solana and BaseSepolia.
- **Tokens**: Supports bridging for the following tokens:
    - `LINGOsol`: Solana-based NTT with a 9-decimal precision.
    - `LINGObase`: BaseSepolia-based NTT with a 9-decimal precision.
- **Routing**:
    - Predefined routes for seamless token bridging using Wormhole's infrastructure.

### UI

The user interface includes:

- **Customizable Title**: Set to "Wormhole NTT UI."
- **Default Inputs**: Preselects `Solana` as the source chain and `BaseSepolia` as the destination chain.
- **Dark Theme**: With a custom primary color.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Solana keypair and BaseSepolia private key for testing

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Select a source and destination chain.
- Enter token details for `LINGOsol` or `LINGObase`.
- Initiate the bridging process via the WormholeConnect interface.

## Token Details

| Token      | Chain       | Address                                   | Decimals |
|------------|-------------|-------------------------------------------|----------|
| `LINGOsol` | Solana      | `mntatMdn5EVdqqhuR7cR22SDbY78Z324j5hXmphjaf6` | 9        |
| `LINGObase`| BaseSepolia | `0x1b0981608F8D5Fb22fa38Bd445a877938cBf90FA`  | 9        |

## Technologies Used

- **React**: For building the user interface.
- **WormholeConnect**: For multi-chain token bridging.
- **Solana** and **BaseSepolia**: Blockchain platforms for NTT management.

## Development

### Local Testing

To test locally, ensure you have set up the required environment variables for Solana and BaseSepolia:

1. Export your Solana private key:
   ```bash
   export SOLANA_PRIVATE_KEY="<your-private-key>"
   ```
2. Run the application using the test network:
   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
