"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to Furry Bot</h2>
        <p className="text-xl mb-8">
          Your friendly neighborhood furry image search bot!
        </p>
        <Link href="https://discord.com/oauth2/authorize?client_id=1256087992829739059">
          <Button className="bg-[#7289da] hover:bg-[#5b6eae]">
            Add to Discord
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
