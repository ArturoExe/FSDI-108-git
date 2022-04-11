import "./admin.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

function Admin() {
  const [prod, setProd] = useState({});
  const [coup, setCoup] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // HANDLE THE INPUTS
  const handleInputChange = (e) => {
    let copy = { ...prod };
    copy[e.target.name] = e.target.value;
    setProd(copy);
  };

  const handleCChange = (e) => {
    //We use the spread operator to create a copy of the last operator
    let coupon = { ...coup };
    coupon[e.target.name] = e.target.value;
    setCoup(coupon);
  };

  const saveNewProduct = () => {
    let service = new DataService();
    service.saveProduct(prod);

    //add the product to the list
    let copy = [...allProducts];
    copy.push(prod);
    setAllProducts(copy);
  };

  const saveCoupon = async () => {
    console.log(coup);
    let fixed = { ...coup };
    fixed.discount = parseInt(coup.discount);

    let service = new DataService();
    let resp = await service.saveCoupon(fixed);

    //add to the list of coupons
    let copy = [...allCoupons];
    copy.push(coup);
    setAllCoupons(copy);
  };

  const loadCoupons = async () => {
    let servie = new DataService();
    let all = await servie.getCoupons();
    setAllCoupons(all);
  };

  useEffect(() => {
    loadCoupons();
  }, []);

  return (
    <div className="admin">
      <h1>Store Administrator</h1>

      <div className="main-container">
        <div className="form">
          <h1>Add New Product</h1>
          <div className="formControl">
            <label>Title</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="title"
            ></input>
          </div>

          <div className="formControl">
            <label>Image</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="image"
            ></input>
          </div>

          <div className="formControl">
            <label>Category</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="category"
            ></input>
          </div>

          <div className="formControl">
            <label>Price</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="price"
            ></input>
          </div>

          <div className="fromControl">
            <button onClick={saveNewProduct}>Save product</button>
          </div>

          <div className="product-container">
            {allProducts.map((p, index) => (
              <div key={index}>
                <label>{p.title}</label>-<label>{p.text}</label>-
                <label>{p.image}</label>-<label>{p.category}</label>-
                <label>{p.price}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="secondary-container">
          <h1>Coupons</h1>
          <div className="form">
            <div className="formControl">
              <label>Discount</label>
              <input
                type="text"
                onChange={handleCChange}
                name="discount"
              ></input>
            </div>
            <div className="formControl">
              <label>Coupon Code</label>
              <input
                className="coupon"
                type="text"
                onChange={handleCChange}
                name="code"
              ></input>
            </div>
            <div className="formControl">
              <button onClick={saveCoupon}>Save Coupon</button>
            </div>
          </div>
          <div className="coupon-container">
            <h2>Active Coupons</h2>
            {allCoupons.map((c, index) => (
              <div key={index}>
                <label>{c.code}</label>-<label>{c.discount}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
