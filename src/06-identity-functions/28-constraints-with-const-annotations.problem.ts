import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type ReadOnlyFruits = readonly {
  name: string;
  price: number;
}[];

export const narrowFruits = <const TFruits extends ReadOnlyFruits>(t: TFruits) => t;

const fruits = narrowFruits([
  {
    name: "apple",
    price: 1,
  },
  {
    name: "banana",
    price: 2,
  },
]);

type tests = [
  Expect<
    Equal<
      typeof fruits,
      readonly [
        {
          readonly name: "apple";
          readonly price: 1;
        },
        {
          readonly name: "banana";
          readonly price: 2;
        }
      ]
    >
  >
];

it("Should ONLY let you pass an array of fruits", () => {
  const notAllowed = narrowFruits([
    // @ts-expect-error
    "not allowed",
  ]);
});
