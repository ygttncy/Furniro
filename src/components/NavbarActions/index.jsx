import "./style.scss"
import { useState } from "react"
import Modal from "react-modal"
import UserImg from "../../assets/icons/user-icon.svg"
import SearchImg from "../../assets/icons/search-icon.svg"
import HeartImg from "../../assets/icons/heart-icon.svg"
import CartImg from "../../assets/icons/cart-icon.svg"
import CloseImg from "../../assets/icons/close-icon.svg"
import { NavLink } from "react-router-dom"
import Dropdown from "../Dropdown"
import { Drawer } from "./Drawer"

const customStyles = {
  overlay: {
    background: "#3A3A3A33",
  },
  content: {
    top: "0",
    left: "auto",
    right: "0",
    bottom: "auto",
    width: "clamp(250px, 50vw, 422px)",
    height: "auto",
    minHeight: "300px",
    padding: "0",
    border: "none",
    borderRadius: "0",
    background: "#FFFFFF",
  },
}

Modal.setAppElement("#root")

const NavbarActions = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState(null)
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openModal = (content) => {
    setSelectedContent(content)
    setModalIsOpen(true)
    setDrawerIsOpen(false)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedContent(null)
  }

  const searchBarHandler = () => {
    setSearchBarIsOpen(!searchBarIsOpen)
    setDrawerIsOpen(false)
  }

  const openDrawer = () => {
    setSearchBarIsOpen(false)

    setDrawerIsOpen(!drawerIsOpen)
  }

  return (
    <div className="navbar-actions">
      {drawerIsOpen && <Drawer />}
      <NavLink className="actions-btns" to="/profile">
        <img src={UserImg} alt="user" onClick={() => openDrawer("profile")} />
      </NavLink>
      {!searchBarIsOpen ? (
        <img
          className="actions-btns"
          src={SearchImg}
          alt=""
          onClick={() => searchBarHandler()}
        />
      ) : (
        <div className="search-container">
          <img
            className="actions-btns"
            src={CloseImg}
            alt=""
            onClick={() => searchBarHandler()}
          />

          <div className="search-bar">
            <div className="search-content-box">
              <div className="search-input-and-img-box">
                <input
                  className="search-input"
                  type="search"
                  placeholder="What are you looking for?"
                />
                <div className="search-img-box">
                  <img src={SearchImg} alt="search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <img
        className="actions-btns"
        src={HeartImg}
        alt=""
        onClick={() => openModal("Wishlist")}
      />
      <img
        className="actions-btns"
        src={CartImg}
        alt=""
        onClick={() => openModal("Cart")}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedContent && (
          <Dropdown type={selectedContent} closeModal={closeModal} />
        )}
      </Modal>
    </div>
  )
}

export default NavbarActions
