import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

class CowinDashboard extends Component {
  state = {
    vaccinationCoverageData: [],
    vaccinationByAgeData: [],
    vaccinationByGenderData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl)
    const data = await response.json()
    console.log(data)
    const vaccinationCoverage = data.last_7_days_vaccination.map(item => ({
      dose1: item.dose_1,
      dose2: item.dose_2,
      vaccineDate: item.vaccine_date,
    }))

    const vaccinationByAge = data.vaccination_by_age
    const vaccinationByGender = data.vaccination_by_gender

    this.setState({
      vaccinationCoverageData: vaccinationCoverage,
      vaccinationByAgeData: vaccinationByAge,
      vaccinationByGenderData: vaccinationByGender,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderGraphs = () => {
    const {
      vaccinationByAgeData,
      vaccinationByGenderData,
      vaccinationCoverageData,
    } = this.state
    return (
      <>
        <VaccinationByCoverage vaccinationList={vaccinationCoverageData} />
        <VaccinationByGender
          vaccinationByGenderList={vaccinationByGenderData}
        />
        <VaccinationByAge vaccinationByAgeList={vaccinationByAgeData} />
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="main-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="img-style"
          />
          <h1 className="main-heading">Co-WIN</h1>
        </div>
        <div className="graphs-container">
          <h1 className="header-text">CoWIN Vaccination in India</h1>
          {isLoading ? this.renderLoader() : this.renderGraphs()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
