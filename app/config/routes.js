const React = require('react')
const Main = require('../Main')
const Home = require('../Home')
const Router = require('react-router')

const Route = Router.Route
const IndexRoute = Router.IndexRoute

module.exports = (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component{Profile} />
    <IndexRoute component={Home} />
  </Route>
)