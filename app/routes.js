//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Home
router.get('/', function (req, res) {
  res.render('index')
})

// Dashboard with example data for charts and KPIs
router.get('/dashboard', function (req, res) {
  // Example datasets – replace with real numbers when available
  const kpis = [
    { label: 'Projects funded', value: 212 },
    { label: 'Total funding', value: '£1.6bn' },
    { label: 'Public sector pilots', value: 34 },
    { label: 'SMEs engaged', value: '3,200+' }
  ]

  const lineSeries = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    values: [120, 180, 200, 260, 300, 420, 480, 550],
    title: 'Funding committed by month ( £m )'
  }

  const barSeries = {
    labels: ['Health', 'Education', 'Transport', 'Justice', 'Local Gov', 'Defence'],
    values: [42, 35, 27, 18, 31, 22],
    title: 'Public sector AI pilots by domain'
  }

  const donutSeries = {
    labels: ['In delivery', 'Complete', 'Planned'],
    values: [58, 29, 13],
    title: 'Programme status split (%)'
  }

  res.render('dashboard', { kpis, lineSeries, barSeries, donutSeries })
})

module.exports = router
