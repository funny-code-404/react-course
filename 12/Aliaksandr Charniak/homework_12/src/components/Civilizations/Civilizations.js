import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { ACTION_GET_CIVILIZATIONS_REQUESTED } from '../../redux/civilizations/actions'

export const Civilizations = (props) => {
  const { data } = props.data
  const { state } = props.location
  const arr = data
    ? data.civilizations
      ? data.civilizations
      : Array.isArray(data)
      ? data
      : [data]
    : []
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTION_GET_CIVILIZATIONS_REQUESTED(state?.unitUrl))
  }, [dispatch, state?.unitUrl])
  return (
    <div>
      {arr &&
        arr.map((item) => (
          <ul key={item.id}>
            <li>Id: {item.id}</li>
            <li>Name: {item.name}</li>
            <li>Expansion: {item.expansion}</li>
            <li>Army type: {item.army_type}</li>
            <li>
              Unique unit:{' '}
              {item.unique_unit.map((it, i) => {
                const unitName = it.substring(it.lastIndexOf('/') + 1)
                return (
                  <ul key={i}>
                    <Link
                      to={{
                        pathname: `/civilizations/${item.id}/unique_unit/${unitName}`,
                        state: {
                          unitUrl: it,
                        },
                      }}
                    >
                      {unitName}
                    </Link>
                  </ul>
                )
              })}
            </li>
            <li>
              Unique tech:{' '}
              {item.unique_tech.map((it, i) => {
                const techName = it.substring(it.lastIndexOf('/') + 1)
                return (
                  <ul key={i}>
                    <Link
                      to={{
                        pathname: `/civilizations/${item.id}/unique_tech/${techName}`,
                        state: {
                          techUrl: it,
                        },
                      }}
                    >
                      {techName}
                    </Link>
                  </ul>
                )
              })}
            </li>
            <li>Team bonus: {item.team_bonus}</li>
            <li>
              Civilization bonus:{' '}
              {item.civilization_bonus.map((it, i) => (
                <ul key={i}>
                  <li>{it}</li>
                </ul>
              ))}
            </li>
          </ul>
        ))}
    </div>
  )
}

export default Civilizations
