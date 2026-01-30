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

// Explore landing
router.get('/explore', function (req, res) {
  const sections = [
    { slug: 'economy', title: 'Economy and growth', summary: 'AI adoption and investment driving productivity and scale-ups.' },
    { slug: 'education', title: 'Education and skills', summary: 'Boosting AI skills, training and tools for learners and teachers.' },
    { slug: 'energy', title: 'Energy and environment', summary: 'Efficiency, grid optimisation and net zero opportunities.' },
    { slug: 'crime-justice', title: 'Crime and justice', summary: 'Applying AI to reduce crime and improve justice outcomes.' },
    { slug: 'health', title: 'Health and social care', summary: 'Earlier diagnosis, better outcomes and workforce support.' },
    { slug: 'public-sector', title: 'Public sector transformation', summary: 'Pilots across departments to improve services and value for money.' }
  ]
  res.render('explore/index', { sections })
})

// Explore detail pages
router.get('/explore/:slug', function (req, res) {
  const pages = {
    economy: { title: 'Economy and growth' },
    education: { title: 'Education and skills' },
    energy: { title: 'Energy and environment' },
    'crime-justice': { title: 'Crime and justice' },
    health: { title: 'Health and social care' },
    'public-sector': { title: 'Public sector transformation' }
  }
  const page = pages[req.params.slug]
  if (!page) return res.status(404).render('explore/detail', { title: 'Not found', slug: req.params.slug, notFound: true })
  res.render('explore/detail', { title: page.title, slug: req.params.slug })
})

module.exports = router
