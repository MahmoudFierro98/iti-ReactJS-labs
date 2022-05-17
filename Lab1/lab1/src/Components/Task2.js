import { Component } from 'react';
import "../index.css";

export default class Task2 extends Component {

    constructor() {
        super();
        this.state = {
            imgNo: 1,
            imgSrc: "./Images/1.jpg",
            slideInterval: 0,
            slideFlag: false,
        }
    }

    getPervious = () => {
        if (this.state.imgNo <= 1)
            this.state.imgNo = 1;
        else
            this.state.imgNo--;
        this.setState({ imgNo: this.state.imgNo });
        this.setState({ imgSrc: `./Images/${this.state.imgNo}.jpg` })
    }

    getNext = () => {
        if (this.state.imgNo >= 4) 
            if (this.state.slideFlag)
                this.state.imgNo = 1;
            else
                this.state.imgNo = 4;
        else
            this.state.imgNo++;
        this.setState({ imgNo: this.state.imgNo });
        this.setState({ imgSrc: `./Images/${this.state.imgNo}.jpg` })
    }

    start = () => {
        this.setState({ slideFlag: true });
        this.state.slideInterval = setInterval(this.getNext, 1000);
    }

    stop = () => {
        this.setState({ slideFlag: false });
        clearInterval(this.state.slideInterval);
    }

    render() {
        return (
            <div align="center">
                <h1>Task 2</h1>
                <img src={this.state.imgSrc} className="task2" />
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