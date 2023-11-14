import React from 'react';

function Ürünler() {
    const menuItems = {
        urun: {
            brand: "Wolkswagen",
            seri: "Tiguan",
            type: "SUV",
            desc:"Sahibinden çıtır hasarlı",
            image: "https://i0.shbdn.com/photos/96/42/47/x5_113596424777w.jpg",
        },
    };

    return (
        <div>
            {Object.keys(menuItems).map((urunKey) => {
                const urun = menuItems[urunKey];
                return (
                    <div key={urunKey} style={{cursor:"pointer"}}>
                        <img src={urun.image} alt=""style={{width:"auto",height:"100px"}} />
                        <p className='fs-6'>{urun.desc}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Ürünler;


