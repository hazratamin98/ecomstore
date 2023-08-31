import Image from 'next/image'
import { Inter } from 'next/font/google'

//Components
import Layout from '@/components/layout'
import HomeContent from '@/contents/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <HomeContent />

    </Layout>
  )
}
