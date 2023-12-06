"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ProjectTitle() {
  const router = useRouter();
  return (
    <div className="bg-blue-800 text-white p-5">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        Document App
      </h1>
    </div>
  );
}

export default ProjectTitle;