import { JSXElement } from "solid-js";

import { getIsScreenshotting } from "../../../states/core";
import { getFocus } from "../../../states/test";
import { cn } from "../../../utils/cn";
import { t } from "../../../i18n";
import { Button } from "../../common/Button";
import { Keytips } from "./Keytips";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeIndicator } from "./ThemeIndicator";

export function Footer(): JSXElement {
  return (
    <footer
      class={cn("relative text-xs text-sub", {
        "opacity-0": getIsScreenshotting(),
      })}
    >
      <Keytips />

      <div
        class="-m-2 flex justify-between gap-8 transition-opacity"
        classList={{
          "opacity-0": getFocus(),
        }}
      >
        <div class="grid grid-cols-1 justify-items-start xs:grid-cols-2 sm:grid-cols-4 lg:flex">
          <Button
            href="/privacy-policy.html"
            variant="text"
            text={t("footerPrivacy")}
            fa={{
              icon: "fa-lock",
              fixedWidth: true,
            }}
          />
          <Button
            href="/terms-of-service.html"
            variant="text"
            text={t("footerTerms")}
            fa={{
              icon: "fa-file-contract",
              fixedWidth: true,
            }}
          />
          <Button
            href="/security-policy.html"
            variant="text"
            text={t("footerSecurity")}
            fa={{
              icon: "fa-shield-alt",
              fixedWidth: true,
            }}
          />
          <Button
            variant="text"
            text={t("footerLicense")}
            fa={{
              icon: "fa-code",
              fixedWidth: true,
            }}
            href="https://github.com/monkeytypegame/monkeytype"
          />
        </div>
        <div class="flex flex-col items-end text-right lg:flex-row">
          <ThemeIndicator />
          <LangSwitcher />
        </div>
      </div>
    </footer>
  );
}
