import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

function Card3d({
  title,
  content,
  url,
  price
}: {
  title: string;
  content: string;
  url: string;
  price: number
}) {
  return (
      <CardContainer className="inter-var ">
        <CardBody
          className="group/card relative  min-h-[600px] w-auto rounded-xl border
            border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem]
            dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl
            dark:hover:shadow-emerald-500/[0.1]  flex flex-col justify-between"
        >
          <CardItem
            translateZ="50"
            className="text-3xl font-bold text-red-600"
          >
            {title}
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-2}
            className="mt-4 w-full"
          >
            <Image
              src={url}
              height="1000"
              width="1000"
              className="h-60 w-full rounded-xl object-cover
                group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500
              dark:text-neutral-300"
          >
            {content}
          </CardItem>
          <div className="mt-10 flex items-center justify-center">
            <CardItem
              // translateZ={20}
              translateX={40}
              as="button"
              className="rounded-xl bg-black px-4 py-4 text-lg font-bold
                text-white dark:bg-red-500 dark:text-white"
            >
              Buy now {price}$
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
  );
}

export default Card3d;
