import { useState } from "react";

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s10'>
                <input
                    type='search'
                    id='search-field'
                    value={value}
                    placeholder='text here what you want'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className='input-field col s2'>
                <input
                    type='submit'
                    className='btn'
                    id='search-button'
                    value='Search'
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
}

export { Search };
