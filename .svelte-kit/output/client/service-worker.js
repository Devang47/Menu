const l = [
  "/_app/immutable/start-90eed2b9.js",
  "/_app/immutable/components/pages/_layout.svelte-91e7d219.js",
  "/_app/immutable/assets/_layout-92484e5e.css",
  "/_app/immutable/components/pages/_error.svelte-3c431104.js",
  "/_app/immutable/assets/_error-3b02b99b.css",
  "/_app/immutable/components/pages/_page.svelte-fe7490c4.js",
  "/_app/immutable/assets/_page-3a324999.css",
  "/_app/immutable/components/pages/components/_page.svelte-9bb7f338.js",
  "/_app/immutable/components/pages/dashboard/_page.svelte-22e71e52.js",
  "/_app/immutable/components/pages/edit/_page.svelte-93b9e3e1.js",
  "/_app/immutable/components/pages/login/_page.svelte-9cd9272c.js",
  "/_app/immutable/components/pages/register/_page.svelte-8d83aeb9.js",
  "/_app/immutable/assets/_page-4855fa8a.css",
  "/_app/immutable/chunks/singletons-b819b431.js",
  "/_app/immutable/chunks/index-bdfca9c1.js",
  "/_app/immutable/chunks/LoadingScreenDefault-ed7dd77f.js",
  "/_app/immutable/chunks/stores-54e9aad5.js",
  "/_app/immutable/chunks/auth-a39df89b.js",
  "/_app/immutable/chunks/index-193b9492.js",
  "/_app/immutable/chunks/CtaButton-aa605dc4.js",
  "/_app/immutable/chunks/clsx.m-7020d753.js",
  "/_app/immutable/chunks/meta-336dcdb0.js",
  "/_app/immutable/chunks/Card-71dbb7de.js",
  "/_app/immutable/chunks/Container-997c4559.js",
  "/_app/immutable/chunks/TextInput-5625fa0c.js",
  "/_app/immutable/chunks/ArrowRight-cc65348c.js",
  "/_app/immutable/chunks/navbar-ab79235a.js",
  "/_app/immutable/chunks/Button-972368e9.js",
  "/_app/immutable/chunks/0-bb95d8cf.js",
  "/_app/immutable/chunks/1-3ad4db32.js",
  "/_app/immutable/chunks/2-178cde70.js",
  "/_app/immutable/chunks/3-467594c8.js",
  "/_app/immutable/chunks/4-6f8075b1.js",
  "/_app/immutable/chunks/5-79e8c7a8.js",
  "/_app/immutable/chunks/6-2b65c6f8.js",
  "/_app/immutable/chunks/7-ccf49960.js"
], r = [
  "/fonts/inter/Inter-italic.var.woff2",
  "/fonts/inter/Inter-roman.var.woff2",
  "/fonts/neuemontreal/NeueMontreal-Bold.woff2",
  "/fonts/neuemontreal/NeueMontreal-Medium.woff2",
  "/fonts/neuemontreal/NeueMontreal-Regular.woff2",
  "/icons/favicon.png",
  "/icons/favicon.svg"
], p = "1672466963462", t = self, o = `cache${p}`, i = `offline${p}`, b = ["/"], h = [], _ = (e) => e.map((s) => self.location.origin + s), d = _([
  ...r.filter((e) => !/\/icons\/(apple.*?|original.png)/.test(e)),
  ...l,
  ...b
]), m = [...d, ...h], f = new Set(m);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(o).then((s) => s.addAll(m)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const a of s)
        a !== o && a !== i && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function j(e) {
  const s = await caches.open(i);
  try {
    const a = await fetch(e);
    return s.put(e, a.clone()), a;
  } catch (a) {
    const n = await s.match(e);
    if (n)
      return n;
    throw a;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), a = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, c = f.has(s.href), u = e.request.cache === "only-if-cached" && !c;
  a && !n && !u && e.respondWith(
    (async () => c && await caches.match(e.request) || j(e.request))()
  );
});
