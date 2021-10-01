import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ setTags }) => {
    const [value, setValue] = useState("");

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim().length > 2) {
            setTags((tags) => [value, ...tags]);
            setValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
};

AddCategory.propTypes = {
    setTags: PropTypes.func.isRequired,
};
