import React, { useState, useEffect, useRef } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import * as p5 from 'p5';
import './FirstBlock.css';

function FirstBlock() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: myRef.current,
          p5,
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
        <h1 className="mb-1 display-3 text-white">Manuel Aldaraca</h1>
        <h3 className="mb-5 text-white"><em>Full-Stack Web Developer</em></h3>
      </div>
    </section>
  );
}

export default FirstBlock;
