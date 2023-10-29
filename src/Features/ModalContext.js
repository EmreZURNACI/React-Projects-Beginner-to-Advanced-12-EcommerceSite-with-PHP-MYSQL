import { createContext, useContext, useState } from "react";
const Modal = createContext();
const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const datas = {
        showModal, setShowModal
    }
    return (
        <Modal.Provider value={datas}>
            {children}
        </Modal.Provider>
    )
}
export const UseModalContext = () => useContext(Modal)
export default ModalProvider