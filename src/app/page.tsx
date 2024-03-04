import Image from "next/image";
import pika from "/public/pika-fishing.jpeg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 md:px-24 px-8">
      <h1 className="text-6xl text-center pb-12">V Cleans</h1>
      <div className="flex flex-col md:flex-row gap-2 pb-12">
        <Image alt="" src={pika} />
        <Image alt="" src={pika} />
        <Image alt="" src={pika} />
      </div>
      <Button>Get A Quote</Button>
    </main>
  );
}
