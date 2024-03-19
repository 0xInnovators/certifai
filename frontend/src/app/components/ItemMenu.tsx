import Link from "next/link";
import React, { ReactNode } from "react";

interface ItemMenuProps {
  label: string;
  url: string;
  icon: ReactNode;
}

function ItemMenu({ label, url, icon }: ItemMenuProps) {
  return (
    <Link href={`./${url}`}>
      <div className="flex w-[240px] justify-center items-center gap-2 hover:text-gray-200 hover:bg-gray-600 transition-all ease-in-out cursor-pointer p-2 rounded-lg">
        <div className="">{icon}</div>
        <div className="w-full">{label}</div>
      </div>
    </Link>
  );
}

export default ItemMenu;
