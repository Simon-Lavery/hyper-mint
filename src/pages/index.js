import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from "../../components/Navbar"
import Disconnected from '../../components/Disconnected'
import Connected from 'components/Connected'
import { useWallet } from '@solana/wallet-adapter-react'


import { Box, Center, Spacer, Stack } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { connected } = useWallet()
  return (
    <>
      <Head>
        <title>Hyper mint</title>
        <meta name="description" content="Hyper mint" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box 
      w="full"
      h="calc(100vh)"
      bgImage={connected ? "" : "url('/home-background.svg')"}
      backgroundPosition="center">
       <Stack w="full" h="calc(100vh)" justify="center">
					{ /* NavBar */ }
          <NavBar/>
          <Spacer />
          <Center>
          <Disconnected/>
						{ /* If connected, the second view, otherwise the first */ }
                </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </>
  )
}
