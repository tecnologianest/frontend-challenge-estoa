"use client";

import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Character() {
  return (
    <Card className="py-4 bg-slate-900 rounded-xl">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Placeholder</p>
        <small className="text-default-500">Placeholder</small>
        <h4 className="font-bold text-large">Placeholder</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://i.pinimg.com/564x/97/53/e7/9753e7c3ab26a0f75246431cd1c2063b.jpg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}
