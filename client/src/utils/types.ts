export type ObjectType = { [key: string]: string }

type KeyTypes = | 'truePositive'
  | 'falsePositive'
  | 'falseNegative'
  | 'trueNegative'

export type MatrixType = {
  [key in KeyTypes]: number
}