import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
   <div>
    <h1>Dummy page</h1>
    <ul>
      <li><Link href="/">Go to homepage</Link></li>
    </ul>
   </div>
  )
}

export default Home
