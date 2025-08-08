import { Bot, Container, Lock, Shield } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Hero24 = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto">
      <div className="@container container">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/dstack/logo.svg"
            alt="dstack Logo"
            className="mx-auto mb-5 h-16 md:mb-6"
            width={410}
            height={106}
          />
          <Badge variant="outline" className="mb-3">
            Linux Foundation Project
          </Badge>
          <h1 className="mt-4 text-4xl font-semibold text-balance lg:text-5xl">
            Open-Source Confidential Computing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Deploy secure applications with hardware-guaranteed privacy using
            TEE technology. Built for confidential AI, private cloud compute,
            and secure data processing.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button className="mt-4" size="lg" asChild>
              <a
                href="https://github.com/Dstack-TEE/dstack"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="mt-4" asChild>
              <a
                href="https://cloud.phala.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Don't own a TEE yet?
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border bg-input @md:grid-cols-2 @lg:grid-cols-4">
          <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
            <Container className="size-6 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold md:text-base">
                Developer Friendly
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Docker support means no code changes required. Package your
                existing applications and deploy them securely in minutes.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
            <Bot className="size-6 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold md:text-base">
                Confidential AI Ready
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Purpose-built for confidential AI with TEE GPU support. Run
                private AI models on NVIDIA GPUs with hardware-guaranteed
                confidentiality.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
            <Shield className="size-6 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold md:text-base">
                Enterprise Security
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Open source, independently audited by security experts, with
                secure services out-of-the-box.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
            <Lock className="size-6 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold md:text-base">
                Verifiable Computing
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Every application comes with cryptographic attestation and a
                Trust Center for real-time verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero24 }
