import React, { useState, useRef, useMemo } from 'react'
import Dropdown from './Dropdown'
import Lists from '../utils/Lists'
import Button from './Button'

const RoadmapFilter = (setPage) => {
  const [currentStateSelected, selectState] = useState('All')
  const [status, setStatus] = useState('All')
  const statusDropdownContainer = useRef()

  const statusOptions = useMemo(() => {
    const optionsArray = []
    for (let i = 0; i < Lists.stateList.length; i++) {
      optionsArray.push(Lists.stateList[i].status)
    }
    return optionsArray
  }, [])

  return (
    <>
      <div className='roadmap-container'>
        <div className='roadmap'>
          {Lists.stateList &&
            Lists.stateList.map((state, key) => {
              return (
                <Button
                  className={
                    currentStateSelected === state.status
                      ? 'btn btn-tabs btn-tabs-selected'
                      : 'btn btn-tabs'
                  }
                  key={key}
                  onClick={() => {
                    selectState(state.status)
                    setPage(1)
                  }}
                >
                  {state.icon}
                  {state.status}
                </Button>
              )
            })}
        </div>
      </div>

      <div className='roadmap-dropdown'>
        <Dropdown
          title='Status'
          reference={statusDropdownContainer}
          curr={status}
          setCurr={setStatus}
          itemList={statusOptions}
          data-cy='status-dropdown'
          selectstate={selectState}
          setpage={setPage}
        />
      </div>
    </>
  )
}

export default RoadmapFilter
