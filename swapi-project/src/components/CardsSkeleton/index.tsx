import React from "react";
import CardLoading from "./CardLoading";

export default function CardsSkeleton() {
  return (
    <section className="md:py-8 box-border overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
      </div>
    </section>
  );
}

{
  /* <section className="md:py-8 box-border h-[100vh] overflow-y-auto sticky top-4">
  
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8 overflow-y-hidden">
    {characters?.map((item: any) => (
      <Card key={item.name} {...item} />
    ))}

    <div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12 dark" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg dark" />
        <Skeleton className="h-3 w-4/5 rounded-lg dark" />
      </div>
    </div>

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
  </div>
</section>; */
}
