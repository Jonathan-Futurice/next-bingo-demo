import React, { ReactElement, ReactNode } from "react";

export interface IBingoCell {
  bingoIndex: [string, number];
  index: [number, number];
  selected: boolean;
  value: number;
}

interface BingoCellParams {
  n: number;
  cell: IBingoCell;
  onClick: () => void;
  children: JSX.Element;
}

export const BingoCell = ({ cell, n, children, onClick }: BingoCellParams) => (
  <div
    suppressHydrationWarning
    className={`box flex items-center justify-center w-full h-full hover:bg-sky-700 hover:text-white ${
      cell.selected && "bg-sky-500"
    }`}
    onClick={onClick}
  >
    {children}
  </div>
);
