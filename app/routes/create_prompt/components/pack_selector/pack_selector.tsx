import { useState } from "react";
import { Container, Footer, Header, HeaderDescription, HeaderTitle, Input, InputContainer, InputPrefix, Select, SelectAddButton, SelectAddButtonSign, SelectAddButtonText } from "./styles";
import type { Pack } from "../../types/pack";
import { SelectItem } from "./select_item/select_item";

export function PackSelector({packs}: {packs: Pack[]}) {
    const [selected, setSelected] = useState<Pack|null>(null)
    const [filter, setFilter] = useState("")
    return(<Container>
        <Header>
            <HeaderTitle>Pack</HeaderTitle>
            {selected && <HeaderDescription>{selected.count} in selected</HeaderDescription>}
        </Header>
        <InputContainer>
            <InputPrefix>/</InputPrefix>
            <Input type="text" value={filter} onChange={e => setFilter(e.target.value.toLowerCase())}></Input>
        </InputContainer>
        <Select>
            {selected && !packs.find((p)=>p.name.toLowerCase().includes(filter) && p.name===selected?.name) && <SelectItem pack={selected} highlited="" selected onClick={()=>{}}/>}
            {packs.
                filter(p => p.name.toLowerCase().includes(filter)).
                map(p => <SelectItem key={p.name} pack={p} highlited={filter} selected={p.name===selected?.name} onClick={()=>setSelected(p)}/>)}
            {filter && filter !== selected?.name && !packs.find((p)=>p.name.toLowerCase() === filter) && 
                <SelectAddButton onClick={() => setSelected({name: filter, count: 0})}>
                    <SelectAddButtonSign>+</SelectAddButtonSign>
                    <SelectAddButtonText>Create “{filter}”</SelectAddButtonText>
                </SelectAddButton>}
        </Select>
        <Footer>type to filter · {packs.length} packs · pick up one</Footer>
    </Container>)
}