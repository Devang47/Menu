import { c as create_ssr_component, b as add_attribute } from "./index.js";
import clsx from "clsx";
const LoadingIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg width="${"16"}" height="${"16"}" viewBox="${"0 0 16 16"}" fill="${"none"}"${add_attribute("class", clsx(className, "stroke-light-2 animate-spin"), 0)} xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334"}" stroke="${"current"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
export {
  LoadingIcon as L
};
