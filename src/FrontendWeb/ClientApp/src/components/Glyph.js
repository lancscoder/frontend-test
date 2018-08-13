import React from 'react';

const Glyph = ({name}) => (
  <span className={name} style={{'paddingLeft': '5px', 'paddingRight': '5px'}} aria-hidden="true"></span>
);

export default Glyph;