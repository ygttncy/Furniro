import { useState, useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"
import FilterComponent from "../Filter"
import ProductsContainer from "../ProductsContainer"
import "./style.scss"
import showEye from "../../assets/icons/show-eye.svg"
import hideEye from "../../assets/icons/hide-eye.svg"
import GeneralButtons from "../../components/ButtonComponent/GeneralButtons"
import BestSellers from "../BestSellerComponent"
import useSWR from "swr"

const fetcher = async (url) => {
  const response = await fetch(url)
  if (!response.ok) throw new Error("Product not found")
  return response.json()
}

const OurProductsSectionComponent = () => {
  const location = useLocation()
  const isShopPage = location.pathname === "/shop"
  const filterSideRef = useRef(null)
  const imgRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [filterState, setFilterState] = useState({})
  const itemsPerPage = 12

  const { data, error, isLoading } = useSWR(
    `https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures`,
    fetcher
  )

  useEffect(() => {
    if (window.innerWidth < 700 && filterSideRef.current) {
      filterSideRef.current.style.display = "none"
    }
  }, [])

  const toggleSidebar = () => {
    if (filterSideRef.current && imgRef.current) {
      const isHidden = filterSideRef.current.style.display === "none"
      filterSideRef.current.style.display = isHidden ? "flex" : "none"
      imgRef.current.src = isHidden ? hideEye : showEye
    }
  }

  const handleShowMoreClick = () => {
    setShowAllProducts(!showAllProducts)
  }

  const handleFilterStateChange = (room, furnitureItem, isChecked) => {
    setFilterState((prevFilterState) => {
      const newFilterState = { ...prevFilterState }

      setCurrentPage(1)
      if (!newFilterState[room]) {
        newFilterState[room] = new Set()
      }

      if (isChecked) {
        newFilterState[room].add(furnitureItem)
      } else {
        newFilterState[room].delete(furnitureItem)
      }

      return newFilterState
    })
  }

  const applyFilters = (data) => {
    if (Object.values(filterState).every((types) => types.size === 0)) {
      return data
    } else {
      return data.filter((item) => {
        return Object.entries(filterState).some(([room, types]) => {
          return item.room === room && types.size > 0 && types.has(item.type)
        })
      })
    }
  }

  const filteredFurnitureData = applyFilters(data)

  const totalPages =
    filteredFurnitureData &&
    Math.ceil(filteredFurnitureData.length / itemsPerPage)
  const paginatedProducts =
    filteredFurnitureData &&
    filteredFurnitureData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <div className="ourProducts-section-container">
        <div className="hide-sidebar" onClick={toggleSidebar}>
          <img ref={imgRef} src={hideEye} alt="eye toggle" />
        </div>

        <div className="ourProducts__filter-side" ref={filterSideRef}>
          <FilterComponent onFilterStateChange={handleFilterStateChange} />
          <BestSellers />
        </div>

        <ProductsContainer
          products={
            isShopPage
              ? paginatedProducts
              : showAllProducts
              ? filteredFurnitureData
              : filteredFurnitureData.slice(0, 12)
          }
        />
      </div>

      {isShopPage ? (
        <div className="pagination-buttons">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      ) : (
        <GeneralButtons
          btnName={showAllProducts ? "Show Less" : "Show More"}
          textColor="white"
          onClickCallback={handleShowMoreClick}
        />
      )}
    </>
  )
}

export default OurProductsSectionComponent
