import React, { PureComponent } from "react";

import { Sticky, StickyContainer } from "react-sticky";

let renderCount = 0;
 class StickyNav extends PureComponent {
  render() {
    return (
      <div>
        <h2>Content before the Sticky...</h2>
        <div
          className="gap short"
          style={{ background: "linear-gradient(#fff, #ddd)" }}
        />
        <StickyContainer className="container">
          <Sticky>
            {({ style }) => (
              <header style={style} renderCount={renderCount++} > Sticky Nav</header>
            )}
          </Sticky>

          <h2 className="text-center">{"<StickyContainer />"}</h2>
        </StickyContainer>
        <div
          className="gap tall"
          style={{ background: "linear-gradient(#ddd, #fff)" }}
        >
          <h2>Content after the Sticky...</h2>
        </div>
      </div>
    );
  }
}

export default StickyNav;