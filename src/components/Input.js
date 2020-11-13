import React, { useState } from "react";

const Input = ({ setBox, box }) => {
    const [newColor, setNewColor] = useState("");

    const onChange = (e) => {
        setNewColor(e.target.value);
    };

    const grabColor = () => {
        setBox({
            ...box,
            colors: [...box.colors, newColor],
        });
        setNewColor('');
    };

    return (
        <div>
            <input
                onChange={onChange}
                type="text"
                name="newColor"
                value={newColor}
            />
            <div>
                <button onClick={grabColor}>Add Box</button>
            </div>
        </div>
    );
};

export default Input;