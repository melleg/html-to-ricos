import * as serverSideConverters from "ricos-content/dist/cjs/lib/server-side-converters.js";

function convertHtmlToRicosJson(html) {
  const content = serverSideConverters.fromRichTextHtml(html);

  return JSON.stringify(
    content,
    (key, value) => {
      if (!value) {
        return undefined;
      }
      return value;
    },
    2
  );
}

export { convertHtmlToRicosJson };
