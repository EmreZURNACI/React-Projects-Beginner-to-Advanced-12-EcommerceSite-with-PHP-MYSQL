import React from 'react'
import SiteLogo from '../images/site-logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getKeyword } from '../Features/KeywordSlice'
import { getFilteredProducts } from '../Features/ProductSlice'
import { BsFillBasket3Fill, BsPeopleFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { UseLogContext } from '../Features/LogContext'
function Navbar() {
    const { setIsLog } = UseLogContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const keyword = useSelector((state) => state.KeywordReducer.keyword)
    const products = useSelector((state) => state.ProductReducer.products)
    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = products.filter(product =>
            String(product.name).includes(keyword) === true ||
            String(product.name).includes(String(keyword).toLowerCase()) === true ||
            String(product.name).includes(String(keyword).toUpperCase()) ||
            String(product.name).includes(String(keyword).split("")[0].toUpperCase() + String(keyword).substring(1).toLowerCase()));
        dispatch(getFilteredProducts(filtered));
    }
    const logout = () => {
        sessionStorage.clear();
        setIsLog(false)
    }
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src={SiteLogo} className="h-10 mr-3 rounded-full" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Emrecommerce</span>
                </a>
                <div className="flex md:order-1 items-center w-1/2">
                    <form className='w-4/5 mx-auto' onSubmit={(e) => handleSubmit(e)}>
                        <input
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="keyword"
                            name="keyword"
                            onChange={(e) => dispatch(getKeyword(e.target.value))}
                            value={keyword}
                        />
                        <button type="submit" className='hidden' >
                            Submit
                        </button>
                    </form>

                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button onClick={() => navigate("/")} className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-2">
                                <BsFillHouseDoorFill className='text-xl'></BsFillHouseDoorFill> <span>Home</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => navigate("sepet")} className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-2">
                                <BsFillBasket3Fill className='text-xl'></BsFillBasket3Fill> <span>Basket</span>
                            </button>
                        </li>
                        {
                            sessionStorage.getItem("token") !== null
                                ?
                                <li onClick={() => logout()}>
                                    <button className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-2">
                                        <FiLogOut className="text-xl"></FiLogOut> <span>Logout </span>
                                    </button>
                                </li>
                                :
                                <li onClick={() => navigate("auth")}>
                                    <button className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-2">
                                        <BsPeopleFill className="text-xl"></BsPeopleFill> <span>Authentication </span>
                                    </button>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar