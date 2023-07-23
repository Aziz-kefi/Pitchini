"use client"
import React , {useRef} from 'react';
import Globe from 'globe.gl';


const  GlobeVisualization = () => {
  const shieldRing = { lat: 90, lng: 0 };
  const globeRef = useRef(null); // Create a ref for the Globe element

  React.useEffect(() => {
    const globe = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .ringsData([shieldRing])
      .ringAltitude(0.25)
      .ringColor(() => 'rgb(255, 94, 0)')
      .ringMaxRadius(180)
      .ringPropagationSpeed(20)
      .ringRepeatPeriod(200)
      (document.getElementById('globeViz'));
globe.backgroundColor('rgba(0,0,0,0)')
globe.width(globeRef.current.clientWidth)
globe.controls().enableZoom=false;
globe.height(600)
globe.camera()
// globe.showAtmosphere(false)


    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <div id="globeViz"  ref={globeRef} className='w-full flex overflow-hidden'></div>
  );
};


  
   export default GlobeVisualization;