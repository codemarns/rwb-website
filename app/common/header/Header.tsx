"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/cn";
import { Button } from "@/app/components/Button";
import { Typography } from "@/app/components/Typography";
import { usePathname, useRouter } from "next/navigation";
import { menu } from "@/app/data";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-24 w-full flex items-center justify-center">
      <div className="CONTAINER w-full max-w-[1728px] mx-auto p-4 flex items-center justify-between">
        <Link href={"/"}>
          <Image alt="rwb logo" src={"/rwb-logo.svg"} width={154} height={44} />
        </Link>

        <div className="flex items-center justify-center gap-5">
          <nav>
            <ul className="flex items-center justify-center gap-2 uppercase">
              {menu.map((item, index) => (
                <li key={index} className="flex">
                  <Typography
                    as="link"
                    slug={item.slug}
                    className={cn(
                      "w-auto px-3 py-2",
                      pathname === item.slug ? "text-accent-500" : "text-white"
                    )}
                  >
                    {item.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </nav>
          <Button onClick={() => router.push("/contact-us")}>
            Request A Demo
          </Button>
        </div>
      </div>
    </header>
  );
};
