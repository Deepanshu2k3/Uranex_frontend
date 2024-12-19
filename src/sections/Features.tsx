import { twMerge } from "tailwind-merge";
import TextButton from "../components/TextButton";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Spot Trading",
    description:
      "Engage in secure, real-time spot trading of uranium assets, offering market liquidity and instant execution.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Tokenization of Assets",
    description:
      "Unlock the potential of real-world uranium assets by tokenizing them on the blockchain for greater accessibility and trade efficiency.",
    color: "cyan",
  },
  {
    image: "/assets/images/cone.png",
    title: "Off-Chain and On-Chain Yields",
    description:
      "Maximize returns by leveraging both off-chain and on-chain yield options, creating diversified revenue streams with enhanced flexibility.",
    color: "lime",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Enhanced Security Environment",
    description:
      "Uranex utilizes Base Chain’s advanced security with real-time fraud detection and robust encryption, ensuring immutable transactions and top-tier protection for user assets.",
    color: "violet",
  },
];

export const FeaturesSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timeout = setTimeout(() => {
      setSelectedCardIndex((curr) => (curr == cardData.length - 1 ? 0 : curr + 1));
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedCardIndex, isHovered]);

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of Uranium with Blockchain
        </h2>
        <div className="mt-36 flex lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, description, color }, cardIndex) => (
              <div
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={title}
              >
                <Card key={title} color={color} className="max-w-xs md:max-w-md">
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative ">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img
                        src={image}
                        alt="pill"
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12">{title}</h3>
                  <p className="text-lg text-zinc-400 mt-4">{description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }, cardIndex) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  cardIndex === selectedCardIndex && "bg-zinc-300"
                )}
                onClick={() => setSelectedCardIndex(cardIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
