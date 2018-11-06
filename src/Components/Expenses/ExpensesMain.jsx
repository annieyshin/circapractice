import React, { useState } from 'react';
import { Button, Header, Icon } from 'semantic-ui-react';
import ExpensesList from './ExpensesList';
import ExpensesForm from './ExpensesForm';

const ExpensesMain = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCancel = () => {
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
      <ExpensesList />
      <Button
        onClick={() => setShowForm(true)}
        content="Add Expense"
        icon="add"
        primary
        style={{ marginBottom: '2em' }}
      />
      {showForm && <ExpensesForm handleCancel={handleCancel} />}
    </div>
  );
};

export default ExpensesMain;
