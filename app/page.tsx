"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import api from "@/lib/api";
import { toast } from "sonner";
import { showToast } from "@/utils/toasts";

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

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      await api.post("/waitlist", { email });
      showToast.success("You've been added to the waitlist!");
      setEmail("");
    } catch (error) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      const message =
        axiosError?.response?.data?.message ||
        "Something went wrong. Please try again.";
      showToast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

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
    <>
      {/* Font preloads */}
      <link
        rel="preload"
        href="/fonts/GrandHotel-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Sora-Light.ttf"
        as="font"
        crossOrigin=""
      />

      <div
        className="min-h-screen h-screen overflow-hidden max-h-screen bg-[#201f1d] flex flex-col items-center relative"
        ref={pageRef}
        style={{ willChange: "opacity" }}
      >
        <div className="absolute left-0 opacity-[20%] top-0 w-full h-[50rem] pointer-events-none -z-5">
          <div className="mx-auto h-6/12">
            <Image src={"/images/grid.svg"} alt="" fill />
          </div>
        </div>

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] pointer-events-none rounded-full z-0"
          style={{
            background: "linear-gradient(135deg, #6352F4 0%, #8D27F1 100%)",
            opacity: 0.4,
            filter: "blur(120px)",
          }}
        ></div>

        <div
          className="w-full max-w-full
        mx-auto absolute top-[3.125rem] flex items-center justify-center text-[#211E1E] font-semibold text-[0.875rem] font-sora"
        >
          <div className="flex gap-2 items-center">
            <Image
              src={"/images/purple_logo.svg"}
              alt=""
              width={152}
              height={22}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-max h-max items-center mt-[12.8125rem]">
          <div className="flex flex-col w-full items-center gap-2">
            <h1
              ref={heroTitleRef}
              className="font-sora font-bold text-[1.5rem] md:text-[3rem] h-max max-h-max text-white"
              style={{ transform: "translateZ(0)" }}
            >
              Where Creative Ideas
            </h1>
            <p
              ref={heroSubtitleRef}
              className="font-grand-hotel font-normal text-[1.5rem] md:text-[3rem] text-[#FF8D28] leading-[1.25rem]"
              style={{ transform: "translateZ(0)" }}
            >
              Find Their Team.
            </p>
          </div>

          <p
            ref={heroDescRef}
            className="text-[#D1D1D1] text-center md:text-left max-w-[20rem] md:max-w-[30rem] mx-auto"
            style={{ transform: "translateZ(0)" }}
          >
            Connect with writers, artists, developers, and designers to bring
            your ideas to life — no funding, no barriers, just collaboration.
          </p>

          <div
            className="flex cursor-pointer items-center rounded-full p-1 mt-2 gap-2 z-20 md:w-full"
            style={{
              background: "rgba(230, 228, 255, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 border-0 outline-none
              bg-[none]
              focus:ring-0 focus:border-0 active:ring-0 active:border-0 focus:outline-none shadow-none  text-white placeholder:text-gray-400"
            />
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#6155F5] text-white px-6 py-2 rounded-full text-[1rem] font-medium hover:bg-[#5855EB] transition-colors min-h-[3rem] flex items-center justify-center disabled:opacity-50"
            >
              <span className="hidden md:flex">
                {isLoading ? "Joining..." : "Notify me"}
              </span>{" "}
              {isLoading ? "" : "→"}
            </Button>
          </div>
        </div>

        <p
          className="z-5 text-[8rem] md:text-[18vw] whitespace-nowrap inline-block font-bold text-white opacity-[5%] w-full  absolute bottom-24 md:bottom-6
        
        -left-[20rem]
        md:-left-16"
        >
          Coming Soon
        </p>

        <div className="w-full max-w-full mx-auto absolute bottom-2 flex items-center justify-center text-[white] font-semibold text-[0.875rem] font-sora">
          &copy; Koneticus {currentYear}
        </div>
      </div>
    </>
  );
}
