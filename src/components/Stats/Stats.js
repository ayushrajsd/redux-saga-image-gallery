import React from 'react';
import './style.css';

const Stats = ({ stats }) => {
    console.log('stats:', stats);
    return (
        <div className="stats">
            {stats && stats.isLoading && <span>🧐</span>}
            {stats && stats.stats && <span>🤘 {stats.stats}</span>}
            {stats && stats.error && <span>❗️</span>}
        </div>
    );
};

export default Stats;
