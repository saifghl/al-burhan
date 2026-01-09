import React from 'react';
import './PublicContent.css';

const ToggleSwitch = ({ checked, onChange }) => {
    return (
        <label className="pcm-switch">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className="pcm-slider round"></span>
        </label>
    );
};

export default ToggleSwitch;
