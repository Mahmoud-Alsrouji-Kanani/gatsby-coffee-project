import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

const getCategories = items => {
    let tempCategories = items.map(({ node }) => {
        return node.category;
    });
    let categories = Array.from(new Set(tempCategories));
    return ['all', ...categories];
}

export default class Menu extends Component {
    constructor(props) {
        super(props)
        //console.log(props.items)
        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }
    handleItems = (category) => {
        let tempItems = [...this.state.items];
        if (category === 'all') {
            this.setState(() => {
                return { coffeeItems: tempItems }
            });
        } else {
            let filteredItems = tempItems.filter(({ node }) => {
                return node.category === category
            });
            this.setState(() => {
                return { coffeeItems: filteredItems }
            });
        }
    }
    render() {
        let items = '';
        if (this.state.items.length) {
            items = (
                <>
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            {this.state.categories.map((category, index) => {
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className="btn btn-yellow text-capitalize m-3 mb-4"
                                        onClick={() => { this.handleItems(category) }}>
                                        {category}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.coffeeItems.map(({ node }) => {
                                return (
                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                        <div>
                                            <Img fixed={node.image.fixed} />
                                        </div>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0 font-weight-bold">
                                                    {node.title}
                                                </h6>
                                                <h6 className="mb-0 text-yellow font-weight-bold">
                                                    ${node.price}
                                                </h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.description.description}</small>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </>
            );
        } else {
            items = (
                <div className="row">
                    <div className="col mx-auto text-center text-capitalize">
                        <h1>There are no items to display</h1>
                    </div>
                </div>
            );
        }
        return (
            <section className="menu py-5">
                <div className="container">
                    <Title title="our menu" />
                    {items}
                </div>
            </section>
        )
    }
}
