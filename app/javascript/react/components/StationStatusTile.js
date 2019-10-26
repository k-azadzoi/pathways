import React, { useState, useEffect } from "react"

const StationStatusTile = props => {
  const [stationsStatus, setStationsStatus] = useState({})

  useEffect(() => {
  fetch(`https://gbfs.bluebikes.com/gbfs/en/station_status.json`)
  .then((response) => {
    if(response.ok) {
      return response
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
    }
  })
  .then(response => response.json())
  .then(fetchedData => {
    setStationsStatus(fetchedData)
  })
}, [])

let stationAvailability;

if (stationsStatus.data !== undefined) {
  stationAvailability =  stationsStatus.data.stations.map((station) => {
    const lastUpdated = new Date(station.last_reported * 1000).toDateString()
    console.log(lastUpdated)
      return(
        <div className="station-box" key={station.station_id}>
          <h5> Id: {station.station_id} / Number of Bikes Available: {station.num_bikes_available} / Number of Docks Available: {station.num_docks_available} --
          {lastUpdated}</h5>
        </div>
      )
    })
} else {
  <h1> no </h1>
}

  return (
    <div> { stationAvailability }</div>
  )
}

export default StationStatusTile
