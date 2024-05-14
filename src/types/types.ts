import { Lang, Translate } from "../interfaces/interface"

export type GlobalContext = {
    globalState: Translate
    setGlobalState: React.Dispatch<React.SetStateAction<Translate>>
}

export type LanguageContext = {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}