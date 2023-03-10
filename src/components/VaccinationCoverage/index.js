import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
  XAxis,
  YAxis,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationList} = props
  const {dose1, dose2, vaccineDate} = vaccinationList

  const yComponents = [1500, 3000, 4500, 6000]

  const DataFormatter = number => {
    if (number > 1000) {
      return `${number.toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="graph-card">
      <h1>Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={vaccinationList} margin={{top: 5}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 20,
            }}
          />

          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="10%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="10%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationCoverage
