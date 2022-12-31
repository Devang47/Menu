import { c as create_ssr_component, b as add_attribute, e as escape } from "./index.js";
const siteURL = new URL("http://localhost:3000/");
const siteOrigin = siteURL.origin;
const defaultMeta = {
  title: "Online Menu | Devang Saklani",
  description: `Create online menu for your restaurant.`,
  ogImage: `${siteOrigin}/og.png`,
  twitter: {
    handle: "@devangsaklani",
    site: "@devangsaklani"
  }
};
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = {};
  const MetaData = {
    title: defaultMeta.title,
    description: defaultMeta.description,
    ogImage: {
      url: defaultMeta.ogImage,
      alt: defaultMeta.title,
      width: 1200,
      height: 630
    },
    twitter: {
      cardType: "summary_large_image",
      handle: defaultMeta.twitter.handle,
      site: defaultMeta.twitter.site
    },
    ...data
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-18mykhy_START --><meta charset="${"utf-8"}"><meta name="${"viewport"}" content="${"width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no"}"><meta name="${"theme-color"}"${add_attribute("content", "#000000", 0)}><link rel="${"icon"}" href="${"/icons/favicon.png"}" type="${"image/png"}"><link rel="${"icon"}" href="${"/icons/favicon.svg"}" type="${"image/svg+xml"}">${$$result.title = `<title>${escape(MetaData.title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", MetaData.description, 0)}><meta name="${"twitter:card"}"${add_attribute("content", MetaData.twitter.cardType, 0)}><meta name="${"twitter:site"}"${add_attribute("content", MetaData.twitter.site, 0)}><meta name="${"twitter:creator"}"${add_attribute("content", MetaData.twitter.site, 0)}><meta name="${"twitter:title"}"${add_attribute("content", MetaData.title, 0)}><meta name="${"twitter:description"}"${add_attribute("content", MetaData.description, 0)}><meta name="${"twitter:image"}"${add_attribute("content", MetaData.ogImage.url, 0)}><meta property="${"og:title"}"${add_attribute("content", MetaData.title, 0)}><meta property="${"og:description"}"${add_attribute("content", MetaData.description, 0)}><meta property="${"og:image"}"${add_attribute("content", MetaData.ogImage.url, 0)}><meta property="${"og:image:alt"}"${add_attribute("content", MetaData.ogImage.alt, 0)}><meta property="${"og:image:width"}"${add_attribute("content", MetaData.ogImage.width + "", 0)}><meta property="${"og:image:height"}"${add_attribute("content", MetaData.ogImage.height + "", 0)}><!-- HEAD_svelte-18mykhy_END -->`, ""}`;
});
export {
  Meta as M
};
