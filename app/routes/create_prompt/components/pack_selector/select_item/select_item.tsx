import type { Pack } from "~/routes/create_prompt/types/pack";
import { Container, Count, Highlight, Name } from "./styles";

export function SelectItem({pack, highlited, selected, onClick}: {pack: Pack, highlited: string, selected: boolean, onClick: VoidFunction}) {
    const regex = new RegExp(`(${highlited.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
    const parts = pack.name.split(regex);
    
    return (<Container $selected={selected} onClick={onClick}>
        <Name>
            {selected ? pack.name : parts.map((part, index) => 
                part.toLowerCase() === highlited.toLowerCase() ? (
                <Highlight key={index}>{part}</Highlight>
                ) : (
                part
                )
            )}
        </Name>
        <Count $selected={selected}>{selected ? 'selected' : pack.count}</Count>
    </Container>)

}