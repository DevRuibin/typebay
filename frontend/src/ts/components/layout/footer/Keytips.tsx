import { JSXElement, Show } from "solid-js";

import { getConfig } from "../../../config/store";
import { getFocus } from "../../../states/test";
import { t } from "../../../i18n";
import { CommandlineHotkey } from "../../hotkeys/CommandlineHotkey";
import { QuickRestartHotkey } from "../../hotkeys/QuickRestartHotkey";

export function Keytips(): JSXElement {
  return (
    <Show when={getConfig.showKeyTips}>
      <div
        class="mb-8 flex flex-col items-center gap-2 transition-opacity"
        classList={{
          "opacity-0": getFocus(),
        }}
      >
        <div class="flex items-center gap-2">
          <QuickRestartHotkey />
          <span>- {t("keytipRestart")}</span>
        </div>

        <div class="flex items-center gap-2">
          <CommandlineHotkey />
          <span>- {t("keytipCommandline")}</span>
        </div>
      </div>
    </Show>
  );
}
