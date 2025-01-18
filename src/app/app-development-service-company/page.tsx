import ConnectBanner from '@/components/connect/ConnectBanner'
import OurServices from '@/components/connect/OurServices'
import ProductDevelopment from '@/components/connect/ProductDevelopment'
import TechnologyStacks from '@/components/connect/TechnologyStacks'
import TesomoniallConnect from '@/components/connect/TesomoniallConnect'
import TrustedClients from '@/components/connect/TrustedClients'
import WhyChooseUs from '@/components/connect/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <div>
    <ConnectBanner />
    <TrustedClients />
    <OurServices />
    <TechnologyStacks />
    <WhyChooseUs />
    <ProductDevelopment />
    <TesomoniallConnect />
  </div>
  )
}
