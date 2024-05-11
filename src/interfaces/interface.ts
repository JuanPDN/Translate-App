import { ReactNode } from "react";

export interface Props {
    firstCard?: boolean;
}

export interface Language {
    value: string,
    name:string
}

export interface Children {
    children: ReactNode
  }