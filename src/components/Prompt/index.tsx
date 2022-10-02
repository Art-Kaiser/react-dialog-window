import React, {useState} from 'react';
import {Footer} from "../Footer";
import {PromptProps} from "../DialogWindow/types";

const Prompt = ({ buttons, onSuccess, onReject }: PromptProps) => {
    const [value, setValue] = useState<string>("")
    const handleChangeValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value)
    }

    return (
        <div>
            <div className={'prompt_wrapper'}>
                <input
                    className={'prompt_input'}
                    type="text"
                    value={value}
                    placeholder={""}
                    onChange={handleChangeValue}
                />
            </div>
            <Footer
                type={'prompt'}
                buttons={buttons}
                onSuccess={() => onSuccess?.(value)}
                onReject={onReject}
            />
        </div>
    );
};

export default Prompt;