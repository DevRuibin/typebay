// TypeBay UI language support (interface chrome only).
// Product vocabulary (settings/config labels) intentionally stays English,
// matching upstream Monkeytype — the typing content itself is per-language.
export const LANGS = ["en", "zh-CN", "zh-TW", "ko", "fr", "es"] as const;
export type Lang = (typeof LANGS)[number];

const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  ko: "한국어",
  fr: "Français",
  es: "Español",
};

type Dict = Record<string, string>;

const dicts: Record<Lang, Dict> = {
  en: {
    langAria: "Language",
    tagline: "the free typing test",
    metaTitle: "TypeBay | Free typing speed test",
    keytipRestart: "restart test",
    keytipCommandline: "command line",
    testSettings: "test settings",
    footerPrivacy: "privacy",
    footerTerms: "terms",
    footerSecurity: "security",
    footerLicense: "Fork of Monkeytype · GPL-3.0",
    page404Title: "404 - page not found",
    page404Text: "This page doesn't exist.",
    page404Button: "back to the test",
  },
  "zh-CN": {
    langAria: "语言",
    tagline: "免费打字速度测试",
    metaTitle: "TypeBay | 免费打字速度测试",
    keytipRestart: "重新开始测试",
    keytipCommandline: "命令行",
    testSettings: "测试设置",
    footerPrivacy: "隐私政策",
    footerTerms: "服务条款",
    footerSecurity: "安全说明",
    footerLicense: "Monkeytype 的衍生项目 · GPL-3.0",
    page404Title: "404 - 页面不存在",
    page404Text: "该页面不存在。",
    page404Button: "返回测试",
  },
  "zh-TW": {
    langAria: "語言",
    tagline: "免費打字速度測試",
    metaTitle: "TypeBay | 免費打字速度測試",
    keytipRestart: "重新開始測試",
    keytipCommandline: "命令列",
    testSettings: "測試設定",
    footerPrivacy: "隱私權政策",
    footerTerms: "服務條款",
    footerSecurity: "安全說明",
    footerLicense: "Monkeytype 的衍生專案 · GPL-3.0",
    page404Title: "404 - 頁面不存在",
    page404Text: "該頁面不存在。",
    page404Button: "返回測試",
  },
  ko: {
    langAria: "언어",
    tagline: "무료 타자 속도 테스트",
    metaTitle: "TypeBay | 무료 타자 속도 테스트",
    keytipRestart: "테스트 다시 시작",
    keytipCommandline: "명령줄",
    testSettings: "테스트 설정",
    footerPrivacy: "개인정보 처리방침",
    footerTerms: "이용약관",
    footerSecurity: "보안",
    footerLicense: "Monkeytype 포크 · GPL-3.0",
    page404Title: "404 - 페이지를 찾을 수 없음",
    page404Text: "이 페이지는 존재하지 않습니다.",
    page404Button: "테스트로 돌아가기",
  },
  fr: {
    langAria: "Langue",
    tagline: "test de dactylographie gratuit",
    metaTitle: "TypeBay | Test de vitesse de frappe gratuit",
    keytipRestart: "relancer le test",
    keytipCommandline: "ligne de commande",
    testSettings: "paramètres du test",
    footerPrivacy: "confidentialité",
    footerTerms: "conditions",
    footerSecurity: "sécurité",
    footerLicense: "Fork de Monkeytype · GPL-3.0",
    page404Title: "404 - page introuvable",
    page404Text: "Cette page n'existe pas.",
    page404Button: "retour au test",
  },
  es: {
    langAria: "Idioma",
    tagline: "test de mecanografía gratuito",
    metaTitle: "TypeBay | Test de velocidad de escritura gratis",
    keytipRestart: "reiniciar la prueba",
    keytipCommandline: "línea de comandos",
    testSettings: "ajustes de la prueba",
    footerPrivacy: "privacidad",
    footerTerms: "términos",
    footerSecurity: "seguridad",
    footerLicense: "Fork de Monkeytype · GPL-3.0",
    page404Title: "404 - página no encontrada",
    page404Text: "Esta página no existe.",
    page404Button: "volver a la prueba",
  },
};

export const LS_KEY = "typebay.lang";

export function detectLang(): Lang {
  const stored = localStorage.getItem(LS_KEY);
  if (stored !== null && (LANGS as readonly string[]).includes(stored)) {
    return stored as Lang;
  }
  const wanted = (navigator.languages ?? [navigator.language])
    .map((l) => l.toLowerCase())
    .find(
      (l) =>
        l === "zh-cn" || l === "zh-tw" || l === "zh-hk" || l === "ko" ||
        l === "fr" || l === "es" || l.startsWith("en"),
    );
  if (wanted === "zh-tw" || wanted === "zh-hk") return "zh-TW";
  if (wanted === "zh-cn") return "zh-CN";
  if (wanted === "ko") return "ko";
  if (wanted === "fr") return "fr";
  if (wanted === "es") return "es";
  return "en";
}

export function getLang(): Lang {
  return detectLang();
}

export function setLang(lang: Lang): void {
  localStorage.setItem(LS_KEY, lang);
  document.documentElement.lang = lang;
  document.title = t("metaTitle");
  location.reload();
}

export function t(key: string): string {
  const lang = getLang();
  return dicts[lang][key] ?? dicts.en[key] ?? key;
}

export function langName(lang: Lang): string {
  return LANG_NAMES[lang];
}
