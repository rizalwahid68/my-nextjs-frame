import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log(document.head.innerHTML);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://my-nextjs-frame.vercel.app/park-2.png" />
        <meta property="og:image" content="https://my-nextjs-frame.vercel.app/park-2.png" />
        <meta property="fc:frame:post_url" content="https://my-nextjs-frame.vercel.app/api/basic?id=1" />
        <meta property="fc:frame:button:1" content="Start" />
        <meta property="fc:frame:button:1:url" content="https://my-nextjs-frame.vercel.app/park-3.png" />
        <title>Simple Frame</title>
      </Head>
      <h1>Simple Warpcast Frame</h1>
    </>
  );
}
