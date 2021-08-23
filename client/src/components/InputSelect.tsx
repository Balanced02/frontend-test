import Select, { OptionsType, OptionTypeBase } from 'react-select'

 type InputProps = {
   options: OptionsType<OptionTypeBase>
   label: string
   onChange: (data: any) => void
}

const InputSelect = ({ options, label, onChange }: InputProps) => (
  <div>
    <label htmlFor="input">{label}</label>
    <Select options={options} onChange={onChange} />
  </div>
)

export default InputSelect