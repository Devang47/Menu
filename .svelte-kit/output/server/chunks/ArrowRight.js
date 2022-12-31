import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape } from "./index.js";
import clsx from "clsx";
import { H as Heading } from "./navbar.js";
const RegisterHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step = 1 } = $$props;
  let { totalSteps = 4 } = $$props;
  let { className = "" } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.totalSteps === void 0 && $$bindings.totalSteps && totalSteps !== void 0)
    $$bindings.totalSteps(totalSteps);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<header${add_attribute("class", clsx(className, "flex items-center justify-between w-full"), 0)}>${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      withUnderline: true,
      type: "h1",
      text: "Register"
    },
    {},
    {}
  )}

	<div class="${"progress text-sm text-light-3 font-bold"}">${escape(step)}/${escape(totalSteps)}</div></header>`;
});
const BackArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"8"}" height="${"10"}" viewBox="${"0 0 8 10"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M7 1L2 5L7 9"}" stroke="${"#969696"}" stroke-width="${"1.5"}"></path></svg>`;
});
const GoBack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { label = "back" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `<button title="${"goto previous step"}"${add_attribute("class", clsx("rounded border border-light-4 text-light-3 text-center flex items-center gap-2 text-sm font-semibold py-1.5 px-6 pl-4 bg-dark-1 duration-75", className), 0)}>${validate_component(BackArrow, "BackArrow").$$render($$result, {}, {}, {})}
	${escape(label)}</button>`;
});
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg height="${"9"}" viewBox="${"0 0 9 7"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1 3.5H8M8 3.5L4.9375 1M8 3.5L4.9375 6"}" stroke="${"#F1F1F1"}" stroke-width="${"1.3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
export {
  ArrowRight as A,
  GoBack as G,
  RegisterHeader as R
};
