import './CustomerForm.css';

const CustomerForm = ({customerName, mobileNumber, setMobileNumber, setCustomerName}) => {
    return (
        <div style={{padding: '16px'}}>
            <div className="form-group-modern" style={{marginBottom: '12px'}}>
                <label htmlFor="customerName" className="form-label-modern" style={{marginBottom: '6px', fontSize: '0.875rem'}}>
                    <i className="bi bi-person" style={{fontSize: '1rem'}}></i>
                    Customer Name
                </label>
                <input 
                    type="text" 
                    className="form-input-modern" 
                    id="customerName" 
                    placeholder="Enter customer name"
                    onChange={(e) => setCustomerName(e.target.value)} 
                    value={customerName}
                    style={{padding: '10px 12px', fontSize: '0.9rem'}}
                    required 
                />
            </div>
            <div className="form-group-modern" style={{marginBottom: '0'}}>
                <label htmlFor="mobileNumber" className="form-label-modern" style={{marginBottom: '6px', fontSize: '0.875rem'}}>
                    <i className="bi bi-phone" style={{fontSize: '1rem'}}></i>
                    Mobile Number
                </label>
                <input 
                    type="tel" 
                    className="form-input-modern" 
                    id="mobileNumber" 
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    onChange={(e) => setMobileNumber(e.target.value)} 
                    value={mobileNumber}
                    style={{padding: '10px 12px', fontSize: '0.9rem'}}
                    required 
                />
            </div>
        </div>
    )
}

export default CustomerForm;
