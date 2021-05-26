import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ACTION_GET_STRUCTURES_REQUESTED } from '../../redux/structures/actions'

export const Structures = (props) => {
  const { data } = props.data
  const { state } = props.location
  const arr = data ? (data.structures ? data.structures : Array.isArray(data) ? data : [data]) : []
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTION_GET_STRUCTURES_REQUESTED(state?.structUrl))
  }, [dispatch, state?.structUrl])
  return (
    <div>
      {arr &&
        arr.map((item) => (
          <ul key={item.id}>
            <li>Id: {item.id}</li>
            <li>Name: {item.name}</li>
            <li>Expansion: {item.expansion}</li>
            <li>Age: {item.age}</li>
            {item.cost && (
              <li>
                Cost:{' '}
                {Object.keys(item.cost).map((key, i) => {
                  return (
                    <ul key={i}>
                      <li>
                        {key}: {item.cost[key]}
                      </li>
                    </ul>
                  )
                })}
              </li>
            )}
            <li>Build time: {item.build_time}</li>
            <li>Hit Points: {item.hit_points}</li>
            <li>Line of Sight: {item.line_of_sight}</li>
            <li>Armor: {item.armor}</li>
            {item.special && (
              <li>
                Special:{' '}
                {item.special.map((it, i) => (
                  <ul key={i}>
                    <li>{it}</li>
                  </ul>
                ))}
              </li>
            )}
            <li>Reload time: {item.reload_time}</li>
            <li>Range: {item.range}</li>
            <li>Attack: {item.attack}</li>
          </ul>
        ))}
    </div>
  )
}

export default Structures
