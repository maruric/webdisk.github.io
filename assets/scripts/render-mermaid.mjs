function renderMermaid() {
  mermaid.initialize({ startOnLoad: false });
  const codes = document.querySelectorAll('pre > code.language-mermaid');
  for (const [i, code] of codes.entries()) {
    const id = `mermaid-${i}`;
    const graphDefinition = code.textContent;
    const pre = code.parentElement;
    const insertSvg = svgCode => {
      const div = document.createElement('div');
      div.innerHTML = svgCode;
      pre.parentElement.replaceChild(div, pre);
    };
    mermaid.render(id, graphDefinition, insertSvg);
  }
}

renderMermaid();
