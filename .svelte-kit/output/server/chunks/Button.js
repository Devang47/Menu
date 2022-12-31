import { c as create_ssr_component, b as add_attribute } from "./index.js";
import clsx from "clsx";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { className = "" } = $$props;
  let { primary = false } = $$props;
  let { disabled = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `<button${add_attribute("aria-label", label, 0)}${add_attribute("title", label, 0)}${add_attribute("class", clsx("font-medium py-2 px-4 text-center text-sm bg-dark-1 text-light-1 border rounded border-light-4 duration-75 flex items-center gap-1.5 justify-center custom-border ", primary && "primary bg-highlight border-highlight", disabled && "opacity-50 cursor-not-allowed", className), 0)} ${disabled ? "disabled" : ""}>${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B
};
