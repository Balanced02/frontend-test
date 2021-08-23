import './styles.css'

type FeatureImportanceProps = {
  data: { key: string, value: number }[]
}

const FeatureImportance = ({ data }: FeatureImportanceProps) => <div className="feature-importance">
  <h5>Feature Importance</h5>
  <div className="row">
    <div className="col label-container">
      {data.map(dat =>
        <p>{dat.key}</p>
      )}
    </div>
    <div className="col-8 progress-container">
      {data.map(dat =>
        <div className="progress">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${dat.value}%` }}></div>
        </div>
      )}
    </div>
  </div>
</div>

export default FeatureImportance