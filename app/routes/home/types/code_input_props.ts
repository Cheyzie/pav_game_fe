export type CodeInputProps = {
    id?: string;
    placeholder?: string;
    value?: string;
    onCodeChange: (code: string) => void;
};