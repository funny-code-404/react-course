import { createContext, useRef } from "react";
import { TRefsContext } from "./types";


export const refsContextDefault: TRefsContext = {
    toAvailableHotelsRef: null,
};

export const RefsContext = createContext(refsContextDefault);