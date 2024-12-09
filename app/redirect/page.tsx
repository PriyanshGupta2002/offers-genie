"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const RedirectPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  console.log(searchParams.get("link"));

  useEffect(() => {
    // Generate a random delay between 1.5 and 2.5 seconds
    const randomDelay = Math.random() * (2.5 - 1.5) + 1.5;

    const timer = setTimeout(() => {
      router.push(searchParams.get("link")!);
    }, randomDelay * 1000); // Convert seconds to milliseconds

    // Cleanup timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [router, searchParams]);

  if (!searchParams.get("mobile")) {
    return router.push("/");
  }

  return (
    <div className="min-h-[70vh] flex-col flex items-center justify-center bg-inherit">
      <video
        src="/balls.mp4"
        autoPlay
        loop
        muted
        className="w-28 h-28 p-4 brightness-125"
      />
      <span className="text-sm font-semibold tracking-wide">
        Please wait...
      </span>
      <span className="text-center text-sm font-normal my-2">
        You’re being redirected to{" "}
        <Link href={searchParams.get("link")!} className="text-primaryPrimary">
          {decodeURIComponent(searchParams.get("text")!)}
        </Link>
        , <br /> it may take some time
      </span>
    </div>
  );
};

export default RedirectPage;
