var catalog=[
    {
        _id:"I1",
        title:"Air Force 1",
        price:90,
        stock:10,
        image:"IMG-1.jpg"

    },
    {
        _id:"I2",
        title:"Air Force 2",
        price:100.99,
        stock:10,
        image:"IMG-2.jpg"
    },
    {
        _id:"I3",
        title:"Air Force 3",
        price:60.22,
        stock:10,
        image:"IMG-3.jpg"

    },
    {
        _id:"I4",
        title:"Air Force 4",
        price:50.44,
        stock:10,
        image:"IMG-4.jpg"

    },{
        _id:"I5",
        title:"Air Force 5",
        price:40.10,
        stock:10,
        image:"IMG-5.jpg"

    }
];


class DataService{

    getCatalog(){
        //retrieve the data from the server 
        // var catalog = request();

        //mock the data
        return catalog;
    }

}

export default DataService;