import CTASection from "@/components/home/CTAsection";
import OurPartners from "@/components/home/OurPartners";
import HeroSection from "@/components/services/blockchain/HeroSection";
import BlockchainInfo from "@/components/services/blockchain/BlockChainInfo";
import BlockchainBenefits from "@/components/services/blockchain/BlockchainBenefits";

export default function Page() {
  return (
    <>
      <HeroSection />
      <BlockchainInfo />
      <BlockchainBenefits />
      <OurPartners />
      <CTASection />
    </>
  );
}
