function replaceLinks() {
  if (!navigator.userAgent.includes('Android')) {
    return;
  }
  const pattern = /^https?:\/\/play\.google\.com\/store\/apps\/details\?/;
  const toStr = 'market://details?';
  const links = document.querySelectorAll('a');
  for (const link of links) {
    link.href = link.href.replace(pattern, toStr);
  }
}

replaceLinks();
