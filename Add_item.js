import React, { useState } from 'react';

export default function AddRemoveItem() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const [show, setShow] = useState(false);

  const addItem = () => {
    const orders = [...list, item];
    setList(orders);
    setItem('');
    setShow(false);
    console.log(orders);
  };

  const showAll = () => {
    setShow(true);
  };

  return (
    <div>
      <input
        type='text'
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder='add item'
      />
      <button onClick={addItem}>Add</button>
      <br />
      <button onClick={showAll}>Show items</button>
      <div>

        {show && (
          <div>
            {list.map((item, index) => (
              <p key={index}>{index+1} {item}</p>
            ))}
          </div>
        )}
      </div>
    </div>
);
}
