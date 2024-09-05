"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Section = () => {
  return (
    <section id="add" className="py-20 bg-[#2f3136]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Add Furry Bot to Your Server
        </h2>
        <p className="mb-8">
          Bring the power of furry image search to your community!
        </p>
        <Link href="https://discord.com/oauth2/authorize?client_id=1256087992829739059">
          <Button className="bg-[#7289da] hover:bg-[#5b6eae]">
            <Plus className="mr-2" /> Add to Discord
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Section;
