import {useContext, useState} from "react";
import toast from "react-hot-toast";
import {addCategory} from "../../Service/CategoryService.js";
import {AppContext} from "../../context/AppContext.jsx";

const CategoryForm = () => {
    const {setCategories, categories} = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        name: "",
        description: "",
        bgColor: "#2c2c2c",
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({...data, [name]: value}));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Select image for category");
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append("category", JSON.stringify(data));
        formData.append("file", image);
        try {
            const response = await addCategory(formData);
            if (response.status === 201) {
                setCategories([...categories, response.data]);
                toast.success("Category added");
                setData({
                    name: "",
                    description: "",
                    bgColor: "#2c2c2c",
                });
                setImage(false);
            }
        }catch(err) {
            console.error(err);
            toast.error("Error adding category");
        }finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-2 mt-2">
            <div className="form-container-modern">
                <div className="form-header-modern">
                    <h3><i className="bi bi-grid-3x3-gap"></i> Add New Category</h3>
                    <p>Create a new category to organize your items</p>
                </div>
                
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group-modern">
                        <label className="form-label-modern">
                            <i className="bi bi-image"></i>
                            Category Image
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
                            Recommended size: 600x600px
                        </div>
                    </div>

                    <div className="form-group-modern">
                        <label htmlFor="name" className="form-label-modern">
                            <i className="bi bi-tag"></i>
                            Category Name
                            <span className="required">*</span>
                        </label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            className="form-input-modern"
                            placeholder="e.g., Electronics, Clothing"
                            onChange={onChangeHandler}
                            value={data.name}
                            required
                        />
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
                            placeholder="Describe this category..."
                            onChange={onChangeHandler}
                            value={data.description}
                        ></textarea>
                    </div>

                    <div className="form-group-modern">
                        <label htmlFor="bgcolor" className="form-label-modern">
                            <i className="bi bi-palette"></i>
                            Background Color
                        </label>
                        <input 
                            type="color"
                            name="bgColor"
                            id="bgcolor"
                            className="form-color-input-modern"
                            onChange={onChangeHandler}
                            value={data.bgColor}
                        />
                        <div className="form-help-text">
                            <i className="bi bi-info-circle"></i>
                            This color will be used as the category background
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="btn-modern btn-success-modern btn-block-modern btn-lg-modern"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-modern"></span>
                                Creating Category...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-check-circle"></i>
                                Create Category
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CategoryForm;