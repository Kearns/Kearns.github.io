import React from 'react'

const Work = ({active})=> {
    return (
    <section id="work" className={`work page ${active ? 'active' : 'inactive'}`}>
        
      <div className="container">
        
      <div className="row">
          <div className="col-md-12">
            <h3>Latest Experiments</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Pencil Box</h2>
            <span>HTML5 Canvas | ES6</span>
            <p>
              Pencil box is a proof of concept. Written for signature collection Pencil Box is designed for performance first, capable of running on low powered web accessible devices. Signature collection is touch screen ready and signature data is exported via base 64 image data.
            </p>
            <a href="https://github.com/Kearns/PencilBox/" target="_blank">View Projecton Github</a>
          </div>

          <div className="col-md-6">
           <img src="/images/pencilbox.png" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
              <h2>Image-Editor</h2>
              <span>HTML5 Canvas | ES6 | React</span>
              <p>
                Image-Editor is a test react app utilizing experimental canvas filters that are currently only available in Chrome and Firefox but have made their way into the W3C living standard. Image-Editor features drag and drop uploading, cropping, image filtering, and downloading all from the browser.
              </p>
              <a href="https://github.com/Kearns/ImageEditor">View Project on Github</a>
          </div>
          <div className="col-md-6">
           <img src="/images/ImageEditor.png" />
          </div>
        </div> 
      </div>
    </section>
    )
}

export default Work