import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
      <section
        style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#30336b" }}
      >
        {/* Hero Section  */}
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* Main Content  */}
          <main>
            <div className="text-center justify-center ">
              <div className="mb-2">
                {/* Image  */}
                <div className="flex justify-center h-[15rem] w-auto">
                  <img
                    src="https://media.discordapp.net/attachments/823387037096476695/1295426727291523095/462361630_845604397734961_7516625086040200148_n.png?ex=670e9ba7&is=670d4a27&hm=26d0212aca6fc0ec563c6acea00c393961699d7bad6cdfbfd6344d52e38bfc47&=&format=webp&quality=lossless&width=671&height=671"
                    alt=""
                  />
                </div>

                {/* Text  */}
                <h1 className=" text-3xl text-white font-bold"></h1>
              </div>

              {/* Paragraph  */}
              <p
                style={{ color: mode === "dark" ? "white" : "white" }}
                className="sm:text-3xl text-xl font-extralight sm:mx-auto "
              >
                พื้นที่แห่งการ <b>สนทนา</b> แชร์ และ แลกเปลี่ยนประสบการณ์
              </p>
            </div>
          </main>
        </div>
      </section>
    );
}

export default HeroSection