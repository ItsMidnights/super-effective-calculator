const noGlow = `
textarea, select, input, button {
    -webkit-appearance: none;
    outline: none!important;
}
textarea:focus, select:focus, input:focus, button:focus {
    -webkit-appearance: none;
    outline: none!important;
}
`;

export const injectWebCss = () => {
  // Only on web

  // Inject style
  const style = document.createElement("style");
  style.textContent = `textarea, select, input, button { outline: none!important; }`;
  return document.head.append(style);
};
