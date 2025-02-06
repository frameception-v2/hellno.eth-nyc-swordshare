"use client";

import dynamic from "next/dynamic";

const Frame = dynamic(() => import("~/components/Frame"), {
  ssr: false,
}) as React.ComponentType<{ title?: string }>;

export default function App() {
  return <Frame />;
}
