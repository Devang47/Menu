import { c as create_ssr_component, f as subscribe, v as validate_component } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import { L as LoadingScreenDefault } from "../../../chunks/LoadingScreenDefault.js";
import { N as Navbar } from "../../../chunks/navbar.js";
import { C as Container } from "../../../chunks/Container.js";
import { B as Button } from "../../../chunks/Button.js";
import { R as RegisterHeader, G as GoBack, A as ArrowRight } from "../../../chunks/ArrowRight.js";
import { T as TextInput } from "../../../chunks/TextInput.js";
import "clsx";
import { i as isLoading, u as user } from "../../../chunks/index3.js";
import { getFirestore } from "firebase/firestore";
import { p as page } from "../../../chunks/stores.js";
const QRCode_svelte_svelte_type_style_lang = "";
getFirestore();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $pendingRegisterationData, $$unsubscribe_pendingRegisterationData;
  let $$unsubscribe_isLoading;
  let $$unsubscribe_page;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  const defaultData = {
    hotel: { name: "", tagline: "", address: "" },
    author: "",
    slug: "",
    currency: "INR",
    menu: [
      {
        category: "",
        items: [{ name: "", description: "", price: "" }]
      }
    ]
  };
  isLoading.set(true);
  const pendingRegisterationData = writable({ ...defaultData });
  $$unsubscribe_pendingRegisterationData = subscribe(pendingRegisterationData, (value) => $pendingRegisterationData = value);
  let step = 1;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$user ? `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

	${validate_component(Container, "Container").$$render($$result, { className: "mt-24" }, {}, {
      default: () => {
        return `${validate_component(RegisterHeader, "Header").$$render($$result, { step }, {}, {})}

		${validate_component(GoBack, "GoBack").$$render($$result, { className: "mt-12" }, {}, {})}

		${`<div class="${"flex flex-col items-center justify-center gap-6 mt-14"}">${validate_component(TextInput, "TextInput").$$render(
          $$result,
          {
            label: "Registered hotel name:",
            placeholder: "hotel name here ...",
            value: $pendingRegisterationData.hotel.name
          },
          {
            value: ($$value) => {
              $pendingRegisterationData.hotel.name = $$value;
              $$settled = false;
            }
          },
          {}
        )}
				${validate_component(TextInput, "TextInput").$$render(
          $$result,
          {
            label: "Hotel tagline:",
            placeholder: "tagline here ...",
            value: $pendingRegisterationData.hotel.tagline
          },
          {
            value: ($$value) => {
              $pendingRegisterationData.hotel.tagline = $$value;
              $$settled = false;
            }
          },
          {}
        )}
				${validate_component(TextInput, "TextInput").$$render(
          $$result,
          {
            label: "Address:",
            placeholder: "Address here ...",
            value: $pendingRegisterationData.hotel.address
          },
          {
            value: ($$value) => {
              $pendingRegisterationData.hotel.address = $$value;
              $$settled = false;
            }
          },
          {}
        )}

				<div class="${"flex items-center justify-center flex-col gap-6 mt-10"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            disabled: !$pendingRegisterationData.hotel.name.trim() || !$pendingRegisterationData.hotel.tagline.trim() || !$pendingRegisterationData.hotel.address.trim(),
            label: "Proceed",
            className: "w-32 px-6",
            primary: true
          },
          {},
          {
            default: () => {
              return `Proceed ${validate_component(ArrowRight, "ArrowRight").$$render($$result, {}, {}, {})}`;
            }
          }
        )}

					${validate_component(Button, "Button").$$render($$result, { label: "Cancel", className: "w-32 px-6" }, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div></div>`}`;
      }
    })}` : `${validate_component(LoadingScreenDefault, "LoadingScreenDefault").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_pendingRegisterationData();
  $$unsubscribe_isLoading();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
