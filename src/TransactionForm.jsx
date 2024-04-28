import React, { useState } from 'react';


function TransactionForm({ onSubmit }) {
  const [transaction, setTransaction] = useState({ description: '', amount: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...transaction, id: Date.now() });
    setTransaction({ description: '', amount: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="date"
        placeholder="Date"
        value={transaction.date}
        onChange={handleChange}
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={transaction.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={transaction.amount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={transaction.category}
        onChange={handleChange}
      />
      <button type="submit">Add new Transaction</button>
    </form>
  );
}

export default TransactionForm;
