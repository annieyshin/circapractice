import React from 'react'
import { Table } from 'semantic-ui-react';

const ReportsTableItem = ({name}) => {
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
    </Table.Row>
  )
}

export default ReportsTableItem
