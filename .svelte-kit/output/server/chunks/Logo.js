import { c as create_ssr_component, b as add_attribute } from "./index.js";
import clsx from "clsx";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { variant = "primary" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  return `<span><svg width="${"48"}" height="${"32"}" viewBox="${"0 0 48 32"}" fill="${"none"}"${add_attribute(
    "class",
    clsx(className, variant === "primary" ? "fill-light-1" : "fill-highlight"),
    0
  )} xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M0 1C0 0.447715 0.447715 0 1 0H11C13.7614 0 16 2.23858 16 5V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V1Z"}" fill="${"current"}"></path><path d="${"M32 5C32 2.23858 34.2386 0 37 0H48V16H32V5Z"}" fill="${"current"}"></path><path d="${"M16 16H32V27C32 29.7614 29.7614 32 27 32H21C18.2386 32 16 29.7614 16 27V16Z"}" fill="${"current"}"></path></svg></span>`;
});
export {
  Logo as L
};
