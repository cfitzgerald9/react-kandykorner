import React, {Component} from 'react';
class CandyList extends Component {
    render() {
        return (
            <article>
                <h3>We have:</h3>
              {this.props.candies.map((candy) => {
                 return <p key={candy.id}>{candy.name}, a {this.props.types.find(type => type.id === candy.candyTypeId).name} candy.</p>
              })}
            </article>
        );
    }
}

export default CandyList;