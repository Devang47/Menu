import { w as writable } from "./index2.js";
const isLoading = writable(false);
const user = writable();
const notifications = writable([]);
export {
  isLoading as i,
  notifications as n,
  user as u
};
