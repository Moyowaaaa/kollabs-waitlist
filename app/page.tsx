"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement | null>(null);
  const heroDescRef = useRef<HTMLParagraphElement | null>(null);
  const heroFormRef = useRef<HTMLDivElement | null>(null);
  const heroSocialRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);
  const handRef = useRef<HTMLDivElement | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const elements = [
      heroTitleRef.current,
      heroSubtitleRef.current,
      heroDescRef.current,
      heroFormRef.current,
      heroSocialRef.current,
    ];

    const svgElements = [
      handRef.current,
      desktopRef.current,
      laptopRef.current,
    ];

    gsap.set(pageRef.current, {
      opacity: 0,
      willChange: "opacity",
    });

    elements.forEach((el) => {
      if (el) {
        gsap.set(el, {
          opacity: 0,
          y: 30,
          force3D: true,
          willChange: "transform, opacity",
        });
      }
    });

    gsap.set(handRef.current, {
      opacity: 0,
      x: -100,
      rotation: -15,
      force3D: true,
      willChange: "transform, opacity",
    });

    gsap.set(desktopRef.current, {
      opacity: 0,
      x: 100,
      rotation: 15,
      force3D: true,
      willChange: "transform, opacity",
    });

    gsap.set(laptopRef.current, {
      opacity: 0,
      y: 100,
      rotation: -10,
      force3D: true,
      willChange: "transform, opacity",
    });

    const masterTimeline = gsap.timeline({
      defaults: {
        ease: "power2.out",
        force3D: true,
      },
      onComplete: () => {
        elements.forEach((el) => {
          if (el) gsap.set(el, { willChange: "auto" });
        });
        svgElements.forEach((el) => {
          if (el) gsap.set(el, { willChange: "auto" });
        });
        gsap.set(pageRef.current, { willChange: "auto" });
      },
    });

    masterTimeline
      .to(pageRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power1.inOut",
      })
      .to(
        handRef.current,
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      )
      .to(
        desktopRef.current,
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
        },
        "-=1.1"
      )
      .to(
        laptopRef.current,
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
        },
        "-=1.0"
      )
      // Animate hero content
      .to(
        heroTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.8"
      )
      .to(
        heroSubtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        heroDescRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(
        heroFormRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .to(
        heroSocialRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.3"
      );

    return () => {
      // Cleanup
      masterTimeline.kill();
    };
  }, []);

  return (
    <div
      className="min-h-screen h-screen overflow-hidden max-h-screen bg-[white] flex items-center justify-center relative"
      ref={pageRef}
      style={{ willChange: "opacity" }}
    >
      <div className="absolute w-full h-full left-0 top-0 flex justify-center pointer-events-none">
        <div className="relative left-0 top-0 w-full max-w-[90rem]">
          <div
            ref={handRef}
            className="absolute left-0 w-[20rem] h-[20rem] top-18"
            style={{ transform: "translateZ(0)" }}
          >
            <Image src={"/images/hand.svg"} alt="" fill />
          </div>

          <div
            ref={desktopRef}
            className="absolute right-0 w-[20rem] h-[20rem] top-18"
            style={{ transform: "translateZ(0)" }}
          >
            <Image src={"/images/desktop.svg"} alt="" fill />
          </div>

          <div
            ref={laptopRef}
            className="absolute right-0 w-[20rem] bottom-0 h-[20rem]"
            style={{ transform: "translateZ(0)" }}
          >
            <Image src={"/images/laptop.svg"} alt="" fill />
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full h-screen pointer-events-none">
        <div className="mx-auto h-10/12">
          <Image src={"/images/grid.svg"} alt="" fill />
        </div>
      </div>

      <div className="w-full max-w-full mx-auto absolute top-2 flex items-center justify-center text-[#211E1E] font-semibold text-[0.875rem] font-sora">
        Logo
      </div>

      <div className="flex flex-col gap-6 w-max h-max items-center">
        <div className="flex flex-col w-full items-center gap-2">
          <h1
            ref={heroTitleRef}
            className="font-sora font-bold text-[3rem] h-max max-h-max"
            style={{ transform: "translateZ(0)" }}
          >
            Where Creative Ideas
          </h1>
          <p
            ref={heroSubtitleRef}
            className="font-grand-hotel font-normal text-[3rem] text-[#FF8D28] leading-[1.25rem]"
            style={{ transform: "translateZ(0)" }}
          >
            Find Their Team.
          </p>
        </div>

        <p
          ref={heroDescRef}
          className="text-[#808080] max-w-[30rem] mx-auto"
          style={{ transform: "translateZ(0)" }}
        >
          Connect with writers, artists, developers, and designers to bring your
          ideas to life — no funding, no barriers, just collaboration.
        </p>

        <div
          ref={heroFormRef}
          className="px-4 py-6 w-full border-2 bg-white z-10 border-[#E9E9E9E9] flex flex-col gap-4 rounded-[1.875rem] shadow-lg"
          style={{ transform: "translateZ(0)" }}
        >
          <h1 className="font-semibold text-[1.125rem] leading-[1.75rem] text-[#211E1E]">
            Join the waitlist
          </h1>
          <p className="text-[#808080] leading-[0.625rem]">
            Sign up to be the first to use KoLab
          </p>

          <div className="flex cursor-pointer items-center bg-[#E6E4FF] rounded-full p-1 mt-2 gap-2 z-20">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 border-0 outline-none focus:ring-0 focus:border-0 active:ring-0 active:border-0 focus:outline-none shadow-none"
            />
            <Button className="bg-[#6366F1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#5855EB] transition-colors min-h-[3rem] flex items-center justify-center">
              Join us →
            </Button>
          </div>
        </div>

        <div
          ref={heroSocialRef}
          className="flex gap-4 items-center"
          style={{ transform: "translateZ(0)" }}
        >
          <p className="font-sora font-light">Follow us</p>
          <Image src={"/images/Xicon.svg"} alt="" width={16} height={16} />
          <Image src={"/images/linkedin.svg"} alt="" width={16} height={16} />
        </div>
      </div>

      <div className="w-full max-w-full mx-auto absolute bottom-2 flex items-center justify-center text-[#211E1E] font-semibold text-[0.875rem] font-sora">
        &copy; KoLabs {currentYear}
      </div>
    </div>
  );
}
