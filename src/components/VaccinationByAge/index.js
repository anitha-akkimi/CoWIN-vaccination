import {ResponsiveContainer, Legend, PieChart, Pie, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeList} = props
  return (
    <div className="age-graph-card">
      <h2>Vaccination by age</h2>
      <ResponsiveContainer width="80%" height={400}>
        <PieChart>
          <Pie
            cx="70%"
            cy="50%"
            data={vaccinationByAgeList}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="100%"
            dataKey="count"
          >
            <Cell name="18-40" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill=" #64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
