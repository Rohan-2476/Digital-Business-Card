import React from 'react'

function Info() {
    return (
        <>
            <div className="cardContainer">
                <img src= 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000' className="card-img-top cardImage" alt="..." />
            </div>

            <div className='info m-3'>
                <h1 className='name'>Rohan Suradkar</h1>
                <h6>Frontend Developer</h6>
            </div>

            <div className="link-buttons mb-4">
                <a href="https://www.gmail.com/" target='_blank'>
                    <button className="btn btn-success"> <i class="bi bi-envelope"></i> Email</button>
                </a>

                <a href="https://www.linkedin.com/" target='_blank'>
                    <button className="btn btn-primary"> <i class="bi bi-linkedin"></i> LinkedIn</button>
                </a>
            </div>
        </>

    )
}

export default Info