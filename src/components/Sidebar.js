import React from 'react';

const Sidebar = () => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('elementType', type);
  };

  return (
    <div style={{ minWidth: '250px', padding: '10px', borderRight: '1px solid #ccc', flexShrink: 0 }}>
      <h3>Elements</h3>
      <div draggable onDragStart={(e) => handleDragStart(e, 'text')}>Text</div>
      <div draggable onDragStart={(e) => handleDragStart(e, 'image')}>Image</div>
      <div draggable onDragStart={(e) => handleDragStart(e, 'button')}>Button</div>
    </div>
  );
};

export default Sidebar;
