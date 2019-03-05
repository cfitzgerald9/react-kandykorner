import React, {Component} from 'react';
class StoreList extends Component {
    render() {
        return (
            <article>
                <h1>Our Stores</h1>
                {this.props.stores.map((store) => {
                 return <p key={store.id}>{store.name}: {store.address}</p>
              })}
            </article>
        );
    }
}
export default StoreList