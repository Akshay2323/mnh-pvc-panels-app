/* eslint-disable @next/next/no-img-element */

import productData from "../../data/product.json";

export default function CategorySlider() {
    return (
        <div
            className="slider"
            data-options="type:carousel,arrows:true,perView:4,perViewLg:3,perViewMd:3,perViewSm:2,perViewXs:1,gap:15,controls:out,animationDuration:600,rewind:false,bound:false">
            {
                productData.map((item) => (
                    <div key={item.id} className="category-box">
                        <img src={'/assets/long-9.jpg'} alt={item.name} />
                        <div className="category-content">
                            <h3 className="title">{item.name}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}