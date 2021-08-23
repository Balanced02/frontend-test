import { useEffect, useState } from 'react';
import { callApi } from './utils/api'
import InputSelect from './components/InputSelect';
import { formatDate, formatFeatData, formatSeriesString } from './utils';
import Graph from './components/Graph';
import Table from './components/Table';
import { MatrixType, ObjectType } from './utils/types';
import ConfusionMatrix from './components/ConfusionMatrix';
import FeatureImportance from './components/FeatureImportance';

type SeriesType = {
  label: string
  value: string
}

type GraphResponseType = {
  index: string
  [key: string]: string
}


function App() {

  const [series, setSeries] = useState<SeriesType[]>([])
  const [selectedSeries, setSelectedSeries] = useState<string | undefined>(undefined)
  const [actualSeries, setActualSeries] = useState<number[] | undefined>(undefined)
  const [predictionSeries, setPredictionSeries] = useState<number[] | undefined>(undefined)
  const [date, setDate] = useState<number[] | undefined>(undefined)
  const [modelDetails, setModelDetails] = useState<ObjectType | undefined>(undefined)
  const [scoringMetrics, setScoringMetrics] = useState<ObjectType | undefined>(undefined)
  const [confusionMatrix, setConfusionMatrix] = useState<MatrixType | undefined>(undefined)
  const [featData, setFeatData] = useState<{ key: string, value: number }[] | undefined>(undefined)

  useEffect(() => {
    callApi('series').then(data => {
      let formatedData = data.map((dat: string) => ({
        label: formatSeriesString(dat),
        value: dat
      }))
      setSeries(formatedData)
    }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (selectedSeries) {
      getSeriesData(selectedSeries).then(data => {
        const actual = data[0]
        const predictions = data[1].predictions
        let date: number[] = []
        let actualGraphData: number[] = []
        let predictionGraphData: number[] = []
        actual.forEach((val: GraphResponseType, i: number) => {
          date.push(new Date(formatDate(val.index)).getTime())
          actualGraphData.push(Number(val[selectedSeries]))
          predictionGraphData.push(predictions[i]?.prediction)
        })
        setActualSeries(actualGraphData)
        setPredictionSeries(predictionGraphData)
        setDate(date)
        setModelDetails(data[1]?.modelSummary)
        setScoringMetrics(data[1]?.scoring_metrics)
        setConfusionMatrix(data[1]?.confusionMetric)
        setFeatData(formatFeatData(data[1]?.featureImportance))
      })
    }
  }, [selectedSeries])

  const getSeriesData = (selectedSeries: string) => Promise.all([callApi(`data/${selectedSeries}`), callApi(`results/${selectedSeries}`)])

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark p-2">
        <span className="navbar-brand" >Frontend Challenge</span>
      </nav>
      <div className="container">
        <div className="col-md-3">
          <InputSelect options={series} label="Select Series" onChange={(data) => setSelectedSeries(data.value)} />
        </div>
        <div className="row">
          <div className="col-md-8">
            <Graph
              title="Actual vs Predictions Plot"
              series={[
                {
                  name: 'Actual',
                  data: actualSeries ?? []
                },
                {
                  name: 'Prediction',
                  data: predictionSeries ?? []
                }
              ]}
              colors={[
                "rgba(13, 95, 190, 0.8)",
                "rgb(221, 0, 0)",
              ]}
              date={date ?? []}
            />
          </div>
          <div className="col-md-4">
            {featData && <FeatureImportance data={featData} />}
          </div>
        </div>
        <div className="row">
          {modelDetails &&
            <div className="col-md-4">
              <Table
                tableColumns={[
                  "Property",
                  "Value",
                ]}
                data={modelDetails}
                title="Model Summary"
              />
            </div>
          }
          {scoringMetrics &&
            <div className="col-md-4">
              <Table
                tableColumns={["Metric", "Value"]}
                data={scoringMetrics}
                title="Scoring Metrics"
              />
            </div>
          }
          {confusionMatrix && <div className="col-md-4">
            <ConfusionMatrix data={confusionMatrix} title="Confusion Matrix" />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
