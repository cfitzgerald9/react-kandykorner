import React, {Component} from 'react';
import { Link } from "react-router-dom";
class CandyList extends Component {
    render() {
        return(
        <React.Fragment>
        <div className="candyButton">
        <button type="button"
                className="btn btn-success"
                onClick={() => {
                    this.props.history.push("/candies/new")}
                }>
           Add Candy
        </button>
    </div>

    <section className="candies"></section>
            <article>
                <h3>We have:</h3>
              {this.props.candies.map(candy => {
                 return <p key={candy.id}>{candy.name} <button className="deleteCandyButton" onClick={() =>
                    this.props.deleteCandy(candy.id)}>Discontinue</button>
                    <Link className="nav-link" to={`/candies/${candy.id}`}>More Details</Link></p>
              })}
            </article>

        </React.Fragment>
        )
    }
}

export default CandyList;