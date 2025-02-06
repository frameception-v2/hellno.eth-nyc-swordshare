"use client";

import { useEffect, useCallback, useState } from "react";
import sdk, {
  AddFrame,
  SignIn as SignInCore,
  type Context,
} from "@farcaster/frame-sdk";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { config } from "~/components/providers/WagmiProvider";
import { truncateAddress } from "~/lib/truncateAddress";
import { base, optimism } from "wagmi/chains";
import { useSession } from "next-auth/react";
import { createStore } from "mipd";
import { Label } from "~/components/ui/label";
import { PROJECT_TITLE, DAIMO_APP_ID } from "~/lib/constants";
import { DaimoPayButton } from "@daimo/pay";
import { getAddress } from "viem";

export default function SwordshareCard() {
  return (
    <Card className="border-2 border-purple-600 bg-purple-50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="text-3xl">⚔️</div>
          <div>
            <CardTitle className="text-purple-800">Fund Mika&apos;s Journey</CardTitle>
            <CardDescription className="text-purple-600">
              Help a swordmaster reach Farcon NYC!
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="block text-purple-800">Send Support via Base USDC</Label>
          <DaimoPayButton
            appId={DAIMO_APP_ID}
            toChain={baseUSDC.chainId}
            toUnits="10.00"
            toToken={getAddress(baseUSDC.token)}
            toAddress="0xe819feb976bf46afd81c0cbddc859b13496e72b4"
            onPaymentStarted={(e) => console.log("Payment started:", e)}
            onPaymentCompleted={(e) => console.log("Payment completed:", e)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          />
        </div>
        <div className="text-xs text-purple-500 text-center">
          <p>Every contribution helps cover:</p>
          <p>🗡️ Travel • 🏛️ Lodging • ⚔️ Event Fees</p>
        </div>
      </CardContent>
    </Card>
  );
}

// Rest of the file remains exactly the same...
