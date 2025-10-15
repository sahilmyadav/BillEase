import {useContext, useState} from "react";
import {AppContext} from "../../context/AppContext.jsx";
import toast from "react-hot-toast";
import {addItem} from "../../Service/ItemService.js";

const ItemForm = () => {
    const {categories, setItemsData, itemsData, setCategories} = useContext(AppContext);
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        categoryId: "",
        price: "",
        description: "",
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({...data, [name]: value}));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("item", JSON.stringify(data));
        formData.append("file", image);
        try {
            if (!image) {
                toast.error("Select image");
                return;
            }

            const response = await addItem(formData);
            if (response.status === 201) {
                setItemsData([...itemsData, response.data]);
                setCategories((prevCategories) =>
                prevCategories.map((category) => category.categoryId === data.categoryId ? {...category, items: category.items + 1} : category));
                toast.success("Item added");
                setData({
                    name: "",
                    description: "",
                    price: "",
                    categoryId: "",
                })
                setImage(false);
            } else {
                toast.error("Unable to add item");
            }
        } catch (error) {
            console.error(error);
            toast.error("Unable to add item");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="item-form-container" style={{height:'100vh', overflowY: 'auto', overflowX: 'hidden', padding: '24px'}}>
            <div className="form-container-modern">
                <div className="form-header-modern">
                    <h3><i className="bi bi-box-seam"></i> Add New Item</h3>
                    <p>Fill in the details to add a new item to your inventory</p>
                </div>
                
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group-modern">
                        <label className="form-label-modern">
                            <i className="bi bi-image"></i>
                            Item Image
                            <span className="required">*</span>
                        </label>
                        <div className="file-upload-modern">
                            <label htmlFor="image" className="file-upload-label">
                                {image ? (
                                    <img src={URL.createObjectURL(image)} alt="Preview" />
                                ) : (
                                    <>
                                        <i className="bi bi-cloud-upload file-upload-icon"></i>
                                        <span className="file-upload-text">Click to upload image</span>
                                    </>
                                )}
                            </label>
                            <input 
                                type="file" 
                                name="image" 
                                id="image" 
                                hidden 
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])} 
                            />
                        </div>
                        <div className="form-help-text">
                            <i className="bi bi-info-circle"></i>
                            Recommended size: 800x800px, Max 2MB
                        </div>
                    </div>

                    <div className="form-grid-modern form-grid-2">
                        <div className="form-group-modern">
                            <label htmlFor="name" className="form-label-modern">
                                <i className="bi bi-tag"></i>
                                Item Name
                                <span className="required">*</span>
                            </label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                className="form-input-modern"
                                placeholder="e.g., Wireless Mouse"
                                onChange={onChangeHandler}
                                value={data.name}
                                required
                            />
                        </div>

                        <div className="form-group-modern">
                            <label htmlFor="price" className="form-label-modern">
                                <i className="bi bi-currency-rupee"></i>
                                Price
                                <span className="required">*</span>
                            </label>
                            <input 
                                type="number" 
                                name="price" 
                                id="price" 
                                className="form-input-modern" 
                                placeholder="₹ 0.00" 
                                onChange={onChangeHandler} 
                                value={data.price} 
                                min="0"
                                step="0.01"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group-modern">
                        <label htmlFor="category" className="form-label-modern">
                            <i className="bi bi-grid-3x3-gap"></i>
                            Category
                            <span className="required">*</span>
                        </label>
                        <select 
                            name="categoryId" 
                            id="category" 
                            className="form-select-modern" 
                            onChange={onChangeHandler} 
                            value={data.categoryId} 
                            required
                        >
                            <option value="">Select a category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.categoryId}>{category.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group-modern">
                        <label htmlFor="description" className="form-label-modern">
                            <i className="bi bi-card-text"></i>
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            className="form-textarea-modern"
                            placeholder="Provide a detailed description of the item..."
                            onChange={onChangeHandler}
                            value={data.description}
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="btn-modern btn-primary-modern btn-block-modern btn-lg-modern" 
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-modern"></span>
                                Saving Item...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-check-circle"></i>
                                Save Item
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ItemForm;