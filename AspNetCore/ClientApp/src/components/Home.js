import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateMoviesData();
    }

    static renderForecastsTable(forecasts) {
        return (
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Run Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forecasts.map(forecast => <tr key={forecast.id}>
                                <td>{forecast.title}</td>
                                <td>{forecast.runTimeInMins}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Asp .Net MVC sample</h1>
                        <p class="lead">Using MongoDB as database.</p>
                    </div>
                </div>
                <h1 id="tabelLabel">Movies List</h1>
                <p>This component demonstrates fetching data from Mongo db cloud database.</p>
                {contents}
            </div>
        );
    }

    async populateMoviesData() {
        const response = await fetch('movies');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
