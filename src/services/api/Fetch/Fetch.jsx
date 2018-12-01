import React from 'react';

const API_HOST = 'http://localhost:3001/';

class Fetch extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: null,
            loading: false,
            error: null
        };
    }

    fetchData() {
        this.setState({ loading: true });
        fetch(`${API_HOST}${this.props.path}`, this.props.options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error trying to fetch data...');
                }
            })
            .then(data => this.setState({ data, loading: false }))
            .catch(error => this.setState({ error, loading: false }));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return this.props.children(this.state);
    }
}

export default Fetch;