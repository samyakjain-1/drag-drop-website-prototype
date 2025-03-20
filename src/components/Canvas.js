import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Canvas = () => {
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);

  const handleDropFromSidebar = (e) => {
    e.preventDefault();
    const elementType = e.dataTransfer.getData('elementType');
    const newElement = {
      id: Date.now().toString(),
      type: elementType,
      content:
        elementType === 'text'
          ? 'Sample Text'
          : elementType === 'button'
          ? 'Click Me'
          : 'https://via.placeholder.com/150',
    };
    setElements((prev) => [...prev, newElement]);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleElementClick = (id) => {
    setSelectedElementId(id);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setElements((prev) =>
      prev.map((el) =>
        el.id === selectedElementId ? { ...el, content: newValue } : el
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(elements);
    const [movedItem] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, movedItem);
    setElements(reordered);
  };

  const exportToHTML = () => {
    let htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Exported Website</title></head><body>';

    elements.forEach((el) => {
      if (el.type === 'text') {
        htmlContent += `<p>${el.content}</p>`;
      } else if (el.type === 'image') {
        htmlContent += `<img src="${el.content}" alt="image" />`;
      } else if (el.type === 'button') {
        htmlContent += `<button>${el.content}</button>`;
      }
    });

    htmlContent += '</body></html>';

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'my-website.html';
    link.click();
  };

  const selectedElement = elements.find((el) => el.id === selectedElementId);

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          flex: 1,
          minHeight: '100vh',
          padding: '20px',
          background: '#f9f9f9',
        }}
        onDrop={handleDropFromSidebar}
        onDragOver={handleDragOver}
      >
        <h3>Canvas Area</h3>
        <button onClick={exportToHTML} style={{ marginBottom: '20px' }}>
          Export as HTML
        </button>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="canvas-elements">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {elements.map((el, index) => (
                  <Draggable key={el.id} draggableId={el.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => handleElementClick(el.id)}
                        style={{
                          marginBottom: '10px',
                          border:
                            selectedElementId === el.id
                              ? '2px solid blue'
                              : '1px solid #ccc',
                          padding: '10px',
                          cursor: 'pointer',
                          background: '#fff',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {el.type === 'text' && <p>{el.content}</p>}
                        {el.type === 'image' && (
                          <img src={el.content} alt="img" width="150" />
                        )}
                        {el.type === 'button' && <button>{el.content}</button>}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {/* Editing Form */}
      {selectedElement && (
        <div style={{ width: '300px', padding: '20px', borderLeft: '1px solid #ccc' }}>
          <h3>Edit Element</h3>
          <label>
            {selectedElement.type === 'image' ? 'Image URL' : 'Content'}:
            <input
              type="text"
              value={selectedElement.content}
              onChange={handleChange}
              style={{ width: '100%', marginTop: '10px', padding: '5px' }}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default Canvas;
