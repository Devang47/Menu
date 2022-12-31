import { c as create_ssr_component, f as subscribe, v as validate_component } from "../../../chunks/index.js";
import { N as Navbar, H as Heading } from "../../../chunks/navbar.js";
import { L as LoadingScreenDefault } from "../../../chunks/LoadingScreenDefault.js";
import { C as Container } from "../../../chunks/Container.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { u as user } from "../../../chunks/index3.js";
const OptionsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"3"}" height="${"15"}" viewBox="${"0 0 3 15"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"1.5"}" cy="${"1.5"}" r="${"1.5"}" fill="${"#969696"}"></circle><circle cx="${"1.5"}" cy="${"7.5"}" r="${"1.5"}" fill="${"#969696"}"></circle><circle cx="${"1.5"}" cy="${"13.5"}" r="${"1.5"}" fill="${"#969696"}"></circle></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${validate_component(Container, "Container").$$render($$result, { className: "mt-32" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          className: "text-center text-[26px] md:text-3xl",
          text: $user.displayName || ""
        },
        {},
        {}
      )}

		${validate_component(Button, "Button").$$render(
        $$result,
        {
          className: "mx-auto text-xs !py-1 !text-light-2 !px-3 mt-4 rounded-md"
        },
        {},
        {
          default: () => {
            return `Free tier`;
          }
        }
      )}

		${validate_component(Card, "Card").$$render(
        $$result,
        {
          noBgImages: true,
          className: "rounded md:rounded-lg mt-24 px-4 md:px-5 py-6 md:py-4 border-[#6B6B6B]/10 max-w-sm mx-auto"
        },
        {},
        {
          default: () => {
            return `${validate_component(Heading, "Heading").$$render(
              $$result,
              {
                type: "h2",
                text: "Manage cards",
                className: "!text-sm !text-light-2 !font-medium"
              },
              {},
              {}
            )}

			<div class="${"grid gap-3 mt-4 overflow-y-scroll pb-20 h-[250px] relative"}"><button class="${"bg-[#191919]/60 border-2 border-[#808080]/20 py-3 px-4 rounded-md text-sm flex items-center justify-between gap-4 h-fit"}"><div class="${"text-light-2"}">The Taj Hotel</div>

					<div class="${""}">${validate_component(OptionsIcon, "OptionsIcon").$$render($$result, {}, {}, {})}</div></button></div>
			${validate_component(Button, "Button").$$render($$result, { className: "mx-auto mt-5" }, {}, {
              default: () => {
                return `Create new`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}` : `${validate_component(LoadingScreenDefault, "LoadingScreenDefault").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
