import { c as create_ssr_component, b as add_attribute } from "./index.js";
import clsx from "clsx";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionClass = "" } = $$props;
  let { className = "" } = $$props;
  let { centered = false } = $$props;
  if ($$props.sectionClass === void 0 && $$bindings.sectionClass && sectionClass !== void 0)
    $$bindings.sectionClass(sectionClass);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
    $$bindings.centered(centered);
  return `<section${add_attribute("class", clsx(sectionClass, centered && "h-screen w-full flex items-center justify-center"), 0)}><div${add_attribute("class", clsx(className, "w-10/12 max-w-[1200px] py-4 mx-auto"), 0)}>${slots.default ? slots.default({}) : ``}</div></section>`;
});
export {
  Container as C
};
