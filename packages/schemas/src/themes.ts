import { z } from "zod";
import { customEnumErrorHandler } from "./util";

export const ThemeNameSchema = z.enum(
  [    "typebay_light",
    "typebay_dark",
    "sand",
    "midnight",
  ],
  {
    errorMap: customEnumErrorHandler("Must be a known theme"),
  },
);
