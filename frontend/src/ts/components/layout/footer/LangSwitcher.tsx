import { JSXElement } from "solid-js";

import { LANGS, Lang, langName, setLang, t } from "../../../i18n";

export function LangSwitcher(): JSXElement {
  return (
    <select
      class="textButton"
      aria-label={t("langAria")}
      value={document.documentElement.lang}
      onChange={(e) => {
        const lang = (e.currentTarget as HTMLSelectElement).value as Lang;
        if ((LANGS as readonly string[]).includes(lang)) setLang(lang);
      }}
    >
      {LANGS.map((lang) => (
        <option value={lang}>{langName(lang)}</option>
      ))}
    </select>
  );
}
