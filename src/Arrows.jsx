export const CustomPrevArrow = (props) => (
  <button {...props} className="slick-prev">
    Previous
    <svg width="20" height="20">
      <path d="M0,10 L10,0 L20,10 Z" fill="black" stroke="black" />
    </svg>
  </button>
);

export const CustomNextArrow = (props) => (
  <button className="arrow right"> 
    Right arrow: <i className="arrow right"></i>
  </button>
);
