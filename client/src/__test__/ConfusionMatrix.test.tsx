import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfusionMatrix from '../components/ConfusionMatrix';

test('renders the title', () => {
  render(<ConfusionMatrix data={{ falseNegative: 1, falsePositive: 6, trueNegative: 19, truePositive: 99 }} title="Confusion Matrix" />);
  expect(screen.getByText('Confusion Matrix')).toBeInTheDocument();
});

test('renders the data correctly and in the right cell', () => {
  const { container } = render(<ConfusionMatrix data={{ falseNegative: 1, falsePositive: 6, trueNegative: 19, truePositive: 99 }} title="Confusion Matrix" />);
  const tableData = container.querySelectorAll('td')
  expect(tableData[0].innerHTML).toEqual('99')
  expect(tableData[1].innerHTML).toEqual('6')
  expect(tableData[2].innerHTML).toEqual('1')
  expect(tableData[3].innerHTML).toEqual('19')
});

