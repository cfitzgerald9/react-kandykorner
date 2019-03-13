import React, { Component } from "react";


export default class CandyForm extends Component {
    state = {
        candyName: "",
        TypeId: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewCandy = evt => {
        evt.preventDefault();
            const candy = {
                name: this.state.candyName,
                TypeId: parseInt(this.state.typeId),
            };
            this.props
                .addCandy(candy)
                .then(() => this.props.history.push("/candies"));

    };

    render() {
        return (
            <React.Fragment>
                <form className="candyForm">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="candyName"
                            placeholder="Candy name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="types">What type of candy is this?</label>
                        <select
                            defaultValue=""
                            name="type"
                            id="typeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select a type</option>
                            {this.props.types.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewCandy}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}