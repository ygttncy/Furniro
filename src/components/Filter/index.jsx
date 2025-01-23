import { useState, useEffect } from "react"
import "./styles.scss"
import PropTypes from "prop-types"

const FilterComponent = ({ onFilterStateChange }) => {
  const [selectedFurnitureCount, setSelectedFurnitureCount] = useState({})
  const [openRooms, setOpenRooms] = useState({})
  const [furnitureData, setFurnitureData] = useState([])

  useEffect(() => {
    fetch(
      "https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures"
    )
      .then((response) => response.json())
      .then((data) => setFurnitureData(data))
  }, [])

  const toggleRoom = (room) => {
    setOpenRooms((prevState) => {
      const newOpenRooms = { ...prevState }
      newOpenRooms[room] = !prevState[room]
      if (!newOpenRooms[room]) {
        setSelectedFurnitureCount((prevState) => ({
          ...prevState,
          [room]: 0,
        }))
      }
      return newOpenRooms
    })
  }

  const handleCheckboxChange = (room, furnitureItem, isChecked) => {
    // Update the selected furniture count
    setSelectedFurnitureCount((prevState) => {
      const newCount = { ...prevState }
      if (!newCount[room]) {
        newCount[room] = 0
      }

      if (isChecked) {
        newCount[room]++
      } else {
        newCount[room]--
      }
      return newCount
    })

    // Call the parent's filter state change handler
    onFilterStateChange(room, furnitureItem, isChecked)
  }

  const groupedFurniture = furnitureData.reduce((acc, item) => {
    if (!acc[item.room]) {
      acc[item.room] = []
    }
    acc[item.room].push(item)
    return acc
  }, {})

  return (
    <div className="filter-component">
      {Object.keys(groupedFurniture).map((room, roomIndex) => (
        <div key={roomIndex} className="filter-component-section">
          <div className="filter-component-section-room">
            <div className="filter-component-section-room-title">
              <p>
                {room}{" "}
                {selectedFurnitureCount[room] > 0 && (
                  <span>{selectedFurnitureCount[room]}</span>
                )}
              </p>
            </div>
            <span onClick={() => toggleRoom(room)}>
              {openRooms[room] ? "-" : "+"}
            </span>
          </div>

          {openRooms[room] && (
            <div className="filter-component-section-room-sub-title">
              {groupedFurniture[room]
                .filter(
                  (furnitureItem, index, self) =>
                    index ===
                    self.findIndex((item) => item.type === furnitureItem.type)
                )
                .map((furnitureItem, furnitureIndex) => (
                  <div
                    key={furnitureIndex}
                    className="filter-component-section-room-checkbox"
                  >
                    <label className="filter-component-section-container">
                      <p>{furnitureItem.type}</p>
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          handleCheckboxChange(
                            room,
                            furnitureItem.type,
                            e.target.checked
                          )
                        }
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                ))}
            </div>
          )}

          {roomIndex !== Object.keys(groupedFurniture).length - 1 && <hr />}
        </div>
      ))}
    </div>
  )
}
FilterComponent.propTypes = {
  onFilterStateChange: PropTypes.func,
}

export default FilterComponent
