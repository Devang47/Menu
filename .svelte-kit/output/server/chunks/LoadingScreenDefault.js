import { c as create_ssr_component, v as validate_component } from "./index.js";
import { L as LoadingIcon } from "./LoadingIcon.js";
const LoadingScreenDefault = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"fixed inset-0 w-full h-full bg-dark-1 flex items-center justify-center z-20"}"><div class="${"container bg-dark-1 p-3.5 w-fit rounded"}">${validate_component(LoadingIcon, "LoadingIcon").$$render($$result, {}, {}, {})}</div></section>`;
});
export {
  LoadingScreenDefault as L
};
