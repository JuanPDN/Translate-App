import { ReactNode } from "react";

export interface Props {
    firstCard?: boolean;
}

export interface Language {
    value: string,
    name: string
}

export interface Children {
    children: ReactNode
}

export interface Translate {
    translate: string,
    translated: string
}

export interface Lang {
    lang1: string,
    lang2:string
}