import React from 'react'

const Home = ({active})=> {
    return (
    <section id="home" className={`home page ${active ? 'active' : 'inactive'}`}>
      <div className="container">
        <div className="row">
            <div className="col-md-6 col-md-push-3 text-center">
                <h1 style={{color: 'white'}}>Welcome</h1>
                <img src="/images/empist-logo.png" />
                <hr />
                <p style={{color: 'white'}}>
                    Thank you for your time! After our call I decided I would throw together a little site to tell you more about myself, and what I hope to provide your amazing organization.</p>
            </div>
        </div>
      </div>
    </section>
    )
}

export default Home