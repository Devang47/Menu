import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { M as Meta } from "../../../chunks/meta.js";
import { L as Logo } from "../../../chunks/Logo.js";
import { C as Container } from "../../../chunks/Container.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import "../../../chunks/auth.js";
const GoogleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"12"}" height="${"12"}" viewBox="${"0 0 10 10"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.72801 4.077C9.78952 4.4065 9.82302 4.751 9.82302 5.1105C9.82302 7.9225 7.94101 9.922 5.09851 9.922C4.45209 9.9222 3.81197 9.79502 3.21471 9.54774C2.61746 9.30045 2.07478 8.93791 1.61769 8.48082C1.16061 8.02373 0.798061 7.48106 0.550777 6.8838C0.303494 6.28655 0.176317 5.64642 0.176514 5C0.176317 4.35358 0.303494 3.71346 0.550777 3.1162C0.798061 2.51895 1.16061 1.97627 1.61769 1.51918C2.07478 1.06209 2.61746 0.69955 3.21471 0.452267C3.81197 0.204983 4.45209 0.0778061 5.09851 0.0780032C6.42751 0.0780032 7.53802 0.567003 8.39002 1.361L7.00251 2.7485V2.745C6.48601 2.253 5.83051 2.0005 5.09851 2.0005C3.47451 2.0005 2.15451 3.3725 2.15451 4.997C2.15451 6.621 3.47451 7.996 5.09851 7.996C6.57201 7.996 7.57502 7.1535 7.78101 5.9965H5.09851V4.077H9.72852H9.72801Z"}" fill="${"#F1F1F1"}"></path></svg>`;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render(
    $$result,
    {
      className: "max-w-[400px]",
      centered: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Card, "Card").$$render($$result, { className: "!py-16 max-w-md mx-auto" }, {}, {
          default: () => {
            return `<div class="${"flex flex-col items-center justify-center"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}

			<h1 class="${"text-center text-[28px] mt-8 font-ne"}">Sign in to <span class="${"font-bold"}">Meny\u016B</span></h1>

			${validate_component(Button, "Button").$$render(
              $$result,
              {
                label: "login-with-goole",
                className: "mt-14 !font-medium px-8 gap-2 bg-white/5 border-opacity-30 backdrop-blur-sm"
              },
              {},
              {
                default: () => {
                  return `${validate_component(GoogleIcon, "GoogleIcon").$$render($$result, {}, {}, {})} Continue with Google
			`;
                }
              }
            )}</div>`;
          }
        })}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Meta, "Meta").$$render(
    $$result,
    {
      data: {
        title: "Login | Meny\u016B",
        description: "Login to Meny\u016B"
      }
    },
    {},
    {}
  )}
${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
