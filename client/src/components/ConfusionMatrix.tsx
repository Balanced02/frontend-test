import { MatrixType } from "../utils/types"

type ConfusionMatrixProp = {
  data: MatrixType
  title: string
}

const ConfusionMatrix = ({ data, title }: ConfusionMatrixProp) => <div>
  <h5>{title}</h5>
  <div className="row">
    <div className="col">
      <p className="mt-5 pt-5" >Predicted Values</p>
    </div>
    <div className="col">
      <p className="text-center">Actual Values</p>
      <table className="table table-striped table-hover table-bordered" >
        <thead>
          <tr>
            <th></th>
            <th>Positive</th>
            <th>Negative</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Positive</th>
            <td>{data.truePositive}</td>
            <td>{data.falsePositive}</td>
          </tr>
          <tr>
            <th>Negative</th>
            <td>{data.falseNegative}</td>
            <td>{data.trueNegative}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

export default ConfusionMatrix