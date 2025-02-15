import Head from 'next/head'


import socketClient from '@/socket'
import { useEffect } from 'react'
import ChatUI from '@/components/chat/ChatUi'

export default function Home() {
  useEffect(() => {
    const client = socketClient();
    client.on("chat", (data) => { 
      console.log(data);
    });
  }, [])
  return (
    <>
      <Head>
        <title>Chat app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ChatUI/>
    </>
  )
}
