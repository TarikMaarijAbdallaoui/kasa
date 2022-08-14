import React from 'react'

const Gallery = (pictures) => {
        console.log(pictures);
        const [current, setCurrent] = React.useState(0);
        const length = pictures.length;
        current === length && setCurrent(0);
        current < 0 && setCurrent(length - 1);
  return (
        <div className="gallery">
        <img src={pictures[current]} alt="" />
        <div className="gallery-buttons">
          <i className="fa fa-solid fa-angle-left fa-3x" onClick={() => setCurrent(current - 1)}></i>
          <i className="fa fa-solid fa-angle-right fa-3x" onClick={() => setCurrent(current + 1)}></i>
        </div>
        <span className="current">
          {current + 1}/{length}
        </span>
      </div>
  )
}

export default Gallery
