import './CartItems.css';
import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";

const CartItems = () => {
    const {cartItems, removeFromCart, updateQuantity} = useContext(AppContext);
    return (
        <div className="p-3 h-100" style={{overflowY: 'auto', position: 'relative'}}>
            {cartItems.length === 0 ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '200px',
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    <i className="bi bi-cart-x" style={{
                        fontSize: '3rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '16px',
                        opacity: 0.5
                    }}></i>
                    <p className="text-light" style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        margin: 0
                    }}>
                        Your cart is empty
                    </p>
                    <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        marginTop: '8px',
                        opacity: 0.7
                    }}>
                        Add items from the menu to get started
                    </p>
                </div>
            ) : (
                <div className="cart-items-list">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item mb-3 p-3" style={{
                            background: 'rgba(99, 102, 241, 0.05)',
                            border: '1px solid rgba(99, 102, 241, 0.1)',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease'
                        }}>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="mb-0 text-light" style={{fontWeight: 600}}>{item.name}</h6>
                                <p className="mb-0 text-light" style={{fontWeight: 600, color: 'var(--success)'}}>
                                    ₹{(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-2">
                                    <button 
                                        className="btn btn-sm"
                                        style={{
                                            background: 'var(--danger)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '6px 10px'
                                        }}
                                        onClick={() => updateQuantity(item.itemId, item.quantity - 1)}
                                        disabled={item.quantity === 1}
                                    >
                                        <i className="bi bi-dash"></i>
                                    </button>
                                    <span className="text-light" style={{
                                        minWidth: '30px',
                                        textAlign: 'center',
                                        fontWeight: 600,
                                        fontSize: '1rem'
                                    }}>{item.quantity}</span>
                                    <button 
                                        className="btn btn-sm"
                                        style={{
                                            background: 'var(--primary)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '6px 10px'
                                        }}
                                        onClick={() => updateQuantity(item.itemId, item.quantity + 1)}
                                    >
                                        <i className="bi bi-plus"></i>
                                    </button>
                                </div>
                                <button 
                                    className="btn btn-sm"
                                    style={{
                                        background: 'var(--danger)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '6px 10px'
                                    }}
                                    onClick={() => removeFromCart(item.itemId)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CartItems;