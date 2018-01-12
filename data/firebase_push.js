var firebase = require("firebase");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJKvhuv1aLwLu2dfeLxzGlPnkvaV1koAk",
    authDomain: "socialspend-191815.firebaseapp.com",
    databaseURL: "https://socialspend-191815.firebaseio.com",
    projectId: "socialspend-191815",
    storageBucket: "socialspend-191815.appspot.com",
    messagingSenderId: "327321627172"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeUserData(id, transactions) {
    firebase.database().ref('users/' + id).set(transactions);
}

// returns a Promise
function readUserData(){
    return firebase.database().ref('/users').once('value').then(function(snapshot) {
        var transactions = snapshot.val();
        return transactions
    });
}
//readUserData().then(function(results){console.log(results[0]['transactions'][0]['store'])})

function updateUserData(id, newTransactions){
    let update = {}
    update['/users/' + id] = newTransactions
    firebase.database().ref().update(update);
}

function deleteUserData(id){
    let update = {}
    update['/users/' + id] = null
    firebase.database().ref().update(update);
}

function addNewTransaction(id, attr, newTransaction){
    readUserData(id).then(function(results){
        console.log(results)
        results[attr] = newTransaction
        updateUserData(id, results)
    })
}

// Function to find the amount of people who have recently been somewhere
module.exports.findPeople =
function findPeople(place){
    var result = 0
    readUserData().then(function(results){
    var num_people = results.length
    for (var i = 0; i < num_people; i++){
    var num_transactions = results[i]['transactions'].length
        for (var j = 0; j < num_transactions; j++) {
            if (results[i]['transactions'][j]['store'] == place) {
                result++
            }
        }
    }
    console.log(result)
    //console.log(results[0]['transactions'][0]['store'])
    })
    return result
}
//findPeople("Cava Mezze Clarendon")
/*
writeUserData('1839402344', {
    "Starbucks":{
        "2017-29-09-08:15": 12,
        "2018-19-01-12:34": 86
    },
    "Panera": {
        "2017-29-09-08:15": 13,
        "2018-19-01-12:34": 67
    }
})

updateUserData('1839402344', {
    "Giant":{
        "2017-29-09-08:15": 42,
        "2018-19-01-12:34": 23
    },
    "Pharmacy": {
        "2017-29-09-08:15": 4,
        "2018-19-01-12:34": 61
    }
})

readUserData('1839402344').then(function(results){
    console.log(results)
})

addNewTransaction('1839402344', 'Sotre', {
    "2017-29-09-08:15": 4,
    "2018-19-01-12:34": 61
})
*/
const dummy_data = require('./dummy_data.js').dummy_data
// writeUserData('Kyle Lim', dummy_data['Kyle Lim'])
// writeUserData('Amy Zhao', dummy_data['Amy Zhao'])
// writeUserData('Max Newman', dummy_data['Max Newman'])
// writeUserData('Omkar Konaraddi', dummy_data['Omkar Konaraddi'])
// writeUserData('Melida Lehman', dummy_data['Melida Lehman'])