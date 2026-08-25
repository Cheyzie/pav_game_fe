import { useEffect, useState } from "react";
import { Container, Footer, Header, HeaderDescription, HeaderTitle, Input, InputContainer, InputPrefix, Select, SelectAddButton, SelectAddButtonSign, SelectAddButtonText } from "./styles";
import { SelectItem } from "./select_item/select_item";
import type { Category } from "~/types/category";

export function PackSelector({packs, selected, onChange}: {packs: Category[], selected: Category|null, onChange: (category: Category|null) => void}) {
    const [filter, setFilter] = useState("");
    return(<Container>
        <Header>
            <HeaderTitle>Pack</HeaderTitle>
            {selected && <HeaderDescription>{selected.prompts_count} in selected</HeaderDescription>}
        </Header>
        <InputContainer>
            <InputPrefix>/</InputPrefix>
            <Input type="text" value={filter} onChange={e => setFilter(e.target.value.toLowerCase())}></Input>
        </InputContainer>
        <Select>
            {selected && !packs.find((p)=>p.category.toLowerCase().includes(filter) && p.category===selected?.category) && <SelectItem pack={selected} highlited="" selected onClick={()=>{}}/>}
            {packs.
                filter(p => p.category.toLowerCase().includes(filter)).
                map(p => <SelectItem key={p.category} pack={p} highlited={filter} selected={p.category===selected?.category} onClick={()=>onChange(p)}/>)}
            {filter && filter !== selected?.category && !packs.find((p)=>p.category.toLowerCase() === filter) && 
                <SelectAddButton onClick={() => onChange({category: filter, prompts_count: 0})}>
                    <SelectAddButtonSign>+</SelectAddButtonSign>
                    <SelectAddButtonText>Create “{filter}”</SelectAddButtonText>
                </SelectAddButton>}
        </Select>
        <Footer>type to filter · {packs.length} packs · pick up one</Footer>
    </Container>)
}