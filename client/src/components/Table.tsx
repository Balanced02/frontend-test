import React, { ReactNode } from "react"
import convertLanguage from "../utils/language"

type DataProps = { [key: string]: string }

type TableProps = {
  tableColumns: string[]
  data: DataProps
  title: string
}

const Table = ({ tableColumns, data, title }: TableProps) => {
  const populateTableData = (data: DataProps): ReactNode => {
    let tableBody = []
    for (let key in data) {
      let res = <tr>
        <td>{convertLanguage(key)}</td>
        <td>{convertLanguage(data[key])}</td>
      </tr>
      tableBody.push(res)
    }
    return tableBody
  }

  return <div>
    <h5>{title}</h5>
    <table className="table table-striped">
      <thead >
        <tr>
          {tableColumns.map(title =>
            <th scope="col">{title}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {populateTableData(data)}
      </tbody>
    </table>
  </div>
}

export default React.memo(Table)