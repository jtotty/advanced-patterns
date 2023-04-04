import { Equal, Expect } from "../helpers/type-utils";

type Events<T> = {
  [K in keyof T]: (name: K) => void;
}

export function makeEventHandlers<T>(obj: Events<T>) {
  return obj;
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "click">>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "focus">>;
  },
});
