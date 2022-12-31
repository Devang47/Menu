import { c as create_ssr_component, b as add_attribute, f as subscribe, v as validate_component } from "./index.js";
import clsx from "clsx";
import { L as LoadingIcon } from "./LoadingIcon.js";
import { i as isLoading, u as user } from "./index3.js";
import "./auth.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { text = "" } = $$props;
  let { withUnderline = false } = $$props;
  let { type = "h1" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.withUnderline === void 0 && $$bindings.withUnderline && withUnderline !== void 0)
    $$bindings.withUnderline(withUnderline);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div${add_attribute("class", clsx("text-light-1 font-bold text-2xl", withUnderline && "half-underline", className), 0)}><!-- HTML_TAG_START -->${`<${type}> ${text} </${type}>`}<!-- HTML_TAG_END --></div>`;
});
const NavIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg width="${"27"}" height="${"10"}"${add_attribute("class", clsx(className, "stroke-light-2"), 0)} viewBox="${"0 0 27 10"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><line x1="${"0.163574"}" y1="${"1"}" x2="${"26.2851"}" y2="${"1"}" stroke="${"current"}" stroke-width="${"2"}"></line><line x1="${"0.163574"}" y1="${"9"}" x2="${"26.2851"}" y2="${"9"}" stroke="${"current"}" stroke-width="${"2"}"></line></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $$unsubscribe_user;
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_isLoading();
  $$unsubscribe_user();
  return `<nav><div class="${"fixed top-0 left-0 w-full py-4 z-10 backdrop-blur"}"><div class="${"max-w-large mx-auto flex items-center justify-between w-10/12"}"><button class="${"logo py-4 px-2"}">${validate_component(NavIcon, "NavIcon").$$render($$result, {}, {}, {})}</button>
			${$isLoading ? `<div class="${""}">${validate_component(LoadingIcon, "LoadingIcon").$$render($$result, { className: "w-5 h-5" }, {}, {})}</div>` : ``}</div></div>

	${``}</nav>`;
});
export {
  Heading as H,
  Navbar as N
};
