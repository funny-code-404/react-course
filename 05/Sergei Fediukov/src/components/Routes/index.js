import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Civilizations, Units, Structures, Technologies, ItemsInfo, NotFound } from '../../pages'
import withFirstNav from '../../hocks/withFirstNav'
import withSecondNav from '../../hocks/withSecondNav'



const baseURL = 'https://cors-anywhere.herokuapp.com/'

const Routes = () => (

    <Switch>
        <Route
            exact path='/'
            component={Home} />
        <Route
            exact path='/civilizations'
            component={Civilizations} />
        <Route
            exact path='/units'
            component={Units} />
        <Route
            exact path='/structures'
            component={Structures} />
        <Route
            exact path='/technologies'
            component={Technologies} />
        <Route
            path='/civilizations/:id'
            component={withSecondNav(ItemsInfo, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/`)} />
        <Route
            exact path='/units/:id'
            component={withSecondNav(ItemsInfo, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/unit/`)} />
        <Route
            exact path='/structures/:id'
            component={withSecondNav(ItemsInfo, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/structure/`)} />
        <Route
            exact path='/technologies/:id'
            component={withSecondNav(ItemsInfo, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/technology/`)} />
        <Route
            component={NotFound} />
    </Switch>
)
export default Routes