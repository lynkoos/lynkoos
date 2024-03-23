"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export function FixedPlugin() {
  return (
    <a href="https://www.material-tailwind.com" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Lynkoos"
          src="https://www.material-tailwind.com/favicon.png"
        />{" "}
        Made With Lynkoos
      </Button>
    </a>
  );
}
