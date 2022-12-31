import { c as create_ssr_component, e as escape, b as add_attribute, d as each, f as subscribe, v as validate_component } from "../../chunks/index.js";
import { L as LoadingScreenDefault } from "../../chunks/LoadingScreenDefault.js";
import { L as Logo } from "../../chunks/Logo.js";
import { C as CtaButton } from "../../chunks/CtaButton.js";
import { u as user, n as notifications, i as isLoading } from "../../chunks/index3.js";
import "../../chunks/auth.js";
const SvelteSeo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { jsonLd = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0)
    $$bindings.jsonLd(jsonLd);
  return `${$$result.head += `<!-- HEAD_svelte-1q8xl96_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}<meta name="${"robots"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}><meta name="${"googlebot"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}>${description ? `<meta name="${"description"}"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="${"canonical"}"${add_attribute("href", canonical, 0)}>` : ``}${keywords ? `<meta name="${"keywords"}"${add_attribute("content", keywords, 0)}>` : ``}${openGraph ? `${openGraph.title ? `<meta property="${"og:title"}"${add_attribute("content", openGraph.title, 0)}>` : ``}

    ${openGraph.description ? `<meta property="${"og:description"}"${add_attribute("content", openGraph.description, 0)}>` : ``}

    ${openGraph.url || canonical ? `<meta property="${"og:url"}"${add_attribute("content", openGraph.url || canonical, 0)}>` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${add_attribute("content", openGraph.type.toLowerCase(), 0)}>` : ``}

    ${openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${add_attribute("content", openGraph.article.publishedTime, 0)}>` : ``}

      ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${add_attribute("content", openGraph.article.modifiedTime, 0)}>` : ``}

      ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${add_attribute("content", openGraph.article.expirationTime, 0)}>` : ``}

      ${openGraph.article.section ? `<meta property="${"article:section"}"${add_attribute("content", openGraph.article.section, 0)}>` : ``}

      ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${add_attribute("content", author, 0)}>`;
  })}` : ``}

      ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : ``}

    ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)}>
        ${image.alt ? `<meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)}>` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${add_attribute("content", image.width.toString(), 0)}>` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${add_attribute("content", image.height.toString(), 0)}>` : ``}`;
  })}` : ``}` : ``}${twitter ? `<meta name="${"twitter:card"}"${add_attribute("content", twitter.card || "summary_large_image", 0)}>
    ${twitter.site ? `<meta name="${"twitter:site"}"${add_attribute("content", twitter.site, 0)}>` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${add_attribute("content", twitter.title, 0)}>` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${add_attribute("content", twitter.description, 0)}>` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${add_attribute("content", twitter.image, 0)}>` : ``}
     ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${add_attribute("content", twitter.imageAlt, 0)}>` : ``}
    ${twitter.player ? `<meta name="${"twitter:player"}"${add_attribute("content", twitter.player, 0)}>` : ``}
     ${twitter.playerWidth ? `<meta name="${"twitter:player:width"}"${add_attribute("content", twitter.playerWidth, 0)}>` : ``}
    ${twitter.playerHeight ? `<meta name="${"twitter:player:height"}"${add_attribute("content", twitter.playerHeight, 0)}>` : ``}` : ``}${jsonLd ? `<!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    ...jsonLd
  }) + "<"}/script>`}<!-- HTML_TAG_END -->` : ``}${slots.default ? slots.default({}) : ``}<!-- HEAD_svelte-1q8xl96_END -->`, ""}`;
});
const GithubIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg${add_attribute("class", className, 0)} width="${"28"}" height="${"27"}" viewBox="${"0 0 28 27"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M13.7335 0C6.14575 0 0 6.14575 0 13.7335C0 19.8106 3.93122 24.9435 9.3903 26.7632C10.077 26.8834 10.3345 26.4714 10.3345 26.1109C10.3345 25.7847 10.3173 24.7032 10.3173 23.553C6.86676 24.1882 5.97408 22.7118 5.69941 21.9393C5.54491 21.5445 4.8754 20.3256 4.29173 19.9994C3.81105 19.7419 3.12438 19.1068 4.27456 19.0896C5.35607 19.0724 6.12858 20.0853 6.38609 20.4973C7.6221 22.5745 9.5963 21.9908 10.386 21.6303C10.5061 20.7376 10.8666 20.1368 11.2615 19.7934C8.20578 19.4501 5.01274 18.2656 5.01274 13.0125C5.01274 11.519 5.54491 10.283 6.42042 9.32163C6.28309 8.97829 5.80241 7.5706 6.55776 5.68224C6.55776 5.68224 7.70794 5.32174 10.3345 7.08993C11.4332 6.78093 12.6005 6.62642 13.7679 6.62642C14.9352 6.62642 16.1026 6.78093 17.2012 7.08993C19.8278 5.30457 20.978 5.68224 20.978 5.68224C21.7333 7.5706 21.2526 8.97829 21.1153 9.32163C21.9908 10.283 22.523 11.5018 22.523 13.0125C22.523 18.2827 19.3128 19.4501 16.2571 19.7934C16.7549 20.2226 17.1841 21.0466 17.1841 22.3341C17.1841 24.171 17.1669 25.6474 17.1669 26.1109C17.1669 26.4714 17.4244 26.9005 18.1111 26.7632C20.8374 25.8427 23.2064 24.0905 24.8848 21.7532C26.5631 19.4158 27.4662 16.611 27.467 13.7335C27.467 6.14575 21.3213 0 13.7335 0Z"}" fill="${"white"}"></path></svg>`;
});
const TwitterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg${add_attribute("class", className, 0)} width="${"28"}" height="${"23"}" viewBox="${"0 0 28 23"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M27.5686 2.96554C26.5597 3.41262 25.4758 3.7147 24.3363 3.85125C25.512 3.14775 26.3916 2.04052 26.811 0.736163C25.7064 1.39228 24.4975 1.85411 23.2367 2.10158C22.389 1.19638 21.266 0.59639 20.0423 0.394777C18.8186 0.193164 17.5625 0.401203 16.4692 0.986593C15.3758 1.57198 14.5063 2.50198 13.9956 3.63218C13.4849 4.76238 13.3617 6.02957 13.645 7.237C11.4068 7.12462 9.21721 6.54287 7.21838 5.52951C5.21955 4.51614 3.45614 3.09382 2.04258 1.35483C1.55924 2.18858 1.28133 3.15525 1.28133 4.18475C1.28079 5.11153 1.50902 6.02412 1.94576 6.84155C2.38251 7.65897 3.01427 8.35596 3.78499 8.87066C2.89116 8.84222 2.01705 8.6007 1.23541 8.1662V8.2387C1.23532 9.53856 1.68495 10.7984 2.50801 11.8045C3.33106 12.8106 4.47685 13.5009 5.75095 13.7584C4.92177 13.9828 4.05244 14.0158 3.20862 13.855C3.56809 14.9735 4.26832 15.9515 5.21127 16.6522C6.15422 17.353 7.29269 17.7413 8.46729 17.7628C6.47333 19.3281 4.01082 20.1771 1.47587 20.1734C1.02683 20.1735 0.578169 20.1473 0.132202 20.0949C2.70532 21.7493 5.70061 22.6273 8.7597 22.6239C19.1151 22.6239 24.7762 14.0472 24.7762 6.60866C24.7762 6.367 24.7701 6.12291 24.7592 5.88125C25.8604 5.08492 26.8109 4.09883 27.5662 2.96916L27.5686 2.96554Z"}" fill="${"white"}"></path></svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<footer class="${"flex items-center justify-between py-8 mt-32 w-10/12 max-w-[1200px] mx-auto"}"><div class="${"flex items-center justify-center gap-4"}">${validate_component(Logo, "Logo").$$render($$result, { className: "w-10 md:w-12" }, {}, {})}
		<h2 class="${"font-bold hidden md:block text-lg"}">Meny\u016B</h2></div>

	<div class="${"flex items-center justify-center gap-5 md:gap-8"}">${validate_component(GithubIcon, "GithubIcon").$$render($$result, { className: "w-6 md:w-8" }, {}, {})}
		${validate_component(TwitterIcon, "TwitterIcon").$$render($$result, { className: "w-6 md:w-8" }, {}, {})}

		${!$user ? `${validate_component(CtaButton, "CtaButton").$$render(
    $$result,
    {
      className: "!mix-blend-normal w-20",
      whiteBg: true
    },
    {},
    {
      default: () => {
        return `Sign in`;
      }
    }
  )}` : ``}</div></footer>`;
});
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { error = false } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<div class="${[
    "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",
    (error ? "bg-red-600" : "") + " " + (!error ? "bg-green-700" : "")
  ].join(" ").trim()}"><div class="${"p-4"}"><div class="${"flex items-center"}"><div class="${"flex w-0 flex-1 justify-between"}"><p class="${"w-0 flex-1 text-sm font-medium text-white"}">${escape(data.data)}</p></div></div></div></div>`;
});
const Notifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notifications, $$unsubscribe_notifications;
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  $$unsubscribe_notifications();
  return `<div aria-live="${"assertive"}" class="${"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-30"}"><div class="${"flex w-full flex-col items-center space-y-4 sm:items-end"}">${each($notifications, (data) => {
    return `${validate_component(Notification, "Notification").$$render($$result, { error: data.error, data }, {}, {})}`;
  })}</div></div>`;
});
const global = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  $$unsubscribe_isLoading();
  return `${validate_component(Notifications, "Notifications").$$render($$result, {}, {}, {})}

${$isLoading ? `${validate_component(LoadingScreenDefault, "LoadingScreen").$$render($$result, {}, {}, {})}` : ``}

${validate_component(SvelteSeo, "SvelteSeo").$$render(
    $$result,
    {
      title: "Meny\xFA",
      description: "At Meny\xFA you can create a private chat room and share data across multiple devices, the chat room will automatically delete after 15min..",
      openGraph: {
        type: "website",
        title: "Meny\xFA",
        description: "At Meny\xFA you can create a private chat room and share data across multiple devices, the chat room will automatically delete after 15min.",
        url: "https://saklani.dev",
        images: [
          {
            url: "https://res.cloudinary.com/dyn3sdtfm/image/upload/v1663470958/og1_l965qv.webp"
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        site: "@devangsaklani",
        title: "Devang Saklani | Software Engineer",
        description: "At Meny\xFA you can create a private chat room and share data across multiple devices, the chat room will automatically delete after 15min.",
        image: "https://res.cloudinary.com/dyn3sdtfm/image/upload/v1663470958/og1_l965qv.webp",
        imageAlt: "Devang Saklani | Software Engineer"
      }
    },
    {},
    {}
  )}

${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
