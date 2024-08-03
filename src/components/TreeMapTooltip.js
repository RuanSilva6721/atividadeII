import React from 'react';

const TreeMapTooltip = ({ payload }) => {
  if (!payload || payload.length === 0) return null;

  const { name, value } = payload[0];

  return (
    <div className="bg-white border border-gray-300 p-2 rounded shadow-lg">
      <p className="text-sm font-medium">{`${name}: ${value}`}</p>
    </div>
  );
};

export default TreeMapTooltip;
