import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
  const containerRef = useRef(null);

  useEffect(() => {
    mount(containerRef.current);
  }, []);

  return <div ref={containerRef} />;
};
