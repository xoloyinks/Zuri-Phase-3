import Image from 'next/image'


import img1 from "../images/2002327.jpg"
import img2 from "../images/2002330.jpg"
import img3 from "../images/2002331.jpg"
import img4 from "../images/2002368.jpg"
import img5 from "../images/2002373.jpg"
import img6 from "../images/2002447.jpg"
import img7 from "../images/2002449.jpg"
import img8 from "../images/2002451.jpg"
import img9 from "../images/2002575.jpg"
import img10 from "../images/2002449.jpg"
import img11 from "../images/2002590.jpg"
import img12 from "../images/2002593.jpg"
import img13 from "../images/2002607.jpg"
import img14 from "../images/2002631.jpg"
import img15 from "../images/2002632.jpg"
import img16 from "../images/2002633.jpg"
import img17 from "../images/2002634.jpg"
import img18 from "../images/2002635.jpg"
import img19 from "../images/2002683.jpg"
import img20 from "../images/2002695.jpg"
import img21 from "../images/2002733.jpg"
import img22 from "../images/2002735.jpg"
import img23 from "../images/2002746.jpg"
import img24 from "../images/2002748.jpg"
import img25 from "../images/2002749.jpg"
import img26 from "../images/2002776.jpg"
import img27 from "../images/2002959.jpg"
import img28 from "../images/2002960.jpg"
import img29 from "../images/2002963.jpg"
import img30 from "../images/2002964.jpg"
import img31 from "../images/2002979.jpg"
import img32 from "../images/2002980.jpg"
import img33 from "../images/2003061.jpg"
import img34 from "../images/2003062.jpg"
import img35 from "../images/2003063.jpg"
import img36 from "../images/2003064.jpg"
import img37 from "../images/2003065.jpg"
import img38 from "../images/2003071.jpg"
import img39 from "../images/2003116.jpg"
import img40 from "../images/2003117.jpg"
import img41 from "../images/2003120.jpg"
import img42 from "../images/2003121.jpg"
import img43 from "../images/2003157.jpg"
import img44 from "../images/2003162.jpg"
import img45 from "../images/2003198.jpg"
import img46 from "../images/2003199.jpg"
import img47 from "../images/2003200.jpg"


export const images = [
    {
        avatar: img1,
        id: "Terrestrial"
    },
    {
        avatar: img2,
        id: "Terrestrial"
    },
    {
        avatar: img3,
        id: "Terrestrial"
    },
    {
        avatar: img4,
        id: "Terrestrial"
    },
    {
        avatar: img5,
        id: "Fish"
    },
    {
        avatar: img6,
        id: "Terrestrial"
    },
    {
        avatar: img7,
        id: "Terrestrial"
    },
    {
        avatar: img8,
        id: "Terrestrial"
    },
    {
        avatar: img9,
        id: "Wallpaper"
    },
    {
        avatar: img10,
        id: "Wallpaper"
    },
    {
        avatar: img11,
        id: "Terrestrial"
    },
    {
        avatar: img12,
        id: "Bird"
    },
    {
        avatar: img13,
        id: "Terrestrial"
    },
    {
        avatar: img14,
        id: "Terrestrial"
    },
    {
        avatar: img15,
        id: "Terrestrial"
    },
    {
        avatar: img16,
        id: "Terrestrial"
    },
    {
        avatar: img17,
        id: "Terrestrial"
    },
    {
        avatar: img18,
        id: "Wallpaper"
    },
    {
        avatar: img19,
        id: "Wallpaper"
    },
    {
        avatar: img20,
        id: "Terrestrial"
    },
    {
        avatar: img21,
        id: "Terrestrial"
    },
    {
        avatar: img22,
        id: "Fish"
    },
    {
        avatar: img23,
        id: "Wallpaper"
    },
    {
        avatar: img24,
        id: "Bird"
    },
    {
        avatar: img25,
        id: "Bird"
    },
    {
        avatar: img26,
        id: "Terrestrial"
    },
    {
        avatar: img27,
        id: "Wallpaper"
    },
    {
        avatar: img28,
        id: "Wallpaper"
    },
    {
        avatar: img29,
        id: "Wallpaper"
    },
    {
        avatar: img30,
        id: "Wallpaper"
    },
    {
        avatar: img31,
        id: "Wallpaper"
    },
    {
        avatar: img32,
        id: "Wallpaper"
    },
    {
        avatar: img33,
        id: "Terrestrial"
    },
    {
        avatar: img34,
        id: "Terrestrial"
    },
    {
        avatar: img35,
        id: "Bird"
    },
    {
        avatar: img36,
        id: "Terrestrial"
    },
    {
        avatar: img37,
        id: "Terrestrial"
    },
    {
        avatar: img38,
        id: "Bird"
    },
    {
        avatar: img39,
        id: "Terrestrial"
    },
    {
        avatar: img40,
        id: "Terrestrial"
    },
    {
        avatar: img41,
        id: "Wallpaper"
    },
    {
        avatar: img42,
        id: "Wallpaper"
    },
    {
        avatar: img43,
        id: "Terrestrial"
    },
    {
        avatar: img44,
        id: "Bird"
    },
    {
        avatar: img45,
        id: "Wallpaper"
    },
    {
        avatar: img46,
        id: "Bird"
    },
    {
        avatar: img47,
        id: "Terrestial"
    },
]


export const Img = ({image}) => {
    return(
        <>
            <div>
                 <Image width={0} height={0} alt='Image' src={image} placeholder= "blur" blurDataURL= "../images/Dual Ring-0.5s-77pxd.svg" className='w-full object-cover rounded-lg my-[1px] h-full' />
            </div>
        </>
    )
}