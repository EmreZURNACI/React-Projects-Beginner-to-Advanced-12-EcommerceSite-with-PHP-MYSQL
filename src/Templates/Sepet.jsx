import React from 'react'
import { UseModalContext } from '../Features/ModalContext'
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket, descItem, incItem } from '../Features/BasketSlice'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiFillMinusCircle } from 'react-icons/ai'
function Sepet() {
  const dispatch = useDispatch();
  const { setShowModal } = UseModalContext();
  const basket = useSelector((state) => state.BasketReducer.basket);
  const totalPrice = () => {
    let price = 0;
    if (sessionStorage.getItem("token") !== null) {
      basket.forEach(element => {
        price += parseInt((element.price / 100) * 80) * element.piece
      })
      return price;
    }
    else {
      basket.forEach(element => {
        price += element.price * element.piece
      })
      return Number(price).toFixed(2);
    }

  }
  return (
    <div className='text-dark container mx-auto'>
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              Sepetiniz
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {
            Array.from(basket).length !== 0 &&
            <div className='flex items-center justify-end'>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => dispatch(clearBasket())}
              >
                Sepeti Boşalt
              </button>
            </div>
          }
          <div className="relative p-6 flex-auto">
            {
              Array.from(basket).length === 0
                ? <div><span className='text-xl font-bold'>Sepetinizde Ürün Bulunmamaktadır.</span></div>
                :
                <table>
                  {
                    basket &&
                    (
                      <tbody>
                        {
                          basket.map((product, index) => (
                            <tr key={index}>
                              <td className='px-2 w-14 h-14'>
                                <img src={product.image} alt='/#' />
                              </td>
                              <td className='px-2 font-semibold'>{product.name}</td>
                              <td className='px-2 font-semibold'>{product.description}</td>
                              <td className='px-2 font-semibold'>
                                {
                                  sessionStorage.getItem("token") !== null
                                    ?
                                    <span>{parseInt((product.price / 100) * 80)}₺</span>
                                    :
                                    <span>{product.price}₺</span>
                                }
                              </td>
                              <td className='px-1'>
                                <div className="flex gap-x-1">
                                  <button onClick={() => dispatch(incItem(product))}><AiFillPlusCircle className='text-2xl'></AiFillPlusCircle></button>
                                  <div className='flex items justify-center bg-blue-500 text-white font-bold px-2 rounded-full'>
                                    {product.piece}
                                  </div>
                                  <button onClick={() => dispatch(descItem(product))}><AiFillMinusCircle className='text-2xl'></AiFillMinusCircle></button>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    )
                  }
                </table>
            }
          </div>
          <div>
            {
              Array.from(basket).length !== 0 &&
              <div className='flex justify-end px-10'>
                <span className='text-xl font-semibold'>{totalPrice() + "₺"}</span>
              </div>
            }
          </div>
          {
            Array.from(basket).length !== 0 &&
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => { basket.length <= 0 ? alert("Sepete Bir şeyler Eklemeyi Deneyin") : setShowModal(true) }}>
                Satın Al
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Sepet