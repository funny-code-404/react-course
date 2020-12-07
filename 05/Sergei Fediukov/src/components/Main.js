import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Civilizations, Units, Structures, Technologies, ItemsInfo, NotFound } from '../pages'
import withInfo from '../hocks/withInfo'
import withDetails from '../hocks/withDetails'


const baseURL = 'https://cors-anywhere.herokuapp.com/'

const Main = () => (

    <Switch>
        <Route
            exact path='/'
            component={Home} />
        <Route
            exact path='/civilizations'
            component={withInfo(Civilizations, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)} />
        <Route
            exact path='/units'
            component={withInfo(Units, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/units`)} />
        <Route
            exact path='/structures'
            component={withInfo(Structures, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/structures`)} />
        <Route
            exact path='/technologies'
            component={withInfo(Technologies, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/technologies`)} />
        <Route
            path='/civilizations/:id'
            component={withDetails(ItemsInfo, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/`)} />
        <Route
            exact path='/units/:id'
            component={withDetails(ItemsInfo, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/unit/`)} />
        <Route
            exact path='/structures/:id'
            component={withDetails(ItemsInfo, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/structure/`)} />
        <Route
            exact path='/technologies/:id'
            component={withDetails(ItemsInfo, `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/technology/`)} />
        <Route
            component={NotFound} />
    </Switch>
)
export default Main