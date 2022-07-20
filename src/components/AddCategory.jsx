import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    
    const onSubmit = (ev) => {
        ev.preventDefault();

        if(inputValue.trim().length < 1)
            return;

        onNewCategory(inputValue.trim());
        setInputValue("");
    }

    return (
        <>
            <form onSubmit={ onSubmit  }>
                <input 
                    type="text"
                    placeholder="Escriba una palabra"
                    value = { inputValue }
                    onChange = { (ev) => setInputValue(ev.target.value) }
                />
            </form>
        </>
    )
}