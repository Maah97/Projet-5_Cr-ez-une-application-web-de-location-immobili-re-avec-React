function Rating(props){
    let classNote = ['etoile', 'etoile', 'etoile', 'etoile', 'etoile'];
    for (let i = 0; i < props.note; i++) {
        classNote[i] += ` note${i+1}`
    }
    return (
        <div className="rating">
            <div className={classNote[0]}><i className="fa-solid fa-star"></i></div>
            <div className={classNote[1]}><i className="fa-solid fa-star"></i></div>
            <div className={classNote[2]}><i className="fa-solid fa-star"></i></div>
            <div className={classNote[3]}><i className="fa-solid fa-star"></i></div>
            <div className={classNote[4]}><i className="fa-solid fa-star"></i></div>
        </div>
    )
}

export default Rating;
