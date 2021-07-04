import React from 'react'

const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="img-gradient">
                <img src="./images/netflix-bg.jpeg" alt="" />
                <div className="signup-img-gradient"></div>
            </div>

            <div className="heading-main">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <form className="form-floating signup">
                    <input type="email" className="form-control email-signup" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInputInvalid">Email address</label>
                    <button className="get-started-btn" type="submit">Get Started</button>
                </form>  
            </div>
        </div>
    )
}

export default SignUp;