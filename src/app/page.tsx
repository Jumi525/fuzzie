import { Button } from "@/components/ui/button";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/global/3dCard";
import { ContainerScroll } from "@/components/ui/global/containerScrollAnimation";
import { HeroParallax } from "@/components/ui/global/heroParallax";
import { InfiniteMovingCards } from "@/components/ui/global/infinteMovingCards";
import { LampComponent } from "@/components/ui/global/lampComponent";
import Navbar from "@/components/ui/global/navbar";
import { clients, products } from "@/lib/constants";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-h-max w-full rounded-md overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px] h-full">
          <ContainerScroll
            titleComponent={
              <div className="flex item-center justify-center flex-col w-full">
                <Button
                  size="lg"
                  className="max-w-max mx-auto md:mr-auto md:ml-0 px-4 sm:px-8 py-8 mb-1 md:mb-3 text-xl sm:text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1f1f1f] hover:bg-white transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className=" text-3xl sm:text-5xl -mb-5 md:mb-7 md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work with Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="mt-[40px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section className="min-h-max">
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mb-4 px-4">
        <LampComponent />
        <ul className="flex flex-wrap item-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Hobby
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className=" text-sm text-neutral-500 dark:text-neutral-300 max-w-sm mt-2"
              >
                Get a glimpse of what our software is capable of. just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 Task per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-steps Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between item-center mt-8">
                <CardItem
                  translateZ="20"
                  as={"button"}
                  className=" text-xs rounded-xl px-4 py-2 font-normal dark:text-white"
                >
                  Try Now
                </CardItem>
                <CardItem
                  translateZ="20"
                  as={"button"}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Pro Plan
                <h2 className="text-6xl">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className=" text-sm text-neutral-500 dark:text-neutral-300 max-w-sm mt-2"
              >
                Get a glimpse of what our software is capable of. just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 Task per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-steps Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between item-center mt-8">
                <CardItem
                  translateZ="20"
                  as={"button"}
                  className=" text-xs rounded-xl px-4 py-2 font-normal dark:text-white"
                >
                  Try Now
                </CardItem>
                <CardItem
                  translateZ="20"
                  as={"button"}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Ulimited
                <h2 className="text-6xl">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className=" text-sm text-neutral-500 dark:text-neutral-300 max-w-sm mt-2"
              >
                Get a glimpse of what our software is capable of. just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 Task per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-steps Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between item-center mt-8">
                <CardItem
                  translateZ="20"
                  as={"button"}
                  className=" text-xs rounded-xl px-4 py-2 font-normal dark:text-white"
                >
                  Try Now
                </CardItem>
                <CardItem
                  translateZ="20"
                  as={"button"}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </ul>
      </section>
    </main>
  );
}
