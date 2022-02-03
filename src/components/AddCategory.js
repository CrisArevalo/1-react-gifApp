import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./AddCategoryStyles.scss";

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
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h2 className="Title">GifExpertApp</h2>
                <div className="Input">
                    <input
                        type="input"
                        value={value}
                        onChange={handleValueChange}
                        placeholder="Introduce una tematica..."
                        className="Input-text"
                        id="input"
                    />
                    <label className="Input-label">Gif input</label>
                </div>
            </form>
        </div>
    );
};

AddCategory.propTypes = {
    setTags: PropTypes.func.isRequired,
};
