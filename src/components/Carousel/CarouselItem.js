const CarouselItem = props => {
    return <a className="carousel-item" href={props.href}>{props.children}</a>
}

export default CarouselItem;