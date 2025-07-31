import React from 'react'

const faqData = [
  {
    question: 'What is Trusted Execution Environment (TEE)?',
    answer:
      'TEE is a secure area inside a main processor that guarantees code and data protection. It provides hardware-level isolation, ensuring that sensitive operations are performed in a secure environment that cannot be accessed by the operating system, hypervisor, or other applications.',
  },
  {
    question: 'How does confidential AI protect sensitive data?',
    answer:
      'Confidential AI ensures that sensitive data and AI models remain private and secure during processing, using hardware-based security measures like TEE to prevent unauthorized access.',
  },
  {
    question: 'Is Phala compatible with existing AI frameworks?',
    answer:
      'Yes, Phala supports popular AI frameworks like TensorFlow, PyTorch, and Hugging Face, allowing you to run existing models with enhanced security.',
  },
  {
    question: 'What are the performance implications?',
    answer:
      'Our confidential AI platform typically adds only 5-10% overhead compared to standard AI deployments, while providing enterprise-grade security.',
  },
  {
    question: 'How can I verify the security of my AI workloads?',
    answer:
      "Phala provides cryptographic attestations that allow you to verify the integrity of your AI workloads in real-time, ensuring they're running in a genuine secure environment.",
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is easy! Sign up for a free account, choose your AI model, and deploy in minutes. Our documentation provides step-by-step guides.',
  },
]

export default function FAQSection() {
  return (
    <section className="w-full pt-8 sm:pt-12 px-2 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-semibold text-3xl sm:text-4xl text-[#1e2119] mb-8 sm:mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4 mb-8 sm:mb-12">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-sm border-l-4 border-[#c4f144]"
            >
              <div className="p-4 sm:p-8 flex flex-col gap-4 sm:gap-6">
                <h3 className="font-semibold text-xl sm:text-2xl text-[#1e2119]">
                  {faq.question}
                </h3>
                <p className="text-[#61645b] font-blog text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button className="bg-[#c4f144] hover:bg-[#b8e33a] justify-center py-3 rounded-full w-44 transition-colors font-semibold text-sm text-[#1e2119] text-[14px] text-center text-nowrap">
            Contact support
          </button>
          <button className="border border-[#1e2119] hover:border-[#2a2d22] justify-center py-3 rounded-full w-44 transition-colors font-semibold text-sm text-[#1e2119] text-[14px] text-center text-nowrap">
            View documentation
          </button>
        </div>
      </div>
    </section>
  )
}
