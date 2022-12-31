import { c as create_ssr_component, e as escape, b as add_attribute } from "./index.js";
import clsx from "clsx";
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder = "Enter text here..." } = $$props;
  let { className = "" } = $$props;
  let { label = "" } = $$props;
  let { isTextarea = false } = $$props;
  let { error = false } = $$props;
  let { maxLength = 100 } = $$props;
  let { id = "" } = $$props;
  let { value = "" } = $$props;
  let { type = "text" } = $$props;
  let { trailingAddon = "" } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.isTextarea === void 0 && $$bindings.isTextarea && isTextarea !== void 0)
    $$bindings.isTextarea(isTextarea);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.maxLength === void 0 && $$bindings.maxLength && maxLength !== void 0)
    $$bindings.maxLength(maxLength);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.trailingAddon === void 0 && $$bindings.trailingAddon && trailingAddon !== void 0)
    $$bindings.trailingAddon(trailingAddon);
  return `<div class="${"w-full"}">${label ? `<div class="${"text-[12px] md:text-xs font-semibold text-light-2 mb-1.5"}">${escape(label)}</div>` : ``}

	${isTextarea ? `<textarea${add_attribute("class", clsx("py-2.5 px-5 text-base md:text-sm rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 focus:border-highlight outline-none w-full duration-75 resize-y max-h-[400px] min-h-[50px]", className), 0)}${add_attribute("maxlength", maxLength, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", id, 0)}${add_attribute("title", id, 0)}${add_attribute("id", id, 0)}${add_attribute("cols", 30, 0)}${add_attribute("rows", 10, 0)}>${value || ""}</textarea>` : `<div${add_attribute("class", clsx("text-base md:text-sm rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 focus-within:border-highlight outline-none w-full duration-75 flex items-center justify-start overflow-hidden", error && "!border-red-500"), 0)}>${trailingAddon ? `<span class="${"py-2.5 pl-5 pr-0 text-light-3"}">${escape(trailingAddon)}</span>` : ``}
			<input${add_attribute("id", id, 0)}${add_attribute("aria-label", id, 0)}${add_attribute("title", id || placeholder, 0)}${add_attribute("maxlength", maxLength, 0)}${add_attribute("class", clsx("py-2.5 px-5 outline-none border-none bg-transparent w-full", className, trailingAddon && "pl-0"), 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}></div>`}</div>`;
});
export {
  TextInput as T
};
