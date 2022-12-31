import { c as create_ssr_component, b as add_attribute } from "./index.js";
import clsx from "clsx";
const CtaButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { whiteBg = false } = $$props;
  let { uppercase = false } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.whiteBg === void 0 && $$bindings.whiteBg && whiteBg !== void 0)
    $$bindings.whiteBg(whiteBg);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0)
    $$bindings.uppercase(uppercase);
  return `<button${add_attribute(
    "class",
    clsx(`font-bold py-2 px-3 w-32 text-sm text-center rounded outline outline-[1px] outline-offset-4 outline-light-4 mix-blend-color-dodge font-sans`, className, uppercase && "uppercase", whiteBg ? "bg-white text-dark-1" : "bg-light-4 text-light-1 hover:bg-light-3 duration-100"),
    0
  )}>${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  CtaButton as C
};
