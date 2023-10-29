import React from 'react'
import { UseModalContext } from "../Features/ModalContext";
import AdresBilgileri from './AdresBilgileri';
import OdemeSekli from './OdemeSekli';
import { ImCross } from 'react-icons/im';
function Modal() {
    const { showModal, setShowModal } = UseModalContext();
    return (
        <>
            {showModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-4 mx-auto">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4">
                                <div className='absolute top-0 right-0 p-3'>
                                    <button onClick={() => setShowModal(false)}>
                                        <ImCross className='text-red-500'></ImCross>
                                    </button>
                                </div>
                                <form className="w-full max-w-lg">
                                    <AdresBilgileri />
                                    <OdemeSekli />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
}

export default Modal