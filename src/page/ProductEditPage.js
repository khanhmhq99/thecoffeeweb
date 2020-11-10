import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getProductRequest, updateProductRequest } from '../store/actions/productActions'
import { connect } from 'react-redux'

class ProductEditPage extends Component {

    state = {
        productNm: '',
        description: '',
        price: '',
        categoryId: '',
        photo: '',
        photoForOrder: '',
        insDatetime: '',
        updDatetime: '',
        updBy: '',
        insBy: ''
    }
    componentDidMount() {
        var { match } = this.props
        this.props.getProduct(match.params.id)
        // console.log(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                productNm: itemEditing.productNm,
                description: itemEditing.description,
                price: itemEditing.price,
                categoryId: itemEditing.categoryId,
                photo: itemEditing.photo,
                photoForOrder: itemEditing.photoForOrder,
                insDatetime: itemEditing.insDatetime,
                updDatetime: itemEditing.updDatetime,
                updBy: itemEditing.updBy,
                insBy: itemEditing.insBy
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var product = {
            productId: this.props.match.params.id,
            productNm: this.state.productNm,
            description: this.state.description,
            price: this.state.price,
            categoryId: this.state.categoryId,
            photo: this.state.photo,
            photoForOrder: this.state.photoForOrder,
            insDatetime: this.state.insDatetime,
            updDatetime: this.state.updDatetime,
            updBy: this.state.updBy,
            insBy: this.state.insBy
        }
        this.props.updateProduct(product);
        this.props.history.goBack();

    }

    render() {
        // console.log(this.props)
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Update Product</h5>
                    <div className="input-field">
                        <h8>Product Id</h8>
                        <input type="text" name="" id="" readOnly value={this.props.match.params.id} />
                    </div>
                    <div className="input-field">
                        <h8>Product Name</h8>
                        <input type="text" id="productNm" onChange={this.handleChange} value={this.state.productNm} />
                    </div>
                    <div className="input-field">
                        <h8>Description</h8>
                        <input type="text" id="description" onChange={this.handleChange} value={this.state.description} />
                    </div>
                    <div className="input-field">
                        <h8>Price</h8>
                        <input type="number" step="any" id="price" onChange={this.handleChange} value={this.state.price} />
                    </div>
                    <div className="input-field">
                        <h8>Category Id</h8>
                        <input type="text" id="categoryId" onChange={this.handleChange} value={this.state.categoryId} />
                    </div>
                    <div className="input-field">
                        <h8>Photo (Link)</h8>
                        <input type="text" id="photo" onChange={this.handleChange} value={this.state.photo} />
                        <img src={this.state.photo} height='150px' />
                    </div>
                    <div className="input-field">
                        <h8>Photo for Order (Link)</h8>
                        <input type="text" id="photoForOrder" onChange={this.handleChange} value={this.state.photoForOrder} />
                        <img src={this.state.photoForOrder} height='150px' />
                    </div>
                    <div className="input-field">
                        <Link to="/" class="waves-effect grey btn z-depth-0 mr-10">
                            Cancel
                        </Link>
                        <button className="btn waves-effect orange darken-4 z-depth-0">Update</button>
                        {/* <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div> */}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        itemEditing: state.item
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProduct: (id) => {
            dispatch(getProductRequest(id))
        },
        updateProduct: (product) => {
            dispatch(updateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditPage)
