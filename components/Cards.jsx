"use-client"
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
export default function Cards() {
  return (
    <>
        <Card className="w-[330px] h-[370px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-4.jpeg"
          />
        </Card>
    </>
  );
}
