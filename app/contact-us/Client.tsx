"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/app/components/Button";
import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";

export const Client = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company_name: "",
    inquiry_type: "",
    message: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // do something here...
    alert("Successfully submitted!");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const inputCls =
    "outline-none p-2 sm:p-3 bg-white border border-transparent focus:border-primary-500 focus:outline focus:outline-offset-0 focus:outline-4 focus:outline-primary-500/10 rounded-md shadow-sm transition-all ease-out duration-200";

  return (
    <Section
      id="contact-us"
      className="relative py-28 md:py-32 xl:py-36 flex items-center justify-center bg-black"
    >
      <Image
        width={1132}
        height={722}
        alt="background image"
        src={"/single-blurred-pattern.svg"}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain opacity-50 blur-[300px]"
      />
      <Image
        width={1920}
        height={1080}
        alt="bg pattern image blur"
        src={"/bg-pattern-blur.svg"}
        className="absolute bottom-0 left-0 right-0 h-auto w-full object-contain"
      />

      <Container className="relative z-[2] max-[1280px]:max-w-3xl grid grid-cols-1 xl:grid-cols-[minmax(36rem,_1fr),_36rem] gap-8">
        <div className="px-4 xs:px-8 py-6 sm:px-20 sm:py-16 space-y-6 sm:space-y-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
          <div className="">
            <Heading as="h3" className="text-accent-500">
              Get In Touch
            </Heading>
            <Typography bold as="default" size="LG" theme="light">
              Let’s Discuss Your iGaming Vision.
            </Typography>
          </div>

          <form
            className="grid grid-cols-2 gap-3 xs:gap-4"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="flex flex-col gap-0 sm:gap-1 col-span-2 sm:col-span-1">
              <label htmlFor="firstname" className="text-neutral-500">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={state.firstname}
                onChange={handleInputChange}
                className={inputCls}
              />
            </div>

            <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
              <label htmlFor="lastname" className="text-neutral-500">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={state.lastname}
                onChange={handleInputChange}
                className={inputCls}
              />
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label htmlFor="email" className="text-neutral-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={state.email}
                onChange={handleInputChange}
                className={inputCls}
              />
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label htmlFor="company_name" className="text-neutral-500">
                Company Name
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                placeholder="Company Name"
                value={state.company_name}
                onChange={handleInputChange}
                className={inputCls}
              />
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label htmlFor="inquiry_type" className="text-neutral-500">
                Inquiry Type
              </label>
              <input
                type="text"
                id="inquiry_type"
                name="inquiry_type"
                placeholder="Inquiry Type"
                value={state.inquiry_type}
                onChange={handleInputChange}
                className={inputCls}
              />
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label htmlFor="message" className="text-neutral-500">
                Message
              </label>
              <textarea
                rows={5}
                cols={30}
                id="message"
                name="message"
                placeholder="Your message here..."
                className={inputCls}
                value={state.message}
                onChange={handleTextAreaChange}
              />
            </div>
            <Button
              type="submit"
              variant="solid"
              className="w-full sm:w-60 mt-3 col-span-2 sm:col-auto"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="hidden xl:flex items-center justify-center">
          <Image
            width={620}
            height={738}
            alt="contact image"
            src={"/contact-img.png"}
            className="rotate-6 drop-shadow-2xl"
          />
        </div>
      </Container>
    </Section>
  );
};
