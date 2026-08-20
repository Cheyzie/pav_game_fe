
import type { FinalPlayerResult } from "~/types/player";
import FinalResult from "./final_result/final_result";
import { RestartButton } from "./styles";
import { Title, TitleGroup } from "../../common/styles";

export default function Final({ results, onReset }: { results: FinalPlayerResult[], onReset: VoidFunction }) {
    return (<>
        <TitleGroup>
            <Title>final standings</Title>
            {results.map((result) => <FinalResult result={result}/>)}
        </TitleGroup>
        <RestartButton onClick={onReset}>PLAY AGAIN</RestartButton>
    </>);
}