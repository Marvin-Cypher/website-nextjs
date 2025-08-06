import HeroSection from './_components/HeroSection'
import TrustSteps from './_components/trust-steps'
import TrustedUsersSection from './_components/TrustedUsersSection'
import ConfidentialAIModelsSection from './_components/ConfidentialAIModelsSection'
import GPUComparisonSection from './_components/GPUComparisonSection'
import PrivateCloudComputeSection from './_components/PrivateCloudComputeSection'
import ProvenAtScaleSection from './_components/ProvenAtScaleSection'
import RealWorldUseCasesSection from './_components/RealWorldSuccessStoriesSection'
import FAQSection from './_components/FAQSection'
import FinalCTASection from './_components/FinalCTASection'

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
    <div className="w-full min-h-screen flex flex-col items-center">
      <HeroSection />
      <TrustSteps />
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
