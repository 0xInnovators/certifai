"use client";
import React from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../blockchain/config";

function Web3Provider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const queryClient = new QueryClient();
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default Web3Provider;
