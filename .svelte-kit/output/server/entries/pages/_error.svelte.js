import { c as create_ssr_component, f as subscribe, e as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { i as isLoading } from "../../chunks/index3.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-pgs8zc{padding-top:10rem;padding-bottom:2.5rem;text-align:center;font-size:3rem;line-height:1;font-weight:700}@media(min-width: 768px){h1.svelte-pgs8zc{font-size:4.5rem;line-height:1}}h1.svelte-pgs8zc{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,\n			'Open Sans', 'Helvetica Neue', sans-serif}a.svelte-pgs8zc{margin-left:auto;margin-right:auto;display:block;width:-moz-fit-content;width:fit-content;text-align:center;text-decoration-line:underline}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  isLoading.set(false);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<h1 class="${"svelte-pgs8zc"}">${escape($page.status)}</h1>

<a href="${"/"}" class="${"svelte-pgs8zc"}">home </a>`;
});
export {
  Error as default
};
