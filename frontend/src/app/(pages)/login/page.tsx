"use client";
import PageTitle from "@/app/components/PageTitle";
import React from "react";
import { useAccount, useConnect } from "wagmi";
import { config } from "@/app/blockchain/config";
import { useRouter } from "next/navigation";
import SectionTitle from "@/app/components/SectionTitle";
import Image from "next/image";
import Images from "@/app/services/Images";

function LoginPage() {
  const { connect } = useConnect();
  const { isConnected, status } = useAccount();
  const router = useRouter()

  if (isConnected) router.push('/')
  if (status === 'connecting' || status === 'reconnecting') {
    return (
      <div className="h-[70vh] w-full flex items-center justify-center">
        <p className="">Aguarde....</p>
      </div>
    )
  }


  return (
    <div className="h-[50vh] flex flex-col gap-16 items-center justify-center">
      <SectionTitle title="Escolha sua forma de fazer login!" />
      <div className="flex gap-8 w-full items-center justify-center">
        {config.connectors.map((connector) => (
          <div
            className="bg-gray-200 text-gray-600 rounded-2xl p-4 w-[110px] hover:scale-110 transition-all ease-in-out h-[110px] shadow-xl items-center flex justify-center cursor-pointer flex-col gap-3"
            key={connector.uid}
            onClick={() => connect({ connector })}
          >
            {connector.name === 'WalletConnect' &&
              <Image src={Images.walletconnect} width={40} height={40} alt="wallet connect" objectFit="cover" />
            }
            {connector.name === 'MetaMask' &&
              <Image src={Images.metamask} width={40} height={40} alt="wallet connect" objectFit="cover" />
            }
            <p className="text-sm">{connector.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoginPage;
