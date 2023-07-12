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

// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import Globe from 'globe.gl';
// import * as topojson from 'topojson-client';

// const GlobeVisualization = () => {
//     useEffect(() => {
//       const world = Globe()(document.getElementById('globeViz'))
//      
//         .showGlobe(false)
//         .showAtmosphere(false);
  
//       fetch('//unpkg.com/world-atlas/land-110m.json')
//         .then(res => res.json())
//         .then(landTopo => {
//           world
//             .polygonsData(topojson.feature(landTopo, landTopo.objects.land).features)
//             .polygonCapMaterial(new THREE.MeshStandardMaterial({ color: '#828282', side: THREE.DoubleSide }))
//             .polygonSideColor(() => 'rgba(0,0,0,0)');
//         });
//     }, []);
  
//     return (
//       <>
//         <div id="globeViz"></div>
//       </>
//     );
//   };
  
   export default GlobeVisualization;