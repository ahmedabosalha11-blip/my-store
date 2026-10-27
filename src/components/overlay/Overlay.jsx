import { useContext } from "react"
import { cartContext } from "../cartProvider/CartProvider"

function Overlay() {
    const {setSidebarMood , sidebarMood} = useContext(cartContext)
  return (
    <>
    {sidebarMood && <div onClick={()=>setSidebarMood(false)} className="overlay d-md-none"></div>}
    </>
  )
}

export default Overlay
