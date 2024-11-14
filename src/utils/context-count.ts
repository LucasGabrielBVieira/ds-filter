import { createContext } from "react";

export type ContextCountProductsType = {
    countProducts: number;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setCountProducts: Function;
}

export const ContextCountProducts = createContext<ContextCountProductsType>(
    { countProducts: 0, setCountProducts: () => {} }
) 
