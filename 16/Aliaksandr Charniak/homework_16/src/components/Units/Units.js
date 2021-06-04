import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCorrectedArray } from '../../utils/utils'
import { ACTION_GET_UNITS_REQUESTED } from '../../redux/units/actions'

export const Units = (props) => {
  const { data } = props.data
  const { state } = props.location
  //const arr = data ? (data.units ? data.units : Array.isArray(data) ? data : [data]) : []
  const arr = getCorrectedArray(data, 'units')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTION_GET_UNITS_REQUESTED(state?.unitUrl))
  }, [dispatch, state?.unitUrl])
  return (
    <div>
      {arr &&
        arr?.map((item) => (
          <ul key={item.id}>
            <li>Id: {item.id}</li>
            <li>Name: {item.name}</li>
            <li>Description: {item.description}</li>
            <li>Expansion: {item.expansion}</li>
            <li>Age: {item.age}</li>
            <li>
              Created in:
              <Link
                to={{
                  pathname: `/units/${item.id}/created_in/${item.created_in.substring(
                    item.created_in.lastIndexOf('/') + 1
                  )}`,
                  state: {
                    structUrl: item.created_in,
                  },
                }}
              >
                {item.created_in.substring(item.created_in.lastIndexOf('/') + 1)}
              </Link>
            </li>
            <li>
              Cost:
              {Object.keys(item.cost).map((key, i) => {
                if (typeof item.cost[key] === 'object') {
                  return (
                    <ul key={i}>
                      {Object.keys(item.cost[key]).map((k, i) => (
                        <li key={i}>
                          {k}: {item.cost[key][k]}
                        </li>
                      ))}
                    </ul>
                  )
                } else {
                  return (
                    <ul key={i}>
                      <li>
                        {key}: {item.cost[key]}
                      </li>
                    </ul>
                  )
                }
              })}
            </li>
            <li>Build time: {item.build_time}</li>
            <li>Reload time: {item.reload_time}</li>
            <li>Attack Delay: {item.attack_delay}</li>
            <li>Movement Rate: {item.movement_rate}</li>
            <li>Line Of Sight: {item.line_of_sight}</li>
            <li>Hit points: {item.hit_points}</li>
            <li>Range: {item.range}</li>
            <li>Attack: {item.attack}</li>
            <li>Armor: {item.armor}</li>
            <li>Accuracy: {item.accuracy}</li>
            {item.attack_bonus && (
              <li>
                Attack Bonus:
                {item.attack_bonus.map((it, i) => (
                  <ul key={i}>
                    <li>{it}</li>
                  </ul>
                ))}
              </li>
            )}
            <li>Search Radius: {item.search_radius}</li>
            <li>Blast Radius: {item.blast_radius}</li>
            <li>Armor Bonus: {item.armor_bonus}</li>
          </ul>
        ))}
    </div>
  )
}

export default Units
