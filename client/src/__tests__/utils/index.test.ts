import { formatSeriesString, formatDate, formatFeatData } from '../../utils'

test('It formats series string data', () => {
  expect(formatSeriesString("example.D1")).toEqual('EXAMPLE D1')
});

test('It corrects date format', () => {
  expect(formatDate('28/10/2021')).toEqual('10-28-2021')
})

test('it format and calculate values for featured importance', () => {
  const result = formatFeatData({ 'example.D1': 5, 'example.D2': 1 })
  expect(result[0]).toEqual({ key: 'D1', value: 100 })
  expect(result[1]).toEqual({ key: 'D2', value: 20 })
})

test('it deletes data with no value from the list', () => {
  const result = formatFeatData({ 'example.D1': 5, 'example.D2': 0 })
  expect(result.length).toEqual(1)
})
