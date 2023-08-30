"use client";

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
            alt={props.name}
            className="object-cover rounded-xl"
            src={`${props.name}.jpg`}
            width={250}
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
                {props.name}
              </ModalHeader>
              <ModalBody>
                <img className="rounded-xl" src={`${props.name}.jpg`} />
                <div className="flex">
                  <ul className="space-y-1 text-transform: capitalize">
                    <li>Birth Year: {props.birth_year}</li>
                    <li>Eye Color: {props.eye_color}</li>
                    <li>Gender: {props.gender}</li>
                    <li>Hair Color: {props.hair_color}</li>
                    <li>Height: {props.height}</li>
                    <li>Mass: {props.mass}</li>
                    <li>Skin Color: {props.skin_color}</li>
                    <li>Homeworld: {props.homeworld}</li>
                    <li>Films: {props.films}</li>
                    {props.species.length > 0 && <li>Species: Droid</li>}
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
