// const {Pool, Client} = require('pg');
// const helpers = require('./helpers');

// const deliveryData = require('./data/delivery.json');
// const detailData = require('./data/detail.json');
// const suplierData = require("./data/suplier.json");

// const suplierFilter = () => {
//     let data = [];
//     let removedList = [];
//     let count = 0;
//     suplierData.forEach(item=>{
//         if (!item.SName || !item.SCity) {
//             removedList.push(item);
//             return;
//         }
//         if(item.Risk > 3 && item.Risk < 1){
//             removedList.push(item);
//             return;
//         }
//         data.push(item);
//         count++;
//     });
//     helpers.writeToFile("suplierFilter.json", data);
//     console.log("Count: " + count);
    
// }

// suplierFilter();


// // console.log(suplierData);
