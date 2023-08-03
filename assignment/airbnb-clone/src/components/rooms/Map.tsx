import { useState, useEffect, useRef } from 'react'

const Map: React.FC<{}> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

    useEffect(()=>{
      if (ref.current) { 
      const newMap = new window.google.maps.Map(ref.current, {
        center : { lat: 37.569227, lng: 126.9777256},
        zoom : 16,
    });     
    
    setMap(newMap);
    }

    },[])

  return (
    <div className='w-full h-[400px]' ref={ref} id="map"></div>
  )
}

export default Map
