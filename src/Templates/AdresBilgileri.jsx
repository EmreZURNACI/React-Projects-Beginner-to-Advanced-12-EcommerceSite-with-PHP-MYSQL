import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setName, setLastName, setCity, setState, setZipCode, setAdresse, setEmail } from '../Features/UserSlice'
function AdresBilgileri() {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.UserReducer.name)
    const lastname = useSelector((state) => state.UserReducer.lastname)
    const city = useSelector((state) => state.UserReducer.city)
    const zipcode = useSelector((state) => state.UserReducer.zipcode)
    const state = useSelector((state) => state.UserReducer.state)
    const address = useSelector((state) => state.UserReducer.address)
    const email = useSelector((state) => state.UserReducer.email)

    return (
        <div>
            <span className='block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2'>Adres Bilgileri</span>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="grid-first-name" type="text" placeholder="Jane" value={name} onChange={(e) => dispatch(setName(e.target.value))} />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="grid-last-name" type="text" placeholder="Doe" value={lastname} onChange={(e) => dispatch(setLastName(e.target.value))} />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="grid-email" type="email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} placeholder="Janedoe@test.com" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2   ">
                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        City
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="grid-city" type="text" placeholder="Manhattan" value={city} onChange={(e) => dispatch(setCity(e.target.value))} />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        State
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="grid-state" type="text" placeholder="Broad Street" value={state} onChange={(e) => dispatch(setState(e.target.value))} />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Zip
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500" id="grid-zip" type="text" placeholder="90210" value={zipcode} onChange={(e) => dispatch(setZipCode(e.target.value))} />
                </div>
                <div className='w-full p-4'>
                    <textarea name="adresse" id="adresse" className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight outline-none  border-gray-500' rows="10" defaultValue={address}
                        onChange={(e) => setAdresse(e.target.value)}>
                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default AdresBilgileri