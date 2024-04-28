import React, { useEffect } from 'react';

import "../../css/Projects.css"

function Projects() {

  useEffect(() => {
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

    next.addEventListener('click', function () {
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').appendChild(items[0])
    })

    prev.addEventListener('click', function () {
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
    })

    

  }, [])

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <section className='container' id="projects">
        <div className="slide">

          <div className="item" style={{ "backgroundImage": " url(https://i.ibb.co/qCkd9jS/img1.jpg)" }}>
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ "backgroundImage": "url(https://i.ibb.co/jrRb11q/img2.jpg)" }}>
            <div className="content">
              <div className="name">Finland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ "backgroundImage": "url(https://i.ibb.co/NSwVv8D/img3.jpg)" }}>
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ "backgroundImage": "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)" }}>
            <div className="content">
              <div className="name">Australia</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ "backgroundImage": "url(https://i.ibb.co/jTQfmTq/img5.jpg)" }}>
            <div className="content">
              <div className="name">Netherland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ "backgroundImage": "url(https://i.ibb.co/RNkk6L0/img6.jpg)" }}>
            <div className="content">
              <div className="name">Ireland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className="button">
          <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
          <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </section>

      <script src='./Project.js' defer></script>
    </>

  );
}

export default Projects;
