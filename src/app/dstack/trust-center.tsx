import { FileText, Globe, HardDrive, Shield } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Feature6 = () => {
  return (
    <section className="py-24 max-w-(--breakpoint-2xl) mx-auto">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Trust Center - Complete Transparency
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Every deployed application comes with a comprehensive Trust Center
            for full verification
          </p>
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-3xl font-semibold lg:text-5xl">
              🔍 Examine Everything
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-lg">
              Review the exact source code running in your TEE environment with
              detailed specs and cryptographic proof
            </p>
            <ul className="ml-4 space-y-4 text-left">
              <li className="flex items-center gap-3">
                <FileText className="size-5" />
                <div>
                  <h4 className="font-medium">Source Code Verification</h4>
                  <p className="text-sm text-muted-foreground">
                    Review the exact source code running in your TEE environment
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <HardDrive className="size-5" />
                <div>
                  <h4 className="font-medium">Hardware Information</h4>
                  <p className="text-sm text-muted-foreground">
                    Detailed specs of the TEE hardware running your application
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="size-5" />
                <div>
                  <h4 className="font-medium">Network Configuration</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete network topology and security settings
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="size-5" />
                <div>
                  <h4 className="font-medium">Attestation Report</h4>
                  <p className="text-sm text-muted-foreground">
                    Cryptographic proof of execution environment integrity
                  </p>
                </div>
              </li>
            </ul>
            <Button className="mt-6" asChild>
              <a
                href="https://tee-visualization.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More →
              </a>
            </Button>
          </div>

          <Card className="group mx-auto mt-24 h-100 w-full rounded-4xl border border-border bg-muted/30 p-2 shadow-none md:h-190 md:p-3">
            <CardContent className="size-full rounded-3xl border-2 border-background bg-muted">
              <Image
                width={858}
                height={462}
                src="/dstack/trust-center.png"
                alt="Trust Center Interface"
                className="h-full w-full rounded-md object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export { Feature6 }
