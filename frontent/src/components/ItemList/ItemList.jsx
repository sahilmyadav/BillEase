import {useContext, useState} from "react";
import {AppContext} from "../../context/AppContext.jsx";
import {deleteItem} from "../../Service/ItemService.js";
import toast from "react-hot-toast";
import './ItemList.css';

const ItemList = () => {
    const {itemsData, setItemsData} = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = itemsData.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    const removeItem = async (itemId) => {
        try {
            const response = await deleteItem(itemId);
            if (response.status === 204) {
                const updatedItems = itemsData.filter(item => item.itemId !== itemId);
                setItemsData(updatedItems);
                toast.success("Item deleted");
            } else {
                toast.error("Unable to delete item");
            }
        }catch(err) {
            console.error(err);
            toast.error("Unable to delete item");
        }
    }

    return (
        <div className="category-list-container" style={{height:'100vh', overflowY: 'auto', overflowX: 'hidden', padding: '24px'}}>
            <div className="mb-4">
                <div className="input-group" style={{
                    background: 'var(--bg-card)',
                    border: '2px solid var(--border)',
                    borderRadius: '12px',
                    overflow: 'hidden'
                }}>
                    <span className="input-group-text" style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)'
                    }}>
                        <i className="bi bi-search"></i>
                    </span>
                    <input 
                        type="text"
                        name="keyword"
                        id="keyword"
                        placeholder="Search items by name..."
                        className="form-input-modern"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            padding: '12px'
                        }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                </div>
            </div>
            
            <div className="row g-4">
                {filteredItems.length === 0 ? (
                    <div className="col-12">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '60px 20px',
                            textAlign: 'center'
                        }}>
                            <i className="bi bi-inbox" style={{
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
                                No items found
                            </p>
                        </div>
                    </div>
                ) : (
                    filteredItems.map((item, index) => (
                        <div className="col-lg-6 col-md-12" key={index}>
                            <div className="card-modern" style={{
                                padding: '24px',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}>
                                <div className="d-flex align-items-start gap-4">
                                    {/* Item Image */}
                                    <div style={{flexShrink: 0}}>
                                        <div style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            border: '3px solid rgba(99, 102, 241, 0.2)',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                        }}>
                                            <img 
                                                src={item.imgUrl} 
                                                alt={item.name} 
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Item Details */}
                                    <div className="flex-grow-1" style={{minWidth: 0}}>
                                        {/* Item Name */}
                                        <h5 className="text-light" style={{
                                            marginBottom: '12px',
                                            fontWeight: 600,
                                            fontSize: '1.125rem',
                                            color: 'var(--text-primary)'
                                        }}>
                                            {item.name}
                                        </h5>
                                        
                                        {/* Category */}
                                        <div style={{marginBottom: '12px'}}>
                                            <span style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                padding: '6px 12px',
                                                background: 'rgba(99, 102, 241, 0.1)',
                                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                                borderRadius: '8px',
                                                fontSize: '0.875rem',
                                                color: 'var(--primary)',
                                                fontWeight: 500
                                            }}>
                                                <i className="bi bi-tag"></i>
                                                {item.categoryName}
                                            </span>
                                        </div>
                                        
                                        {/* Description (if available) */}
                                        {item.description && (
                                            <p style={{
                                                marginBottom: '12px',
                                                fontSize: '0.9rem',
                                                color: 'var(--text-secondary)',
                                                lineHeight: '1.5'
                                            }}>
                                                {item.description}
                                            </p>
                                        )}
                                        
                                        {/* Price */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            marginTop: '16px'
                                        }}>
                                            <span style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 700,
                                                color: 'var(--success)',
                                                letterSpacing: '-0.5px'
                                            }}>
                                                ₹{item.price}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Delete Button */}
                                    <div style={{flexShrink: 0}}>
                                        <button 
                                            className="btn-modern btn-danger-modern"
                                            style={{
                                                padding: '10px 16px',
                                                borderRadius: '10px'
                                            }}
                                            onClick={() => removeItem(item.itemId)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ItemList;