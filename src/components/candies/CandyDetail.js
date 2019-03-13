import React, { Component } from "react"



export default class CandyDetail extends Component {
    render() {

        const candy = this.props.candies.find(a => a.id === parseInt(this.props.match.params.candyId)) || {}

        return (
            <section className="candy">
                <div key={candy.id} className="card">
                    <div className="card-body">
                        <h2>{candy.name}</h2>
                        <h3>{this.props.types.find(typeParam=> typeParam.id === candy.TypeId).name} </h3>
                            <a href="/candies"
                                onClick={() => this.props.deleteCandy(candy.id)
                                    .then(() => this.props.history.push("/candies"))}
                                className="card-link">Delete</a>
                    </div>
                </div>
            </section>

        )
    }
}