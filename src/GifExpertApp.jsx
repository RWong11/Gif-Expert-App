import { useState } from 'react';
import { GifGrid, AddCategory } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Mike Ross', 'Havery Specter' ]);

    const onAddCategory = (value) => {
        if( categories.includes(value))
            return;
                
        setCategories([ value, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory = { (value) => onAddCategory(value) } />

            <ol>
                { categories.map(c => (<GifGrid key={c} category={c}></GifGrid>)) }
            </ol>
        </>
    )
}