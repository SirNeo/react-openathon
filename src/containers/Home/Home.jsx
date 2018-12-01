import React from 'react';
import { Info, Loader, Notification } from '../../components';
import { Fetch } from '../../services/api';

const FETCH_OPTIONS = {
    method: 'GET',
    headers: {}
};

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="Home__info">
                    <Info title="About Accenture"
                        
                    />
                    <Fetch path={'general'} options={FETCH_OPTIONS}>
                        {({ data, loading, error }) => {
                            if (error) {
                                return (
                                    <Notification type="error"
                                        message= {error.message}
                                    />
                                );
                            }
                            if (loading) {
                                return <Loader />;
                            }
                            if (data) {
                                return (
                                    <Info data={data} />
                                );
                            }
                            return <Loader />;
                        }}
                    </Fetch>
                </div>
            </div>
        );
    }
}

export default Home;