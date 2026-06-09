"use client";

import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { addToast } from "@heroui/toast";

import { title } from "@/components/primitives";

// import { Textarea } from "@heroui/react";
export default function A5Page() {
  const reason1Toast = () => {
    addToast({
      title: "reaom 1 !",
      description: "  bibble is a queen  ",
      color: "danger",
    });
  };
  const reason2Toast = () => {
    addToast({
      title: "reaom 2 !",
      description: " bibble is so cool  ",
      color: "danger",
    });
  };
  const reason3Toast = () => {
    addToast({
      title: "reaom 3 !",
      description: " i love bibble  ",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title()}> bibble is a queen </h1>

      <Image
        alt=" bibble"
        src="https://i.pinimg.com/originals/68/32/c2/6832c2b0bdebca37f0077032c379590b.jpg"
        width={100}
      />
      <p> why bibble is a good friend </p>
      {/*><Textarea
      aria-label="Quick project update"
      className="h-32 w-96"
      placeholder="Share a quick project update..."
    />*/}

      <Image
        alt=" bibble  "
        src="https://i.pinimg.com/originals/cc/7f/fb/cc7ffbc207dc2f0c4696a946472f8f31.jpg"
        width={100}
      />
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => {
            reason1Toast();
          }}
        >
          reason 1
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            reason2Toast();
          }}
        >
          reason 2
        </Button>
        <Button
          // color="#"
          onClick={() => {
            reason3Toast();
          }}
        >
          Reason #3
        </Button>
      </div>
      {/* image # 2 */}

      <Image
        alt="bibble  happy"
        src="hhttps://i.pinimg.com/originals/b1/ca/ff/b1caffc0413f9b0ad16fe01421625d06.jpg"
        width={100}
      />
      <Image
        alt="bibble mad "
        src="https://tse2.mm.bing.net/th/id/OIP.xYLL1oBukBjIaZ4Qy64gVgHaJi?rs=1&pid=ImgDetMain&o=7&rm=3"
        width={100}
      />

      <Image
        alt="bibble in fire"
        src="https://ih1.redbubble.net/image.1298293775.8311/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
        width={100}
      />
    </div>
  );
}
