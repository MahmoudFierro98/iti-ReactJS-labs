import { Component } from 'react';

export default class Task2 extends Component {

    constructor() {
        super();
        this.state = {
            imgNo: 1,
            slideInterval: 0,
            imgSrc: "./Images/1.jpg"
        }
    }

    getPervious = () => {
        if (this.state.imgNo <= 1)
            this.state.imgNo = 4;
        else
            this.state.imgNo--;
        this.setState({ imgNo: this.state.imgNo });
        this.setState({ imgSrc: `./Images/${this.state.imgNo}.jpg` })
    }

    getNext = () => {
        if (this.state.imgNo >= 4)
            this.state.imgNo = 1;
        else
            this.state.imgNo++;
        this.setState({ imgNo: this.state.imgNo });
        this.setState({ imgSrc: `./Images/${this.state.imgNo}.jpg` })
    }

    start = () => {
        this.state.slideInterval = setInterval(this.getNext, 1000);
    }

    stop = () => {
        clearInterval(this.state.slideInterval);
    }

    render() {
        return (
            <div align="center">
                <h1>Task 2</h1>
                <img src={this.state.imgSrc} width='20%' />
                <br />
                {this.state.imgNo}
                <br />
                <input
                    type="button"
                    value="<<Pervious"
                    onClick={this.getPervious}
                />
                <input
                    type="button"
                    value="Next>>"
                    onClick={this.getNext}
                />
                <input
                    type="button"
                    value="Slide"
                    onClick={this.start}
                />
                <input
                    type="button"
                    value="Stop"
                    onClick={this.stop}
                />
            </div>
        )
    }
}