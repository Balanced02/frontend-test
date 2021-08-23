import convertLanguage from '../../utils/language'

test('It converts api response string to readable string', () => {
  expect(convertLanguage("algo_type")).toEqual('Algo Type')
});

test('It returns original value when conversion is not found', () => {
  expect(convertLanguage("no_conversion_found")).toEqual('no_conversion_found')

})