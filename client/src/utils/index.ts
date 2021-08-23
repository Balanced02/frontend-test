export const formatSeriesString = (str: string): string => str.split('.').map(str => str.toUpperCase()).join(' ')

export const formatDate = (str: string) => {
  let dateArr = str.split('/')
  return `${dateArr[1]}-${dateArr[0]}-${dateArr[2]}`
}

export const formatFeatData = (data: { [key: string]: number }) => {
  const dataArray = Object.values(data)
  const maxValue = Math.max(...dataArray)
  let result = []
  for (let key in data) {
    if (data[key]) {
      result.push({
        key: key.split('.')[1],
        value: data[key] / maxValue * 100
      })
    }
  }
  return result
}