import React, { useState } from 'react';
import { Button, Header, Icon } from 'semantic-ui-react';
import ExpensesList from './ExpensesList';
import ExpensesForm from './ExpensesForm';
import { mockExpenses } from '../../Data/mockData';

const ExpensesMain = () => {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState(mockExpenses);

  const handleCreate = newExpense => {
    const newExpenses = expenses;
    newExpenses.push(newExpense)
    setExpenses(newExpenses);
    handleCloseForm();
  };

  const handleDelete = expenseId => {
    const newExpenses = expenses.filter(e => e.id !== expenseId);
    setExpenses(newExpenses);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <Header size="huge">
        <Icon name="money bill alternate outline" />
        <Header.Content>Expenses</Header.Content>
        <Header.Subheader style={{ marginTop: '0.5em' }}>
          View, add, edit, or delete monthly expenses here.
        </Header.Subheader>
      </Header>
      <ExpensesList handleDelete={handleDelete} expenses={expenses} />
      <Button
        onClick={() => setShowForm(true)}
        content="Add Expense"
        icon="add"
        primary
        style={{ marginBottom: '2em' }}
      />
      {showForm && (
        <ExpensesForm handleCancel={handleCloseForm} handleCreate={handleCreate} />
      )}
    </div>
  );
};

export default ExpensesMain;
