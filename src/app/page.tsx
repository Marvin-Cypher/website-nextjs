import HeroSection from '../components/home/HeroSection'
import TrustCycleSection from '../components/home/TrustCycleSection'
import TrustedUsersSection from '../components/home/TrustedUsersSection'
import ConfidentialAIModelsSection from '../components/home/ConfidentialAIModelsSection'
import GPUComparisonSection from '../components/home/GPUComparisonSection'
import PrivateCloudComputeSection from '../components/home/PrivateCloudComputeSection'
import ProvenAtScaleSection from '../components/home/ProvenAtScaleSection'
import RealWorldUseCasesSection from '../components/home/RealWorldSuccessStoriesSection'
import FAQSection from '../components/home/FAQSection'
import FinalCTASection from '../components/home/FinalCTASection'

// export const metadata: Metadata = {
//   alternates: {
//     canonical: 'https://phala.network',
//     types: {
//       'application/rss+xml': [
//         { url: 'https://phala.network/rss.xml', title: 'Phala News' },
//       ],
//       'application/atom+xml': [
//         { url: 'https://phala.network/atom.xml', title: 'Phala News' },
//       ],
//     },
//   },
// }

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-muted flex flex-col items-center">
      <HeroSection />
      <TrustCycleSection />
      <TrustedUsersSection />
      <ConfidentialAIModelsSection />
      <GPUComparisonSection />
      <PrivateCloudComputeSection />
      <ProvenAtScaleSection />
      <RealWorldUseCasesSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  )
}
