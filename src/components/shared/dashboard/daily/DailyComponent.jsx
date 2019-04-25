import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
class DailyComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {

            }

        }
    }
    componentDidMount() {
        this.getChartData();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.countFeedback !== this.props.countFeedback) {
            var dataEdit = this.state.data;
            dataEdit.datasets[0].data[0] = this.props.countTour;
            dataEdit.datasets[0].data[1] = this.props.countFeedback;
            dataEdit.datasets[0].data[2] = this.props.countBook;
            dataEdit.datasets[0].data[3] = this.props.countBlog;
            this.setState({
                data: dataEdit
            })
        }
    }

    getChartData = () => {
        this.setState({
            data: {
                labels: [
                    'Tour',
                    'Feedback',
                    'Book',
                    'Blog',
                ],
                datasets: [
                    {
                        data: [4, 7, 3, 4],
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#8B6C0C'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#8B6C0C'
                        ]
                    }
                ]
            }
        })
    }
    render() {
        return (
            <div className="col-lg-6">
                <div className="b-dashboard-daily">
                    <div className="b-daily" style={{
                        minHeight: '500px'
                    }}>
                        <div className="b-heading">
                            <h2 className="b-text-title">
                                Quantity Chart
                                    </h2>
                            <p className="b-text-norm">
                                The total number is summed in the chart
                                    </p>
                        </div>
                        <div className="b-content">
                            <Doughnut data={this.state.data} options={{
                                title: {
                                    display: true,
                                    text: "Bản Đồ Hoạt Động ",
                                    fontSize: '25',
                                    fontColor: '#646c9a'
                                }
                            }} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default DailyComponent;