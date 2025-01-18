"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/Button";
import { Container } from "../components/Container";
import { Typography } from "@/app/components/Typography";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { header_menu } from "@/app/data";
import { Section } from "../components/Section";

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className="h-auto w-full bg-gradient-to-b from-primary-950 to-neutral-950">
      <Section id="footer" className="bg-black/20">
        {/* Grid Column: START */}
        <Container className="grid grid-cols-12 lg:gap-x-4 gap-y-10">
          {/* Grid: START */}
          <div className="col-start-1 col-end-13 lg:col-end-6 h-auto space-y-5">
            <Link href={"/"}>
              <Image
                priority
                alt="rwb logo"
                src={"/rwb-logo-light.svg"}
                width={112}
                height={32}
              />
            </Link>

            <Typography as="default" className="lg:max-w-sm">
              At RWB Solutions International, we strive to be your premier
              partner in the iGaming industry. Combining innovative technology,
              tailored flexibility, and a wealth of expertise, we empower
              operators with dynamic tools to thrive in a competitive market.
            </Typography>

            <Button
              className="sm:!mt-6 md:!mt-8 lg:!mt-10"
              onClick={() => router.push("/contact-us")}
            >
              Get Started
            </Button>
          </div>

          <div className="col-start-1 lg:col-start-7 col-end-13 sm:col-end-6 lg:col-end-9 h-auto space-y-5">
            <Typography as="default" size="LG" bold>
              Pages
            </Typography>
            <div className="w-full grid grid-cols-2 sm:grid-cols-1 gap-3">
              {header_menu.map((item, index) => (
                <li key={index} className="flex">
                  <Typography
                    as="link"
                    size="SM"
                    slug={item.slug}
                    className="w-auto text-primary-400 hover:text-primary-200 py-0.5"
                  >
                    {item.name}
                  </Typography>
                </li>
              ))}
            </div>
          </div>

          <div className="col-start-1 sm:col-start-6 lg:col-start-9 col-end-13 h-auto flex flex-col sm:justify-between gap-12">
            <div className="space-y-5">
              <Typography as="default" size="LG" bold>
                Contact Information
              </Typography>
              <div className="w-full grid grid-cols-1 gap-3 text-primary-400">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <MapPinIcon className="size-5 block" />
                  </div>
                  <Typography
                    as="default"
                    size="SM"
                    className="w-auto text-primary-400 py-0.5"
                  >
                    Sea Urchin Street, San Pedro Town, Ambergris Caye, Belize
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <EnvelopeIcon className="size-5 block" />
                  </div>
                  <Typography
                    as="default"
                    size="SM"
                    className="w-auto text-primary-400 py-0.5"
                  >
                    info@rwbinter.com
                  </Typography>
                </div>
              </div>
            </div>

            <div className="">
              <Typography
                as="default"
                size="SM"
                className="w-auto text-primary-400 text-center sm:text-left"
              >
                Copyright © 2024 <br className="sm:hidden" /> RWB Solutions
                International
              </Typography>
            </div>
          </div>
          {/* Grid: END */}
        </Container>
        {/* Grid Column: END */}
      </Section>
    </footer>
  );
};
