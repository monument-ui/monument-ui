import React from 'react';
import PropTypes from 'prop-types';

import './Col.scss';

const Col = ({
  className = '',
  style = {},
  children,
  lg,
  md,
  sm,
  xs
  /* lgHidden = false,
  mdHidden = false,
  smHidden = false,
  xsHidden = false */
}) => {
  let size;

  const responsiveGrid = () => {
    if (window.innerWidth < 768) {
      size = `col-xs-${xs}`;
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      size = `col-sm-${sm}`;
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      size = `col-md-${md}`;
    } else {
      size = `col-lg-${lg}`;
    }
  };

  responsiveGrid();

  window.addEventListener('resize', () => responsiveGrid());

  return (
    <section className={`col ${className} ${size}`} style={style}>
      {children}
    </section>
  );
};

Col.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.number,
  style: PropTypes.object,
  lg: PropTypes.string,
  md: PropTypes.string,
  sm: PropTypes.string,
  xs: PropTypes.string,
  className: PropTypes.string
};

export default Col;
