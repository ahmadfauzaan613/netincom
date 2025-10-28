import { portfolioItems2 } from '@/data/portfolio'
import PortfolioDetailClient from './PortfolioDetailClient'

export async function generateStaticParams() {
  return portfolioItems2.map((item) => ({
    id: item.id.toString(),
  }))
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = portfolioItems2.find((p) => p.id === Number(id))
  return <PortfolioDetailClient item={item} />
}
