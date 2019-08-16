import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section className="contact py-5">
            <div className="container">
                <Title title="contact us" />
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto">
                        <form action="https://formspree.io/mahmoud.srouji@gmail.com" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" className="form-control" placeholder="Full Name" maxlength="30" required />
                            </div>
                            {/* Email field */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
                            </div>
                            {/* Message */}
                            <div className="form-group">
                                <label htmlFor="msg">Message</label>
                                <textarea name="msg" id="msg" className="form-control" rows="10" placeholder="Your Message" required></textarea>
                            </div>
                            {/* Submit */}
                            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-4">send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
