import React, { Component } from 'react';
import background from "../images/vintage-reel-camera.jpg";

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
            <div class="float-container" style={{ padding: `20px`}}>
            {
                    forecasts.map(forecast =>
                        <div class="float-child"
                            style={{
                                width: `50%`,
                                float: `left`,
                                padding: `20px` }}>
                    <div key={forecast.id} class="card shadow">
                            <img class="card-img-top" src={`${forecast.imageSrc}`}
                                style={{
                                    width: `50%`,
                                    height: `70vh`,
                                    objectFit: `fill`,
                                    marginBottom: `1rem`
                                }}
                                alt="Card image cap" />
                    <div  class="card-body">
                        <h5 class="card-title">{forecast.title}</h5>
                        <p class="card-text">{forecast.year}</p>
                        <p class="card-text">{forecast.runTimeInMins}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div></div></div>)
            }</div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderForecastsTable(this.state.forecasts);

        return (
            <><div>
                <div class="jumbotron"
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center center`,
                        backgroundRepeat: `no-repeat`
                    }}>
                    <div class="container">
                        <h1 class="display-4">Asp .Net MVC sample</h1>
                        <p class="lead">Using MongoDB as database.</p>
                    </div>
                </div>
                <h1 id="tabelLabel">Movies List</h1>
                <p>This component demonstrates fetching data from Mongo db cloud database.</p>
                {contents}
            </div>
                <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50 rounded"
                style={{
                    marginTop: `1rem`
                }}>
                    <div class="container text-center">
                        <small>Copyright &copy; Website</small>
                    </div>
                </footer></>
        );
    }

    async populateMoviesData() {
        var limit = 10;
        const response = await fetch('movies');
        const data = await response.json();
        this.setState({ forecasts: data.slice(0, limit), loading: false });
    }
}
