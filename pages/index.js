import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
  return (
    <>
    <Head>
      <title>Next Title</title>
      <meta name="keywords" content="next,javascript,react,nextjs" />
      <meta name="description" content="Next.js project by Viktor Poliushko" />
      <meta charSet='utf-8' />
    </Head>
    <h1>Hello Next.js</h1>
    <p><Link href={'/about'}><a>About</a></Link></p>
    <p><Link href={'/posts'}><a>Posts</a></Link></p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </>
  )
}