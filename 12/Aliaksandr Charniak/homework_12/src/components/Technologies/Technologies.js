import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCorrectedArray } from '../../utils/utils'
import { ACTION_GET_TECHNOLOGIES_REQUESTED } from '../../redux/technologies/actions'

export const Technologies = (props) => {
  const { data } = props.data
  const { state } = props.location
  const arr = getCorrectedArray(data, 'technologies')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTION_GET_TECHNOLOGIES_REQUESTED(state?.techUrl))
  }, [dispatch, state?.techUrl])
  return (
    <div>
      {arr &&
        arr.map((item) => (
          <ul key={item.id}>
            <li>Id: {item.id}</li>
            <li>Name: {item.name}</li>
            <li>Description: {item.description}</li>
            <li>Expansion: {item.expansion}</li>
            <li>Age: {item.age}</li>
            <li>
              Develops In:
              <Link
                to={{
                  pathname: `/technologies/${item.id}/develops_in/${item.develops_in.substring(
                    item.develops_in.lastIndexOf('/') + 1
                  )}`,
                  state: {
                    structUrl: item.develops_in,
                  },
                }}
              >
                {item.develops_in.substring(item.develops_in.lastIndexOf('/') + 1)}
              </Link>
            </li>
            <li>
              Cost:
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
            <li>Build time: {item.build_time}</li>
            {item.applies_to && (
              <li>
                Applies To:
                {item.applies_to.map((it, i) => {
                  const unitName = it.substring(it.lastIndexOf('/') + 1)
                  return (
                    <ul key={i}>
                      <Link
                        to={{
                          pathname: `/technologies/${item.id}/applies_to/${
                            it.includes('civilization') ? 'civilization' : 'unit'
                          }/${unitName}`,
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
            )}
          </ul>
        ))}
    </div>
  )
}

export default Technologies
