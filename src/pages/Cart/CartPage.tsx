import './styles/content.css'

import { MoveLeft } from 'lucide-react'
import { CartItemCard } from '../../components/cartitem-card'

import backimg from './imgs/Right Arrow.png'

export function CartPage() {
    const cartItems = [
        { id: 1, image: 'images/productlaptop.png', name: 'RAZER Blade 18 GeForce RTX 5070 Ti', color: 'Black', price: '214,900.00', qty: 2 },
        { id: 2, image: 'images/productlaptop.png', name: 'Another Laptop', color: 'Silver', price: '89,999.00', qty: 1 },
    ];


    return (
        <div className="flex flex-col items-left font-poppins">
            <label className="pageTitle-lbl text-[40px] font-red-rose mt-[25px] mb-[50px]" aria-label="check out">
                SHOPPING CART
            </label>


            <main className="cart-container border border-black w-full max-w-[1250px] p-8 flex flex-col">
                <div className="cartTop-container flex flex-row justify-between items-center mb-4">
                    <label className="text-base">My Cart (<span id="cartItemAMT">{cartItems.length}</span>)</label>


                    <button id="continueShopping-btn" className="continueShopping-btn flex flex-row items-center justify-center gap-2 bg-white cursor-pointer font-bold text-sm px-4 py-2" title="Continue shopping">
                        <MoveLeft className=""></MoveLeft>
                        <span>Continue Shopping</span>
                    </button>
                </div>


                <hr className="border-t border-black w-full mb-4" />


                <div className="cartItems-container w-full overflow-auto">
                    <table className="cartItems-table w-full table-auto">
                        <thead>
                            <tr className="text-left">
                                <th className="p-3">Product</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Quantity</th>
                                <th className="p-3">Total</th>
                            </tr>
                        </thead>


                        <tbody>
                            {cartItems.map((it) => (
                                <CartItemCard key={it.id} image={it.image} name={it.name} color={it.color} price={it.price} qty={it.qty} />
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="cartbottom-container mt-6 text-right">
                    <button className="buynow-btn bg-black text-white font-poppins text-[24px] px-5 py-2">Buy now</button>
                </div>
            </main>
        </div>
    )
}