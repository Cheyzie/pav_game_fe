import { Container, Label, LangItem, LangsContainer } from "./styles";

export function LangSelector({selected, langs, onChange}: {selected: string, langs: string[], onChange: FunctionStringCallback}) {
    return (<Container>
        <Label>Prompts in</Label>
        <LangsContainer>
            {langs.map((lang) => <LangItem key={lang} $active={lang === selected} onClick={() => onChange(lang)}>{lang}</LangItem>)}
        </LangsContainer>
    </Container>)
}