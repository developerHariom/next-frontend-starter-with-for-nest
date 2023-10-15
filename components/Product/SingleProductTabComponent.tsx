"use client";

import React from "react";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
let tabs = [
  {
    id: "description",
    label: "Description",
    content: (
      <>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Introduction</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              perspiciatis amet repellat vitae ducimus! Sunt, error temporibus,
              obcaecati explicabo rerum voluptatum et impedit exercitationem
              ipsum accusamus repudiandae? Omnis, harum voluptatem.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Features</h1>
            <ul className="flex flex-col gap-3" >
                <li >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </li>  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </li>  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </li>  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </li>  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </li>  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "reviews",
    label: "Reviews",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "seller info",
    label: "Seller Info",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const SingleProductTabComponent = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Tabs aria-label="Dynamic tabs" items={tabs} radius="md" size="md">
          {(item) => (
            <Tab
              key={item.id}
              title={item.label}
              className="border-none rounded-none "
            >
              <Card className="bg-transparent border-none">
                <CardBody>{item.content}</CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
};

export default SingleProductTabComponent;
