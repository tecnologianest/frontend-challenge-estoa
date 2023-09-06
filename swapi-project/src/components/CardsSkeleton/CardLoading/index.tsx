import { Skeleton } from "@nextui-org/react";
import React from "react";

function CardLoading() {
  return (
    <div
      className="text-slate-100
                           w-full min-h-35 rounded px-1
                       "
    >
      <div className=" p-4 rounded-t flex items-center gap-4">
        <Skeleton className="flex rounded-full w-12 h-12 dark" />
        <Skeleton className="dark h-3 w-3/5 rounded-lg" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <Skeleton className="h-3 w-3/5 rounded-lg dark" />
        <Skeleton className="h-3 w-4/5 rounded-lg dark" />
      </div>
    </div>
  );
}

export default CardLoading;
