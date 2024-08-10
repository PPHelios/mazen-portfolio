import React from "react";
import Card3d from "./myComponents/Card3d";
const tiers = [
  {
    name: "Platinum Membership",
    price: 50,
    content:
      "ALLOWS you to access our testing server and see what the new plugin,shout out in the video of every smp member and they will link your socials in description also unlock 4 discord  ShadowSMP channels join the private discord server for members only and play on the smp Monday to Friday name on the website ",
  },
  {
    name: "Gold Membership",
    price: 20,
    content:
      "Gives you access to the smp from Monday to Friday Gives you a role in every server we partnership in a shout out in every smp member video in the description  and everything from previous things name on the discord server channel supporter",
  },

  {
    name: "Silver Membership",
    price: 10,
    content:
      "Gives you access to play on the smp every Friday Saturday Monday And and everything from previous things ",
  },
  {
    name: "Support Membership",
    price: 2,
    content:
      "Gives you access to chat with smp members and to sending pictures in chat  and access to the smp leaks",
  },
];
function Products() {
  return (
    <section
      id="products"
      className="relative flex size-full items-center justify-center bg-white
        bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]"
    >
      <div
        className="grid grid-cols-1 items-center gap-10 bg-red-700/45 px-5
          lg:grid-cols-2"
      >
        {tiers.map((tier) => (
          <Card3d
            key={tier.name}
            title={tier.name}
            price={tier.price}
            content={tier.content}
            url="/logo2.jpg"
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
