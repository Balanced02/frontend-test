import { render, screen } from '@testing-library/react';
import FeatureImportance from '../components/FeatureImportance';

test('renders feature importance title', () => {
  render(<FeatureImportance data={[]} />);
  expect(screen.getByText('Feature Importance')).toBeInTheDocument();
});

test('renders progress bar correctly', () => {
  const { container } = render(<FeatureImportance data={[{ key: "D1", value: 100 }]} />);
  const progressBars = container.getElementsByClassName('progress-bar progress-bar-striped')
  expect(progressBars[0]).toHaveStyle(`width: 100%`)
})