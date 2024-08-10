import React from "react";
import { MovingBorderButton } from "./ui/MovingBorderButton";
import { ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-800 to-blue-950"
    >
      <div
        className="mx-auto flex max-w-3xl flex-col items-center
          justify-center gap-8 px-5 py-40"
      >
        <h2 className="text-center text-4xl md:text-6xl">
          Ready to take{" "}
          <span className="font-bold text-red-600">your </span>
          game play to the next level?
        </h2>
        <p className="text-center text-xl md:text-left">
          Reach out to me, and join our server.
        </p>
        <a href="mailto:">
          <MovingBorderButton>
            Contact me now {" "}<ArrowUpRight />
          </MovingBorderButton>
        </a>
      </div>
    </section>
  );
}

export default Contact;
