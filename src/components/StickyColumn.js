import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "reactstrap";

const StickyColumn = ({ textColumn, img, children }) => {
  const stickySection = useRef(null);
  const [stickyClass, setStickyClass] = useState("above");

  useEffect(() => {
    // componentDidMount + componentDidUpdate
    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    // componentWillUnmount
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  });

  function checkScrollPosition() {
    const isDesktop = window && window.innerWidth > 991;
    const elmt = stickySection.current;

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const topPosition = elmt.getBoundingClientRect().top;
    const bottomPosition = elmt.getBoundingClientRect().bottom;

    // check if section height is taller than vh
    if (elmt.offsetHeight > viewportHeight && isDesktop) {
      if (topPosition > 0) {
        // if top of section is above top of viewport
        if (stickyClass !== "above") setStickyClass("above");
      } else if (topPosition === 0 || bottomPosition > viewportHeight) {
        // if top of section is at top of viewport
        // or if bottom of section is below bottom of viewport
        if (stickyClass !== "fixed") setStickyClass("fixed");
      } else if (bottomPosition <= viewportHeight) {
        // if bottom of section is at or above bottom of viewport
        if (stickyClass !== "below") setStickyClass("below");
      }
    }
  }

  return (
    <div ref={stickySection} className="sticky-slice">
      <Row>
        <Col
          lg={6}
          className={
            textColumn !== "right"
              ? "img-col right order-lg-2"
              : "img-col left"
          }
        >
          <div
            className={`sticky-cont ${stickyClass}`}
            style={{
              backgroundImage: img ? `url(${img})` : "none",
              backgroundPosition: "center center",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              minHeight: 350
            }}
          />
        </Col>
        <Col
          lg={6}
          className={
            textColumn !== "right" ? "text-col order-lg-1" : "text-col"
          }
        >
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default StickyColumn;
