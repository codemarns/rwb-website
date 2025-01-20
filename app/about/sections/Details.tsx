"use client";

import { Section } from "@/app/components/Section";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { MissionVision } from "../components/MissionVision";
import Image from "next/image";

export const Details = () => {
  return (
    <Section
      id="features-section"
      className="relative !pt-0 flex items-center justify-center"
    >
      <Container className="max-w-screen-2xl p-4 xs:p-10 sm:p-20 bg-white">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-24">
          {/* <div className="relative w-full pb-[133.33%]"></div> */}
          <div className="p-6 xs:p-10">
            <div className="relative w-full max-w-screen-xs mx-auto border shadow-[-24px_24px_0px_0px_rgba(71,75,101,0.1)] xs:shadow-[-40px_40px_0px_0px_rgba(71,75,101,0.1)]">
              <div className="relative w-full pb-[133.33%]" />
              <div className="absolute inset-0 h-full w-full flex items-center justify-center">
                <Image
                  fill
                  priority
                  // width={423}
                  // height={564}
                  alt={""}
                  src={"/about-us.png"}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:gap-8 max-w-3xl mx-auto py-8 text-center xl:text-left">
            <Typography
              bold
              size="LG"
              as="default"
              theme="light"
              className="leading-relaxed"
            >
              RWB Solutions Internationals was founded to transform the iGaming
              industry by providing innovative, scalable solutions for operators
              worldwide. Headquartered in Asia with global aspirations, we
              collaborate with industry leaders like Evolution and PragmaticPlay
              to deliver unparalleled content and operational efficiency.
            </Typography>
            <Typography
              bold
              size="LG"
              as="default"
              theme="light"
              className="leading-relaxed"
            >
              Partner with RWB Solutions International and take your iGaming
              business to the next level with cutting-edge tools, expert
              guidance, and unmatched scalability.
            </Typography>

            <div className="pt-2 md:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MissionVision
                id="mission"
                icon="/mission.svg"
                title="Mission"
                description="Empowering iGaming operators with cutting-edge technology and global expertise."
              />

              <MissionVision
                id="vision"
                icon="/vision.svg"
                title="Vision"
                description="To redefine iGaming platforms with innovation and adaptability."
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
