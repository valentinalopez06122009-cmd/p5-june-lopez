"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { addToast } from "@heroui/toast";
import { Accordion, AccordionItem } from "@heroui/react";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title()}>bibble </h1>

      <p> bibble images </p>

      <section className="mt-20">
        <h2 className="text-center text-4xl font-bold">BIBBLE</h2>
        <div className="flex justify-center gap-8 mt-20">
          {/* plan 1 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-primary">
                WITH LOVE BIBBLE <span className="text-sm" />
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl" />
              <img
                alt="bibble"
                src=" https://media1.popsugar-assets.com/files/thumbor/IqR5XCRVCtaaqGV3vWuDoYQQLQA/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/849/n/40126596/d77718a509376a8f_MCDBAFA_EC010/i/Bibble-Barbie-Fairytopia.jpg"
              />
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Happy bibble
              </Button>
            </CardFooter>
          </Card>

          {/* plan 2 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                Queen Bibble <span className="text-sm" />
              </div>
            </CardHeader>
            <CardBody>
              <img
                alt="queen "
                src="https://i.pinimg.com/originals/b2/a0/43/b2a0433d7742bc097125379ea146e8bf.jpg"
              />
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                queen
              </Button>
            </CardFooter>
          </Card>

          {/* plan 3 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-success">
                Bibble with his girlfrend
              </div>
            </CardHeader>
            <CardBody>
              <img
                alt="his girlfrend"
                src="https://i.pinimg.com/736x/19/68/65/19686557ba15184163b572dfe94f2e15.jpg"
              />
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="success"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Bibble in love
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="my-40">
        <h2 className="text-center text-4xl font-bold">BIBBLE</h2>
        <Accordion>
          <AccordionItem key={1} title="Why time machines?">
            XXOO BIBBLE
          </AccordionItem>
          <AccordionItem
            key={2}
            title="How many time machines do we sell per year?"
          >
            ARE BOOS
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
