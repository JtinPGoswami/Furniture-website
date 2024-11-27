import React from 'react'
import Chair_hover from "../components/Chair_hover";

const Shop = () => {
  return (
    <div className=" flex flex-wrap  my-32 justify-center items-center gap-4 gap-y-16">
  <Chair_hover img={"product-1.png"} name={"Gaming Chair"} price={250}className="w-[20%]"/>
  <Chair_hover img={"product-2.png"} name={"Relaxing Chair"} price={378}className="w-[20%]"/>
  <Chair_hover img={"product-3.png"} name={"Office Chair"} price={342} className="w-[20%]"/>
  <Chair_hover img={"product-4.png"} name={"Gaming Chair"} price={382}className="w-[20%]"/>
  <Chair_hover img={"product-5.png"} name={"Stool"} price={100}className="w-[20%]"/>
  <Chair_hover img={"product-6.png"} name={"Normal Chair"} price={120}className="w-[20%]"/>
  <Chair_hover img={"product-7.png"} name={"Kids Chair"} price={158}className="w-[20%]"/>
  <Chair_hover img={"product-8.png"} name={"Fancy Chair"} price={490}className="w-[20%]"/>
    </div>
  )
}

export default Shop