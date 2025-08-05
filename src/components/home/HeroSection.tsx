import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <div className="w-full bg-background pt-24 h-[750px] md:h-[900px] xl:h-[680px]">
      <div className="relative w-full max-w-screen-2xl mx-auto h-full">
        <div className="overflow-hidden absolute scale-[40%] sm:scale-50 md:scale-75 lg:scale-100 right-0 bottom-0 origin-bottom-right">
          <div className="translate-x-[4.29%] translate-y-[14.93%] w-[1025px] h-[1000px] overflow-hidden">
            <div className="w-[540px] h-[538px] bg-lime-300/60 rounded-full blur-[100px] absolute bottom-[197px] right-[-44px]" />
            <div className="w-96 h-96 bg-amber-300/60 rounded-full blur-[100px] absolute bottom-[-22px] right-[428px]" />
            <div className="absolute w-[1025px] h-[690px] right-0 bottom-0 pointer-events-none bg-no-repeat bg-center bg-contain bg-[url('/35503d92787ce72572e1635553e0387a404073fc.png')]" />
          </div>
        </div>

        <div className="ml-3 sm:ml-8 lg:ml-20 p-4 lg:pt-16">
          <h1 className="font-bold text-3xl/tight md:text-5xl/tight">
            The New Cloud for
            <br />
            Confidential AI
          </h1>

          <div className="max-w-lg mt-8 md:mt-16 space-y-4">
            <h2 className="font-semibold text-xl md:text-2xl">
              Build AI People Can Trust
            </h2>
            <p className="text-sm sm:text-base font-blog">
              Hardware-secured compute platform that delivers verifiable AI with
              enterprise-grade privacy. Deploy confidential AI models with TEE
              protection in minutes, not months.
            </p>
          </div>

          <div className="flex flex-row gap-3 items-center mt-12">
            <Button size="lg" variant="default">
              Get started
            </Button>
            <Button size="lg" variant="outline">
              Request a demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
