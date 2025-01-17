"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/cn";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/app/components/Button";
import { Container } from "../components/Container";
import { Typography } from "@/app/components/Typography";
import { usePathname, useRouter } from "next/navigation";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { header_menu } from "@/app/data";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [float, setFloat] = useState(false);
  const [position, setPosition] = useState(0);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // header animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > position) {
        setPosition(16);
        setFloat(true);
      } else {
        setPosition(0);
        setFloat(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  // Close the pop-up when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setOpenSideMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 h-24 w-full p-4 flex items-center justify-center transition-all ease-out duration-500"
          // !float ? " h-24" : "h-auto"
        )}
        style={{ top: position }}
      >
        <Container
          className={cn(
            "max-w-[1728px] p-4 flex items-center justify-between gap-5 rounded-xl transition-all",
            !float ? "" : "bg-white/80 shadow-lg backdrop-blur-xl"
          )}
        >
          <Link href={"/"}>
            {!float ? (
              <Image
                alt="rwb logo"
                src={"/rwb-logo-light.svg"}
                width={140}
                height={40}
                priority
              />
            ) : (
              <Image
                alt="rwb logo"
                src={"/rwb-logo-dark.svg"}
                width={140}
                height={40}
                priority
              />
            )}
          </Link>

          <div className="flex items-center justify-center gap-4 lg:gap-5">
            <nav className="ml-auto hidden lg:flex">
              <ul className="flex items-center justify-center gap-2 uppercase">
                {header_menu.map((item, index) => (
                  <li key={index} className="flex">
                    <Typography
                      as="link"
                      slug={item.slug}
                      className={cn(
                        "w-auto px-2 xl:px-3 py-2 transition-all",
                        pathname === item.slug
                          ? "text-accent-500"
                          : !float
                          ? "text-white hover:text-accent-500"
                          : "text-neutral-900 hover:text-accent-500"
                      )}
                    >
                      {item.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              className="hidden sm:flex lg:ml-auto"
              onClick={() => router.push("/contact-us")}
            >
              Request A Demo
            </Button>

            <div className="w-10 h-10 lg:hidden flex items-center justify-center bg-accent-500 rounded">
              <Bars3BottomRightIcon
                className="size-8 block text-white"
                onClick={() => setOpenSideMenu(!openSideMenu)}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <aside
        ref={mobileMenuRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-96 h-full bg-white flex flex-col items-center justify-center gap-32 transition-all ease-out duration-500",
          openSideMenu ? "right-0" : "-right-96"
        )}
      >
        <div className="absolute top-7 right-8 w-10 h-10 flex items-center justify-center hover:bg-accent-500/10 rounded">
          <XMarkIcon
            className="size-10 block text-accent-500"
            onClick={() => setOpenSideMenu(!openSideMenu)}
          />
        </div>

        <ul className="flex flex-col items-center justify-center gap-2 uppercase">
          {header_menu.map((item, index) => (
            <li key={index} className="flex">
              <Typography
                bold
                as="link"
                size="XXL"
                slug={item.slug}
                className={cn(
                  "w-auto px-2 xl:px-3 py-2 transition-all",
                  pathname === item.slug
                    ? "text-accent-500"
                    : "text-neutral-900 hover:text-accent-500"
                )}
                onClick={() => setOpenSideMenu(false)}
              >
                {item.name}
              </Typography>
            </li>
          ))}
        </ul>

        <Button
          className="hidden sm:flex lg:ml-auto"
          onClick={() => router.push("/contact-us")}
        >
          Request A Demo
        </Button>
      </aside>
    </>
  );
};
