import React from "react";
import HandlingErrorService from "../services/HandlingErrorService";
import { type BaseError } from "wagmi";

interface ShowErrorProps {
  error: any;
}

function ShowError({ error }: ShowErrorProps) {
  return (
    <>
      {error && (
        <div className="border-yellow-600 border rounded-2xl bg-yellow-100 p-8 text-gray-600">
          <div>
            {HandlingErrorService.getShortError(
              (error as BaseError).shortMessage || error.message
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ShowError;
