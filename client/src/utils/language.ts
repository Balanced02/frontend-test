const language: { [key: string]: string } = {
  algo_type: 'Algo Type',
  n_retrain: "No. Retrain",
  n_training_gap: "No. Training gap",
  n_training_warmup: "No. Training Warmup",
  n_window_size: "Window Size",
  scaling: "Scaling",
  training_mode: "Training Mode",
  weight_decay: "Decay Weight",
  no_scaling: "No scaling",
  'linear.OLS': "Linear OLS",
  meanAbsError: 'Mean Absolute Error',
  medianAbsError: 'Median Absolute Error',
  pearsonR: 'Pearson Correlation Coefficient',
  percentageAbsError: 'Percentage Absolute Error',
  signMatch: 'Sign Match',
  spearmanRho: 'Spearman Rho',

}

const convertLanguage = (str: string) => language[str] ?? str

export default convertLanguage