import React from "react"

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  }

  // react static method to get state, process it, and then pass to component
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"]

    if (media) {
      photos = media.map(({ large }) => large)
    }

    return { photos }
  }

  handleIndexClick = (event) => {
    this.setState({
      active: parseInt(event.target.dataset.index),
    })
  }

  render() {
    const { photos, active } = this.state

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              alt="animal-photo"
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
