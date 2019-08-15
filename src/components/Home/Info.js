import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info({ homeCTA }) {
    const cta = (homeCTA ? <Link to="/about"><button className="btn text-uppercase btn-yellow">about</button></Link> : '');
    return (
        <section className="py-5">
            <div className="container">
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <Title title="our story" />
                    <p className="lead text-muted mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil culpa tenetur inventore veniam blanditiis odit tempore! Similique, itaque? Obcaecati nostrum, nesciunt voluptas aliquid minima quis explicabo ab nobis eligendi illum? Dolores sequi vero quam aperiam sint, omnis pariatur eius nam ad eveniet consequuntur vitae accusantium ex tenetur aspernatur! Exercitationem!
                    </p>
                    {cta}
                </div>
            </div>
        </section>
    )
}
