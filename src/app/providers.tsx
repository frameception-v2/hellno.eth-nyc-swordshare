"use client";

import dynamic from "next/dynamic";
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { DaimoPayProvider, getDefaultConfig } from "@daimo/pay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";

const queryClient = new QueryClient();

const wagmiConfig = createConfig(
  getDefaultConfig({
    appName: "NYC SwordShare",
    ssr: true
  })
);

const WagmiProviderComponent = dynamic(
  () => import("~/components/providers/WagmiProvider"),
  { ssr: false }
);

export function Providers({ session, children }: { 
  session: Session | null, 
  children: React.ReactNode 
}) {
  return (
    <SessionProvider session={session}>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <DaimoPayProvider>
            {children}
          </DaimoPayProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </SessionProvider>
  );
}
