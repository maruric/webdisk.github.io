function main() {
  const url = new URL(window.location.href);
  const title = url.searchParams.get("search-title");
  const href = url.searchParams.get("search-href");
  if (!title || !href) {
    return;
  }
  const link = document.createElement("link");
  link.rel = "search";
  link.type = "application/opensearchdescription+xml";
  link.title = title + " ";
  link.href = href;
  document.head.appendChild(link);
}

main();
