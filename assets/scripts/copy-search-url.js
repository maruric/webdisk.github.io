async function copySearchUrl(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to get ${url}`);
    }
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    const template = xml.querySelector('Url[type="text/html"]')?.getAttribute('template')?.replace('{searchTerms}', '%s');
    await navigator.clipboard.writeText(template);
    window.alert(`Copied ${template}`);
  } catch (error) {
    window.alert(error);
  }
}
