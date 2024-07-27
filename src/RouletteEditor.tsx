// RouletteEditor.tsx
import React, { useState } from 'react';

interface RouletteEditorProps {
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const RouletteEditor: React.FC<RouletteEditorProps> = ({ items, setItems }) => {
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem.trim()]);
            setNewItem('');
        }
    };

    const handleRemoveItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="roulette-editor">
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="新しい項目を入力"
            />
            <button onClick={handleAddItem}>追加</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleRemoveItem(index)}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RouletteEditor;