import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import StationsIndexContainer from "./StationsIndexContainer"
import StationFormContainer from "./StationFormContainer"
import StationShowContainer from "./StationShowContainer"
import StationInfoTile from "./StationInfoTile"
import StationTile from "./StationTile"
import MapContainer from "./MapContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StationsIndexContainer}/>
        <Route exact path="/stations" component={StationInfoTile}/>
        <Route exact path ="/stations/:id" component={StationShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App