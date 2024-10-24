import React, { useState, useEffect } from 'react';
import axios from '../utils/api'; // Assuming you have an axios instance set up

const AdminDash = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });
    const [editingProduct, setEditingProduct] = useState(null);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        // Fetch all products when the component mounts
        axios.get('/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        // Simple validation
        if (!newProduct.name || !newProduct.price || !newProduct.stock) {
            setFormError('All fields are required.');
            return;
        }

        // Add product API call
        axios.post('/products', newProduct)
            .then(response => {
                setProducts([...products, response.data]);
                setNewProduct({ name: '', price: '', stock: '' }); // Reset the form
                setFormError('');
            })
            .catch(error => console.error('Error adding product:', error));
    };

    const handleDeleteProduct = (id) => {
        axios.delete(`/products/${id}`)
            .then(() => setProducts(products.filter(product => product._id !== id)))
            .catch(error => console.error('Error deleting product:', error));
    };

    const handleUpdateProduct = (id) => {
        axios.put(`/products/${id}`, editingProduct)
            .then(response => {
                setProducts(products.map(product => (product._id === id ? response.data : product)));
                setEditingProduct(null);
            })
            .catch(error => console.error('Error updating product:', error));
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
    };

    return (
        <div>
            <h1>Admin Dashboard - Manage Products</h1>
            <div>
                <h2>Add New Product</h2>
                {formError && <p style={{ color: 'red' }}>{formError}</p>}
                <form onSubmit={handleAddProduct}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="stock"
                        placeholder="Stock Quantity"
                        value={newProduct.stock}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Product</button>
                </form>
            </div>

            <div>
                <h2>Product List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{editingProduct && editingProduct._id === product._id ? (
                                    <input
                                        type="text"
                                        value={editingProduct.name}
                                        onChange={(e) =>
                                            setEditingProduct({ ...editingProduct, name: e.target.value })
                                        }
                                    />
                                ) : (
                                    product.name
                                )}
                                </td>
                                <td>{editingProduct && editingProduct._id === product._id ? (
                                    <input
                                        type="number"
                                        value={editingProduct.price}
                                        onChange={(e) =>
                                            setEditingProduct({ ...editingProduct, price: e.target.value })
                                        }
                                    />
                                ) : (
                                    product.price
                                )}
                                </td>
                                <td>{editingProduct && editingProduct._id === product._id ? (
                                    <input
                                        type="number"
                                        value={editingProduct.stock}
                                        onChange={(e) =>
                                            setEditingProduct({ ...editingProduct, stock: e.target.value })
                                        }
                                    />
                                ) : (
                                    product.stock
                                )}
                                </td>
                                <td>
                                    {editingProduct && editingProduct._id === product._id ? (
                                        <>
                                            <button onClick={() => handleUpdateProduct(product._id)}>
                                                Save
                                            </button>
                                            <button onClick={() => setEditingProduct(null)}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEditProduct(product)}>Edit</button>
                                            <button onClick={() => handleDeleteProduct(product._id)}>
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDash;
