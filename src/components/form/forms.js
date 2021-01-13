import React, { useState } from 'react';
import './formLayout.css';

export default function Form({ onCustomOne }) {
  const [form, useForm] = useState({
    title: '',
    responsible: '',
    description: '',
    priority: 'low',
  });

  function HandleInput(e) {
    const { value, name } = e.target;
    useForm((prev) => {
      prev[name] = value;
      return prev;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCustomOne(form);
  }

  return (
    <div className="formLayout-body">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" onChange={HandleInput} placeholder="Title" required />
        </div>
        <div>
          <input type="text" name="responsible" onChange={HandleInput} placeholder="Responsable" required />
        </div>
        <div>
          <input type="text" name="description" onChange={HandleInput} placeholder="Description" required />
        </div>
        <div>
          <select name="priority" onChange={HandleInput}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
