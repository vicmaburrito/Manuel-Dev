import React, { useState, useEffect, useRef } from 'react';
// import TOPOLOGY from 'vanta/dist/vanta.topology.min';
// import * as p5 from 'p5';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
import './FirstBlock.css';

function FirstBlock() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x2222,
          midtoneColor: 0x89964e,
          lowlightColor: 0x3d5021,
          baseColor: 0x064635,
          blurFactor: 0.28,
          speed: 2.20,
          zoom: 1.80,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section className="masthead d-flex align-items-center" ref={myRef}>
      <div className="container px-4 px-lg-5 text-center scale-down-center">
        <h1 className="mb-1 display-4 text-white">Manuel Aldaraca</h1>
        <h3 className="mb-5 text-white"><em>Full-Stack Web Developer</em></h3>
      </div>
    </section>
  );
}

export default FirstBlock;
