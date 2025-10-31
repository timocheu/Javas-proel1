import productimg from './imgs/Rectangle 4.png';
import subimg from './imgs/Rectangle 4.png';

import './styles/pbodycontent.css'

export function ProductPage() {

    return (
        <>
            <section className="pdbody-top">
                <div className="pdbodytop-container">
                    <div className="pdbodytopimg-container">
                        <div className="topmainimg-container">
                            <img className="topmainimg" src={productimg}/> 
                        </div>
                        <div className="topimgselection-container">
                            <img className="topsubimg" src={subimg}/>
                            <img className="topsubimg" src={productimg}/>
                            <img className="topsubimg" src={productimg}/>
                            <img className="topsubimg" src={productimg}/>

                        </div>
                    </div>
                    <div className="ptopmaindesc-container">
                        <label className="productname-label">RAZER Blade 18 GeForce RTX 5070 Ti</label>
                        <label className="productdescription-label">Product Description: </label>
                        <label>THE MOST POWERFUL BLADE EVER.Experience true desktop-level performance on the biggest screen with
                            the Razer Blade 18 gaming laptop. Armed with up to NVIDIA® GeForce RTX™ 5070 laptop GPU and the
                            latest Intel® Core™ Ultra 9 275HX processor, game and create flawlessly on our most powerful Blade
                            ever.
                        </label>
                        <label className="productprice-label">
                            ₱ 214,900.00
                        </label>
                        <label>
                            Colors:
                        </label>
                        <div className="colorselection-container">
                            <div className="color-container"></div>
                            <div className="color-container"></div>
                            <div className="color-container"></div>
                        </div>
                        <div className="quantitycontrol-container">
                            <button className="decreasequantity-button" data-set="decrease"
                                aria-label="decrease quantity">-</button>
                            <div className="quantityamt-container">
                                <label className="quantityamt-label" data-set="quantity amount">0</label>
                            </div>
                            <button className="increasequantity-button" data-set="increase"
                                aria-label="increase quantity">+</button>
                        </div>
                        <div className="optionsbtn-container">
                            <button id="addcart-btn" className="addcart-btn" data-set="add to cart" aria-label="Add Cart">
                                Add to cart
                            </button>

                            <button id="buynow-btn" className="buynow-btn" data-set="add to cart" aria-label="Buy now">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pbodybottom-container">
                    <div className="pbodybottommainimg-container">
                        <img className="pbodybottommainimg" src={productimg}  alt="laptop image"/>
                    </div>
                    <label className="pbodybottomname-label" aria-label="laptop name">
                        RAZER Blade 18
                    </label>

                    <div className="pbodybottomdescription-container">
                        <label className="pbodybottomspecification-label">Specification </label>
                        <table className="Specification-table">
                            <tr>
                                <th id="productbrand" className="specificationlabel">Brand</th>
                                <td id="productbrandvalue" className="Specificationvalue">Razer</td>
                            </tr>
                            <tr>
                                <th id="productmodel" className="specificationlabel">Model</th>
                                <td id="productmodelvalue" className="Specificationvalue">Blade 18</td>
                            </tr>
                            <tr>
                                <th id="productcolor" className="specificationlabel">Color</th>
                                <td id="productcolorvalue" className="Specificationvalue">Black</td>
                            </tr>
                            <tr>
                                <th id="productprocessor" className="specificationlabel">Processor</th>
                                <td id="productprocessorvalue" className="Specificationvalue">Intel® Core Arrow Lake Ultra
                                    9-275HX 36 MB Smart Cache</td>
                            </tr>
                            <tr>
                                <th id="productOS" className="specificationlabel">Operating System</th>
                                <td id="productOSvalue" className="Specificationvalue">Windows 11 Home</td>
                            </tr>
                            <tr>
                                <th id="productgraphic" className="specificationlabel">Graphics</th>
                                <td id="productgraphicvalue" className="Specificationvalue">GeForce RTX 5070 Ti</td>
                            </tr>
                            <tr>
                                <th id="productramstorage" className="specificationlabel">RAM and Storage</th>
                                <td id="productramstoragevalue" className="Specificationvalue">16 GB 5600 MHz RAM, 1 TB SSD</td>
                            </tr>
                            <tr>
                                <th id="productdisplay" className="specificationlabel">Display</th>
                                <td id="productdisplayvalue" className="Specificationvalue">18" Dual UHD+ 240 Hz | FHD+ 440 Hz</td>
                            </tr>
                            <tr>
                                <th id="productbatterypack" className="specificationlabel">Battery Pack</th>
                                <td id="productbatterypackvalue" className="Specificationvalue">Built-in 99 WHr</td>
                            </tr>
                            <tr>
                                <th id="productadditionalfeat" className="specificationlabel">Addtional features</th>
                                <td id="productaddtionalfeatvalue" className="Specificationvalue">Windows® Hello built-in IR 5MP
                                    Webcam, Mechanical Privacy Shutter Razer™ Synapse 3 enabled with performance, programmable
                                    keyboard, backlighting, and fan control Kensington™ Security Slot</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}