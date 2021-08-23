import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../components/Table';

test('renders table title', () => {
  render(<Table tableColumns={["Property", "Value"]} data={{}} title="Test Table" />);
  expect(screen.getByText('Test Table')).toBeInTheDocument();
});

test('renders table headers', () => {
  render(<Table tableColumns={["Property", "Value"]} data={{}} title="Test Table" />);
  expect(screen.getByText('Property')).toBeInTheDocument();
  expect(screen.getByText('Value')).toBeInTheDocument();
});

test('does not render table body when data is empty', () => {
  const { container } = render(<Table tableColumns={["Property", "Value"]} data={{}} title="Test Table" />);
  let tableData = container.querySelectorAll('td')
  expect(tableData.length).toEqual(0)
});

test('renders table body', () => {
  const { container } = render(<Table tableColumns={["Property", "Value"]} data={{ algo_type: 'Ols' }} title="Test Table" />);
  expect(screen.getByText('Ols')).toBeInTheDocument();
  expect(screen.getByText('Algo Type')).toBeInTheDocument();
  let tableData = container.querySelectorAll('td')
  expect(tableData.length).toEqual(2)
});
