import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  console.log('NEXT_PUBLIC_SITE_URL:', siteUrl); // Debugging

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${siteUrl}/park-2.png`} />
        <meta property="og:image" content={`${siteUrl}/park-2.png`} />
        <meta property="fc:frame:post_url" content={`${siteUrl}/api/basic?id=1`} />
        <meta property="fc:frame:button:1" content="Start" />
        <meta property="fc:frame:button:1:url" content={`${siteUrl}/park-3.png`} />
        <title>Simple Frame</title>
      </Head>
      <h1>Simple Warpcast Frame</h1>
      <Link href={`${siteUrl}/park-3.png`} legacyBehavior>
        <a>Start</a>
      </Link>
    </>
  );
}
