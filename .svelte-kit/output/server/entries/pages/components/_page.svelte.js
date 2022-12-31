import { c as create_ssr_component, e as escape, b as add_attribute, d as each, v as validate_component } from "../../../chunks/index.js";
import { R as RegisterHeader, G as GoBack, A as ArrowRight } from "../../../chunks/ArrowRight.js";
import { N as Navbar } from "../../../chunks/navbar.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { T as TextInput } from "../../../chunks/TextInput.js";
import { L as Logo } from "../../../chunks/Logo.js";
const SelectDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [] } = $$props;
  let { value = options[0].value } = $$props;
  let { id = "select" } = $$props;
  let { label = "label here:" } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `<div class="${"dropdown-menu"}"><div class="${"text-[12px] font-semibold text-light-2 mb-1.5"}">${escape(label)}</div>

	<select name="${"select-menu"}" class="${"py-2.5 px-5 border border-light-3 outline-none bg-dark-1 rounded appearance-none relative focus:border-highlight !pr-14"}"${add_attribute("id", id, 0)}${add_attribute("title", id, 0)} required${add_attribute("value", value, 0)}>${each(options, (option, i) => {
    return `<option${add_attribute("value", option.value, 0)} ${i === 0 ? "selected" : ""}>${escape(option.value)}
			</option>`;
  })}</select></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex items-start justify-start gap-10 py-10 flex-col px-10"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${validate_component(RegisterHeader, "Header").$$render($$result, { className: "mt-12" }, {}, {})}

	${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
	${validate_component(Logo, "Logo").$$render($$result, { variant: "secondary" }, {}, {})}

	${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"h-40 w-60"}"></div>`;
    }
  })}

	${validate_component(TextInput, "TextInput").$$render(
    $$result,
    {
      id: "testing",
      className: "",
      label: "Placeholder here:"
    },
    {},
    {}
  )}
	${validate_component(TextInput, "TextInput").$$render($$result, { id: "testing", className: "" }, {}, {})}
	${validate_component(TextInput, "TextInput").$$render(
    $$result,
    {
      id: "testing",
      className: "",
      isTextarea: true,
      label: "Placeholder here:"
    },
    {},
    {}
  )}
	${validate_component(GoBack, "GoBack").$$render($$result, { className: "" }, {}, {})}
	${validate_component(Button, "Button").$$render($$result, { label: "testing", className: "w-32 px-6" }, {}, {})}
	${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "testing",
      className: "w-32 px-6",
      primary: true
    },
    {},
    {
      default: () => {
        return `Button ${validate_component(ArrowRight, "ArrowRight").$$render($$result, {}, {}, {})}`;
      }
    }
  )}
	${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "testing",
      className: "rounded-[7px]"
    },
    {},
    {
      default: () => {
        return `+`;
      }
    }
  )}

	${validate_component(SelectDropdown, "SelectDropdown").$$render(
    $$result,
    {
      options: [
        { value: "first", id: 0 },
        { value: "second", id: 1 },
        { value: "third", id: 2 }
      ]
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
