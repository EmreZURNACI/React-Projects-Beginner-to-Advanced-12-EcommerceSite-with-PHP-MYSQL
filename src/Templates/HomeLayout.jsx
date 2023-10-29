import React from 'react'
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from 'react-router-dom';
import { UseModalContext } from "../Features/ModalContext";
import Modal from './Modal'
function HomeLayout() {
  const { showModal } = UseModalContext();

  return (
    <>
      <Toaster position="top right" />
      <Navbar />
      <div className={showModal === true ? "block" : "hidden"}>
        <Modal />
      </div>
      <div className='mt-20'>
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout