import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
   <div>
    <h1>Homepage</h1>
    <ul>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
      <li><Link href="/dummy">Go to dummy</Link></li>
    </ul>
   </div>
  )
}

export default Home
