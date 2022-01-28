import { useEffect, useRef } from 'react'


export const ScrollToView = () => {

  const elementRef = useRef(null);

  useEffect(() => {
    const target = elementRef.current;
    target.parentNode.scrollTop = target.ofsetTop;
  }, [])

  return <div ref={elementRef}></div>

}