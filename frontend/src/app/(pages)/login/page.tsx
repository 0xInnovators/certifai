"use client";
import PageTitle from "@/app/components/PageTitle";
import React from "react";
import { useAccount, useConnect } from "wagmi";
import { config } from "@/app/blockchain/config";
import { useRouter } from "next/navigation";

function LoginPage() {
  const { connect } = useConnect();
  const {isConnected, status} = useAccount();
  const router = useRouter()
  
  if (isConnected) router.push('/')
  if (status === 'connecting' || status === 'reconnecting'){
    return(
      <div className="h-[70vh] w-full flex items-center justify-center">
        <p className="">Aguarde....</p>
      </div>
    )
  }

  
  return (
    <div>
      <p className="text-red-500">{status}</p>
      
      <PageTitle title="Login" subtitle="Escolha sua wallet e faça login." />
      <div className="flex gap-8 w-full items-center justify-center">
        {config.connectors.map((connector) => (
          <div
            className="bg-gray-200 text-gray-600 rounded-2xl p-4 w-[110px] hover:scale-110 transition-all ease-in-out h-[110px] shadow-xl items-center flex justify-center cursor-pointer"
            key={connector.uid}
            onClick={() => connect({ connector })}
          >
            <p className="text-sm">{connector.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoginPage;
