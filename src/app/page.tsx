import Image from "next/image";
import pika from "/public/pika-fishing.jpeg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">V Cleans</h1>
      <div className="flex gap-2">
        <Image alt="" src={pika} />
        <Image alt="" src={pika} />
        <Image alt="" src={pika} />
      </div>
      <Button>Get A Quote</Button>
    </main>
  );
}
