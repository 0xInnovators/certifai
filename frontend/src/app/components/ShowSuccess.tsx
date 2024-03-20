import React from "react";
import HandlingErrorService from "../services/HandlingErrorService";
import { type BaseError } from "wagmi";
import FormatService from "../services/FormatService";

interface ShowSuccessProps {
  hash: string;
  successMessage: string
}

function ShowSuccess({ hash, successMessage }: ShowSuccessProps) {
  return (
    <>
      {hash && (
        <div className="border-green-600 border rounded-2xl bg-green-100 p-8 text-gray-600">
          <div className="flex flex-col gap-2">
            <p className="">{successMessage}</p>
            <p className="">Hash {FormatService.formatAddress(hash, 10)}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowSuccess;
