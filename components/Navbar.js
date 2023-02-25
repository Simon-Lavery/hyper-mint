import { HStack, Spacer } from "@chakra-ui/react"
import dynamic from "next/dynamic";
import styles from "../src/styles/Home.module.css"

const WalletMultiButtonDynamic = dynamic(
	async () =>
		(await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
	{ ssr: false }
);

const NavBar = () => {
  return (
    <HStack width="full" padding={4}>
      <Spacer />
			<WalletMultiButtonDynamic className={styles["wallet-adapter-button-trigger"]}/>
    </HStack>
  )
}

export default NavBar