import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function scrollTop() {
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scroll({
            top: 0
        })
    },[pathname]);
  return null
}

export default scrollTop
