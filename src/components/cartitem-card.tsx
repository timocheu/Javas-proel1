import '../pages/Cart/styles/content.css'
import addimg from '../pages/Cart/imgs/add.png'
import subtractimg from '../pages/Cart/imgs/Trash.png'

export function CartItemCard(
    image = 'images/productlaptop.png',
    name = 'RAZER Blade 18 GeForce RTX 5070 Ti',
    color = 'Black',
    price = '214,900.00',
    qty = 2,
    onAdd = () => { },
    onReduce = () => { }
) {
    const total = (Number(price.toString().replace(/[,₱\s]/g, '')) * qty).toLocaleString();

    return (
        <>
            <tr>
                <td className="align-top p-3">
                    <div className="flex flex-row gap-3 items-start">
                        <div className="w-[135px] h-[100px] flex-shrink-0">
                            <img src={image} alt={name} className="w-full h-full object-cover" />
                        </div>


                        <div className="flex flex-col">
                            <span className="font-poppins font-semibold text-sm">{name}</span>
                            <span className="text-sm text-gray-600">Color: <span className="font-medium text-black">{color}</span></span>
                        </div>
                    </div>
                </td>


                <td className="text-center p-3 align-top font-semibold">₱ <span>{price}</span></td>


                <td className="p-3 align-top">
                    <div className="border border-black rounded-xl w-[100px] mx-auto">
                        <div className="flex items-center justify-between px-2 py-1">
                            <button onClick={onReduce} className="p-0 m-0 border-0 bg-transparent cursor-pointer">
                                <img src={subtractimg} alt="reduce" className="w-6 h-6 object-contain" />
                            </button>


                            <span id="productAMT" className="text-sm">{qty}</span>


                            <button onClick={onAdd} className="p-0 m-0 border-0 bg-transparent cursor-pointer">
                                <img src={addimg} alt="add" className="w-6 h-6 object-contain" />
                            </button>
                        </div>
                    </div>
                </td>


                <td className="text-center p-3 align-top font-semibold">₱ <span>{total}</span></td>
            </tr>
        </>
    )
}