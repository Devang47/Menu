import { c as create_ssr_component, b as add_attribute, v as validate_component } from "./index.js";
import clsx from "clsx";
const ParallelLines = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg${add_attribute("class", clsx(className, "fill-light-4/30"), 0)} viewBox="${"0 0 92 60"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><mask id="${"mask0_166_2007"}" style="${"maskType: 'alpha'"}" maskUnits="${"userSpaceOnUse"}" x="${"-14"}" y="${"-42"}" width="${"106"}" height="${"102"}"><rect x="${"-14"}" y="${"-42"}" width="${"105.01"}" height="${"101.908"}" fill="${"#D9D9D9"}"></rect></mask><g mask="${"url(#mask0_166_2007)"}"><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M-36.9484 67.1561L-0.890278 -48.1872L0.352783 -47.7919L-35.7053 67.5514L-36.9484 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M-29.9596 67.1561L6.09849 -48.1872L7.34155 -47.7919L-28.7165 67.5514L-29.9596 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M-22.9706 67.1561L13.0875 -48.1872L14.3306 -47.7919L-21.7275 67.5514L-22.9706 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M-15.9818 67.1561L20.0763 -48.1872L21.3193 -47.7919L-14.7387 67.5514L-15.9818 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M-8.99304 67.1561L27.065 -48.1872L28.3081 -47.7919L-7.74998 67.5514L-8.99304 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M-2.00403 67.1561L34.0541 -48.1872L35.2971 -47.7919L-0.760964 67.5514L-2.00403 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M4.98474 67.1561L41.0428 -48.1872L42.2859 -47.7919L6.22781 67.5514L4.98474 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M11.9735 67.1561L48.0316 -48.1872L49.2747 -47.7919L13.2166 67.5514L11.9735 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M18.9625 67.1561L55.0206 -48.1872L56.2637 -47.7919L20.2056 67.5514L18.9625 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M25.9513 67.1561L62.0094 -48.1872L63.2524 -47.7919L27.1944 67.5514L25.9513 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M32.9401 67.1561L68.9981 -48.1872L70.2412 -47.7919L34.1831 67.5514L32.9401 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M39.9288 67.1561L75.9869 -48.1872L77.23 -47.7919L41.1719 67.5514L39.9288 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M46.9178 67.1561L82.9759 -48.1872L84.219 -47.7919L48.1609 67.5514L46.9178 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M53.9066 67.1561L89.9647 -48.1872L91.2078 -47.7919L55.1497 67.5514L53.9066 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M60.8956 67.1561L96.9537 -48.1872L98.1968 -47.7919L62.1387 67.5514L60.8956 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M67.8844 67.1561L103.942 -48.1872L105.186 -47.7919L69.1275 67.5514L67.8844 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M74.8732 67.1561L110.931 -48.1872L112.174 -47.7919L76.1162 67.5514L74.8732 67.1561Z"}" fill="${"current"}"></path><path opacity="${"0.8"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M81.8619 67.1561L117.92 -48.1872L119.163 -47.7919L83.105 67.5514L81.8619 67.1561Z"}" fill="${"current"}"></path></g></svg>`;
});
const Rect1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg${add_attribute("class", clsx(className, "stroke-light-4/50"), 0)} viewBox="${"0 0 80 87"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g opacity="${"0.2"}"><rect x="${"1.5"}" y="${"1.5"}" width="${"84"}" height="${"84"}" stroke="${"current"}"></rect><rect x="${"1.5"}" y="${"1.5"}" width="${"84"}" height="${"84"}" stroke="${"current"}"></rect><path d="${"M20.3447 1.29311V85.4138"}" stroke="${"current"}"></path><path d="${"M20.3447 1.29311V85.4138"}" stroke="${"current"}"></path><path d="${"M1.29297 1.29311L43.4999 43.5M43.4999 43.5L85.7068 1.29311M43.4999 43.5L1.29297 85.7069M43.4999 43.5L85.9999 85.7069"}" stroke="${"current"}"></path><path d="${"M1.29297 1.29311L43.4999 43.5M43.4999 43.5L85.7068 1.29311M43.4999 43.5L1.29297 85.7069M43.4999 43.5L85.9999 85.7069"}" stroke="${"current"}"></path><rect x="${"33.2412"}" y="${"33.2414"}" width="${"20.5172"}" height="${"20.5172"}" stroke="${"current"}"></rect><rect x="${"33.2412"}" y="${"33.2414"}" width="${"20.5172"}" height="${"20.5172"}" stroke="${"current"}"></rect><path d="${"M43.5 43.5H85.7069"}" stroke="${"current"}"></path><path d="${"M43.5 43.5H85.7069"}" stroke="${"current"}"></path></g></svg>`;
});
const Circle1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg${add_attribute("class", clsx(className, "fill-light-4/30"), 0)} viewBox="${"0 0 118 64"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M53.9643 0.787182H50.0357C14.8867 0.787182 -13.6071 29.2811 -13.6071 64.43C-13.6071 99.579 14.8867 128.073 50.0357 128.073H53.9643C89.1133 128.073 117.607 99.579 117.607 64.43C117.607 29.2811 89.1133 0.787182 53.9643 0.787182ZM50.0357 0.394325C14.6698 0.394325 -14 29.0641 -14 64.43C-14 99.796 14.6698 128.466 50.0357 128.466H53.9643C89.3302 128.466 118 99.796 118 64.43C118 29.0641 89.3302 0.394325 53.9643 0.394325H50.0357Z"}" fill="${"current"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M-9.6785 87.6086L73.6072 4.32289L73.885 4.60068L-9.40071 87.8864L-9.6785 87.6086Z"}" fill="${"current"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M51.9925 128.466L51.6858 0.00146587L52.0786 0L52.3854 128.464L51.9925 128.466Z"}" fill="${"current"}"></path></svg>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { large = false } = $$props;
  let { className = "" } = $$props;
  let { noBgImages = false } = $$props;
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.noBgImages === void 0 && $$bindings.noBgImages && noBgImages !== void 0)
    $$bindings.noBgImages(noBgImages);
  return `<div${add_attribute("class", clsx("bg-white bg-opacity-[1.5%] border border-white/10 rounded-[12px] py-4 px-6 relative overflow-hidden", className), 0)}>${!noBgImages ? `${validate_component(ParallelLines, "ParallelLines").$$render(
    $$result,
    {
      className: "w-[100px] absolute top-[-6px] left-[-6px] z-[-1]"
    },
    {},
    {}
  )}
		${validate_component(Rect1, "Rect1").$$render(
    $$result,
    {
      className: "w-[90px] absolute top-[45%] right-0 z-[-1]"
    },
    {},
    {}
  )}
		${validate_component(Circle1, "Circle1").$$render(
    $$result,
    {
      className: "w-[130px] absolute bottom-[-5px] left-[-10px] z-[-1]"
    },
    {},
    {}
  )}` : ``}

	${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Card as C
};
