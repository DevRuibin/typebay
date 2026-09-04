import { QueryClientProvider } from "@tanstack/solid-query";
import { JSXElement } from "solid-js";
import { render } from "solid-js/web";

import { queryClient } from "../queries";
import { qsa } from "../utils/dom";
import { Theme } from "./core/Theme";
import { DevTools } from "./dev/DevTools";
import { CommandlineHotkey } from "./hotkeys/CommandlineHotkey";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Overlays } from "./layout/overlays/Overlays";
import { Modals } from "./modals/Modals";
import { NotFoundPage } from "./pages/404Page";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { CapsWarning } from "./pages/test/CapsWarning";
import { CompositionDisplay } from "./pages/test/CompositionDisplay";
import { Keymap } from "./pages/test/Keymap";
import { BarTimerProgress } from "./pages/test/live-stats/BarTimerProgress";
import { LiveStatsMini } from "./pages/test/live-stats/LiveStatsMini";
import { LiveStatsTextBottom } from "./pages/test/live-stats/LiveStatsTextBottom";
import { LiveStatsTextTop } from "./pages/test/live-stats/LiveStatsTextTop";
import { TestModesNotice } from "./pages/test/modes-notice/TestModesNotice";
import { OutOfFocusWarning } from "./pages/test/OutOfFocusWarning";
import { Premid } from "./pages/test/Premid";
import { TestConfig } from "./pages/test/TestConfig";
import { Popups } from "./popups/Popups";

const components: Record<string, () => JSXElement> = {
  footer: () => <Footer />,
  settingspage: () => <SettingsPage />,
  modals: () => <Modals />,
  popups: () => <Popups />,
  overlays: () => <Overlays />,
  theme: () => <Theme />,
  header: () => <Header />,
  devtools: () => <DevTools />,
  testconfig: () => <TestConfig />,
  commandlinehotkey: () => <CommandlineHotkey />,
  testmodesnotice: () => <TestModesNotice />,
  capswarning: () => <CapsWarning />,
  compositiondisplay: () => <CompositionDisplay />,
  notfoundpage: () => <NotFoundPage />,
  keymap: () => <Keymap />,
  outoffocuswarning: () => <OutOfFocusWarning />,
  livestatsmini: () => <LiveStatsMini />,
  livestatstexttop: () => <LiveStatsTextTop />,
  livestatstextbottom: () => <LiveStatsTextBottom />,
  bartimerprogress: () => <BarTimerProgress />,
  premid: () => <Premid />,
};

function mountToMountpoint(name: string, component: () => JSXElement): void {
  for (const mountPoint of qsa(name)) {
    render(
      () => (
        <QueryClientProvider client={queryClient}>
          {component()}
        </QueryClientProvider>
      ),
      mountPoint.native,
    );
  }
}

export function mountComponents(): void {
  for (const [query, component] of Object.entries(components)) {
    mountToMountpoint(`mount[data-component=${query}]`, component);
  }
}
