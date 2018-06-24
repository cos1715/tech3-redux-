import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Modal extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            available: 0
        };
    }

    addProduct = (event) => {
        let obj = this.state;
        this.props.products.push(obj);
        this.props.onClose();
    }


    handleChangeOnName = (event) => {
        this.setState({ name: event.target.value });
    }

    handleChangeOnPrice = (event) => {
        this.setState({ price: parseInt(event.target.value) });
    }

    handleChange = (event) => {
        this.setState({ available: parseInt(event.target.value) });
    }

    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 200,
            minHeight: 200,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    {this.props.children}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="Name of phone" onChange={this.handleChangeOnName} />
                        <br />
                        <input type="number" name="price" placeholder="Price of phone" onChange={this.handleChangeOnPrice} />
                        <br />
                        <input type="number" name="available" placeholder="Available in store" onChange={this.handleChange} />
                        <br />
                    </form>
                    <div className="footer">
                        <button onClick={this.addProduct}>Add</button>
                        <button onClick={this.props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Modal);