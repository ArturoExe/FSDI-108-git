import axios from "axios";

var catalog = [
  {
    _id: "I1",
    title: "Air Force 1",
    price: 90,
    stock: 10,
    image: "IMG-1.jpg",
  },
  {
    _id: "I2",
    title: "Air Force 2",
    price: 100.99,
    stock: 10,
    image: "IMG-2.jpg",
  },
  {
    _id: "I3",
    title: "Air Force 3",
    price: 60.22,
    stock: 10,
    image: "IMG-3.jpg",
  },
  {
    _id: "I4",
    title: "Air Force 4",
    price: 50.44,
    stock: 10,
    image: "IMG-4.jpg",
  },
  {
    _id: "I5",
    title: "Air Force 5",
    price: 40.1,
    stock: 10,
    image: "IMG-5.jpg",
  },
];

class DataService {
  async getCatalog() {
    //retrieve the data from the server
    // var catalog = request();
    //mock the data

    //Return all products from DB
    //We used axios to call the backend
    let resp = await axios.get("http://127.0.0.1:5000/api/products");
    return resp.data;
    //return catalog;
  }

  async getCoupons() {
    //Return all coupons from DB
    //We used axios to call the backend
    let resp = await axios.get("http://127.0.0.1:5000/api/allcoupons");
    return resp.data;
  }

  saveProduct(prod) {
    console.log("Sending product to the server...(not really)", prod);
  }

  async saveCoupon(coup) {
    let resp = await axios.post("http://127.0.0.1:5000/api/allcoupons", coup);
    console.log("Sending product to the server...(coupon)", coup);
  }
}

export default DataService;
