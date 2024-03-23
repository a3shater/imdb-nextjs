"use client";

import { useEffect } from "react";

export default function error({ error, reset }: { error: any; reset: any }) {
//   useEffect(() => {
//     console.log("hello from error");
//   }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
