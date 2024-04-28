import React, { useState } from 'react';
import './App.css';
import TransactionForm from './TransactionForm';
import TransactionsTable from './TransactionsTable';

function App() { 
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-04-25', description: 'Groceries', amount: 5000, category: 'Food' },
    { id: 2, date: '2020-12-24', description: 'Salary', amount: 100000, category: 'Payment' },
    {id: 4, date: '2024-07-22 ', description: 'School fees', amount: 200000, category:'Receipt'},
    {id: 5, date: '2012-03-12 ', description: 'Payroll Deposit-HOTEL', amount: 6000, category:'Takeout'},
    {id: 6, date: '2018-11-13 ', description: 'Web Funds Transfer', amount: 26200, category:'Work fee'},
    {id: 7, date: '2020-01-10 ', description: 'Electricity Bill', amount: 2000, category:'Electricity'},
    {id: 8, date: '2021-10-25 ', description: 'Cheque No-409', amount: 500000, category:'Income'},
    {id: 9, date: '2021-08-30 ', description: 'ATM Withdrawal', amount: 60000, category:'Shopping'},
  ])

  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const filterTransactions = () => {
    return transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const sortTransactions = (filteredTransactions) => {
    if (sortCriteria === 'category') {
      return [...filteredTransactions].sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortCriteria === 'description') {
      return [...filteredTransactions].sort((a, b) => a.description.localeCompare(b.description));
    }
    return filteredTransactions;
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  return (
    <div>
      <h1>The Royal Bank Of Flatiron</h1>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={sortCriteria} onChange={handleSortChange}>
        <option value="">Sort by</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
      <TransactionForm onSubmit={addTransaction} />
      <TransactionsTable transactions={sortTransactions(filterTransactions())} />
    </div>
  );
}

export default App;
