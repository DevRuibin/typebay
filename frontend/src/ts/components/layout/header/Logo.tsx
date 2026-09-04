import { JSXElement } from "solid-js";

import { restartTestEvent } from "../../../events/test";
import { getActivePage } from "../../../states/core";
import { getFocus } from "../../../states/test";
import { cn } from "../../../utils/cn";
import { t } from "../../../i18n";

export function Logo(): JSXElement {
  return (
    <a
      href={`${location.origin}/`}
      class="-m-2 flex h-6 w-max gap-2 rounded-[0.8rem] p-2"
      aria-label={`TypeBay - ${t("tagline")}`}
      router-link
      style={{
        "box-sizing": "content-box",
        "font-family": "Lexend Deca, sans-serif",
      }}
      data-ui-element="logo"
      onClick={() => {
        if (getActivePage() === "test") restartTestEvent.dispatch();
      }}
    >
      <div
        class={cn(
          "hidden h-6 place-content-center text-[2rem] leading-0 sm:grid",
        )}
      >
        <h1
          class={cn("-mt-[0.11em] text-text transition-colors duration-250", {
            "text-sub": getFocus(),
          })}
          data-ui-element="logoText"
        >
          typebay
        </h1>
      </div>
    </a>
  );
}
