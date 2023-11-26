/* eslint-disable @typescript-eslint/no-explicit-any */

import { type Dispatch, type FC, type ReactNode, type SetStateAction } from "react";

declare global {
  type FCC<PROPS extends Record<string, any> = Record<string, any>> = FC<{ children?: ReactNode } & PROPS>;

  type SetStateType<T> = Dispatch<SetStateAction<T>>;
}
