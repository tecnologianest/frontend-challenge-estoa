"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Character(props) {
  const [modal, setModal] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="py-4 bg-slate-900 rounded-xl">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{props.name}</p>
          <small className="text-default-500">
            Birth Year: {props.birth_year}
          </small>
          {props.species.length > 0 && (
            <h4 className="font-bold text-large cursor-pointer">
              Species: Droid
            </h4>
          )}
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Luke Skywalker"
            className="object-cover rounded-xl"
            src="https://i.pinimg.com/564x/97/53/e7/9753e7c3ab26a0f75246431cd1c2063b.jpg"
            width={270}
          />
        </CardBody>
        <Button onPress={onOpen}>More info</Button>
      </Card>
      <Modal
        className="bg-slate-900 rounded-xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-slate-400">
                Luke Skywalker
              </ModalHeader>
              <ModalBody>
                <img
                  className="rounded-xl"
                  src="https://i.pinimg.com/564x/97/53/e7/9753e7c3ab26a0f75246431cd1c2063b.jpg"
                />
                <div className="flex">
                  <ul className="space-y-1">
                    <li>Name: Placeholder bla bla</li>
                    <li>Birth Year: </li>
                    <li>Eye Color: </li>
                    <li>Gender: </li>
                    <li>Hair Color: </li>
                    <li>Height: </li>
                    <li>Mass: </li>
                    <li>Skin Color: </li>
                    <li>Homeworld: </li>
                    <li>Films: </li>
                    <li>Species: </li>
                  </ul>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
