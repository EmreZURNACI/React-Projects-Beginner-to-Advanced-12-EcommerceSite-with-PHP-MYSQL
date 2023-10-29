import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../Features/BasketSlice'
import { useNavigate } from 'react-router-dom';
import { UseModalContext } from '../Features/ModalContext'
import { setCardName, setCardNo, setCardCvv, setCardDate } from '../Features/UserSlice'
function OdemeSekli() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setShowModal } = UseModalContext();
    const [odemeSekli, setOdemeSekli] = useState("kartlaOdeme");
    let siparisler = useSelector((state) => state.BasketReducer.basket)
    let city = useSelector((state) => state.UserReducer.city)
    let state = useSelector((state) => state.UserReducer.state)
    let zip = useSelector((state) => state.UserReducer.zipcode)
    let adres = useSelector((state) => state.UserReducer.address)
    let cardName = useSelector((state) => state.UserReducer.cardName)
    let cardNo = useSelector((state) => state.UserReducer.cardNumber)
    let cardCvv = useSelector((state) => state.UserReducer.cardCVV)
    let cardDate = useSelector((state) => state.UserReducer.cardDate)
    let email = useSelector((state) => state.UserReducer.email)


    const odemeyiTamamla = () => {
        const formData = new FormData();
        const sepet = [];
        if (sessionStorage.getItem("mail") === email) {
            formData.append(`email`, sessionStorage.getItem("mail"))
        }
        else if (sessionStorage.getItem("mail") !== null) {
            formData.append(`email`, sessionStorage.getItem("mail"))
        }
        else {
            formData.append(`email`, email)
        }
        siparisler.forEach(element => {
            sepet.push(element.id)
        });
        formData.append(`siparişler`, sepet.join(","))
        formData.append(`city`, city)
        formData.append(`state`, state)
        formData.append(`zip`, zip)
        formData.append(`fullAdresse`, adres)
        formData.append(`cardName`, cardName)
        formData.append(`cardNo`, cardNo)
        formData.append(`cardCvv`, cardCvv)
        formData.append(`cardDate`, cardDate)
        axios.post("http://localhost/EcommerceSite_Backend/OdemeyiTamamla.php", formData)
            .then((res) => {
                toast.success(res.data, {
                    duration: 7500
                }); dispatch(clearBasket()); setShowModal(false); navigate("/")
            })
            .catch((err) => toast.error(err))
    }
    return (
        <div>
            <div className='flex flex-col'>
                <span className='block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2'>Ödeme Seçenekleri</span>
                <div className='flex items-start justify-center gap-2 ps-2 mb-4'>
                    <div className='flex items-center justify-between w-1/4'>
                        <label htmlFor="kartlaOdeme" className='font-semibold'>Kartla Ödeme</label>
                        <input type="radio" name='odemeSecenegi' id='kartlaOdeme' defaultChecked value={odemeSekli}
                            onClick={() => setOdemeSekli("kartlaOdeme")} />
                    </div>
                    <div className='flex items-center justify-between w-1/4'>
                        <label htmlFor="kapidaOdeme" className='font-semibold'>Kapıda Ödeme</label>
                        <input type="radio" name='odemeSecenegi' id='kapidaOdeme' value={odemeSekli}
                            onClick={() => setOdemeSekli("kapidaOdeme")} />
                    </div>
                </div>
            </div>
            {
                odemeSekli === "kartlaOdeme" &&
                <div>
                    <div className="w-full px-3 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="card-name-lastname">
                            Kart Sahibinin Adı ve Soyadı
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="card-name-lastname" type="text" value={cardName} onChange={(e) => dispatch(setCardName(e.target.value))} />
                    </div>
                    <div className="w-full px-3 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="card-numarasi">
                            Kart Numarası
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="card-numarasi" type="number" maxLength={16} minLength={16} value={cardNo} onChange={(e) => dispatch(setCardNo(e.target.value))} />
                    </div>
                    <div className='flex justify-between items-end'>
                        <div className="px-3 mb-4 md:mb-0 w-1/3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="card-cvv">
                                CVV
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="card-cvv" type='number' maxLength={3} minLength={3} value={cardCvv} onChange={(e) => dispatch(setCardCvv(e.target.value))} />
                        </div>
                        <div className="px-3 mb-4 md:mb-0 w-1/3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="card-last-usage-date">
                                Son Kullanma Tarıhı
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="card-last-usage-date" type="date" value={cardDate} onChange={(e) => dispatch(setCardDate(e.target.value))} />
                        </div>
                        <div>
                            <button
                                className=" bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4  mb-1 ease-linear transition-all duration-150"
                                onClick={() => odemeyiTamamla()}
                                disabled={
                                    !(cardName !== "" && cardNo !== "" && cardCvv !== "" && cardDate !== "")
                                }
                                type="button">
                                Satın Al
                            </button>
                        </div>
                    </div>
                </div>
            }
            {
                odemeSekli === "kapidaOdeme" &&
                <div className='w-full flex justify-end'>
                    <button onClick={() => odemeyiTamamla()}
                        className=" bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4  mb-1 ease-linear transition-all duration-150"
                        type="button">
                        Satın Al
                    </button>
                </div>
            }
        </div>
    )
}

export default OdemeSekli