import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
    return <div style={{background: 'red', height: '500px'}}>
        <WalletMultiButton />
        <div>The main Button</div>
    </div>
}