import React, {PropTypes} from "react";
import SuperLiterate from "../SuperLiterate";

export default React.createClass({
  render() {
    let content = [
      `
# More Ray Tracing

## Phong model for specular reflectance:

\`(ambient) + (diffuse Lambert reflectance) + (Phong specular reflectance)\`

         `,
      React.createElement(require("./Program1.jsx")),
      `
## Blinn-Phong model for specular reflectance:

\`(ambient) + (diffuse Lambert reflectance) + (Blinn-Phong specular reflectance)\`

         `,
      React.createElement(require("./Program2.jsx")),
      `
## Shadows
        `,
      React.createElement(require("./Program3.jsx")),
      `
## Add a plane
        `,
      React.createElement(require("./Program4.jsx")),
      `
## Boolean intersection

         `,
      React.createElement(require("./Program5.jsx")),
      `
## Reflection

`,
      React.createElement(require("./Program6.jsx")),
    ];
    return (
      <SuperLiterate>
        {content}
      </SuperLiterate>
    );
  }
})
