// src/app/page.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://my-nextjs-frame.vercel.app/park-2.png" />
        <title>Simple Frame</title>
      </Head>
      <h1>Simple Warpcast Frame</h1>
    </>
  );
}
