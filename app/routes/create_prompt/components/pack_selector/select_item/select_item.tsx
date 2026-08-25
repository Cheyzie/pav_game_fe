import { Container, Count, Highlight, Name } from "./styles";
import type { Category } from "~/types/category";

export function SelectItem({pack, highlited, selected, onClick}: {pack: Category, highlited: string, selected: boolean, onClick: VoidFunction}) {
    const regex = new RegExp(`(${highlited.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
    const parts = pack.category.split(regex);
    
    return (<Container $selected={selected} onClick={onClick}>
        <Name>
            {selected ? pack.category : parts.map((part, index) => 
                part.toLowerCase() === highlited.toLowerCase() ? (
                <Highlight key={index}>{part}</Highlight>
                ) : (
                part
                )
            )}
        </Name>
        <Count $selected={selected}>{selected ? 'selected' : pack.prompts_count}</Count>
    </Container>)

}