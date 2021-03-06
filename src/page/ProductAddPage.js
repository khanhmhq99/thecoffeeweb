import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { addProductRequest } from '../store/actions/productActions'
import { connect } from 'react-redux'

class ProductAddPage extends Component {

    state = {
        productNm: '',
        description: '',
        price: '',
        categoryId: '',
        photo: '',
        photoForOrder: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        var product = {
            productNm: this.state.productNm,
            description: this.state.description,
            price: this.state.price,
            categoryId: this.state.categoryId,
            photo: this.state.photo,
            photoForOrder: this.state.photoForOrder
        }
        await this.props.onAddProduct(product);
        this.props.history.replace('/');
    }

    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create new Product</h5>
                    <div className="input-field">
                        <label htmlFor="productNm">Product Name</label>
                        <input type="text" id="productNm" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="price">Price</label>
                        <input type="number" step="any" id="price" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="categoryId">Category Id</label>
                        <input type="text" id="categoryId" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="photo">Photo (Link)</label>
                        <input type="text" id="photo" onChange={this.handleChange} />
                        <img src={this.state.photo} height='150px' />
                    </div>
                    <div className="input-field">
                        <label htmlFor="photoForOrder">Photo for Order (Link)</label>
                        <input type="text" id="photoForOrder" onChange={this.handleChange} />
                        <img src={this.state.photoForOrder} height='150px' />
                    </div>
                    <div className="input-field">
                        <Link to="/" className="waves-effect grey btn z-depth-0 mr-10">
                            Cancel
                        </Link>
                        <button className="btn waves-effect orange darken-4 z-depth-0">Create</button>
                        {/* <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div> */}
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(addProductRequest(product))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductAddPage)
