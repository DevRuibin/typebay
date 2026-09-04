import { Button } from "../common/Button";
import { H2 } from "../common/Headers";
import { Page } from "../common/Page";
import { t } from "../../i18n";

export function NotFoundPage() {
  return (
    <Page id="404">
      <div class="flex h-full items-center justify-center">
        <div class="flex max-w-md flex-col items-center gap-4 text-center">
          <H2 text="404" class="pb-0 text-7xl text-main" />
          <p>{t("page404Text")}</p>
          <Button
            fa={{ icon: "fa-keyboard" }}
            text={t("page404Button")}
            router-link
            href="/"
            class="px-8 py-4"
          />
        </div>
      </div>
    </Page>
  );
}
