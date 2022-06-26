// var DBServer = function(){
//     console.log('connection created')
// }

// var con1 = new DBServer()
// console.log(con1)
// var con1 = new DBServer()
// console.log(con1)
// var con1 = new DBServer()
// console.log(con1)
// var con1 = new DBServer()
// console.log(con1)

var DbConnection = (function(){
    var connection = null

    var createConnection = function(){
        var connectionObj = Object.create(null)
        console.log('Connection Object is created')
        return connectionObj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }
    return {
        getConnection: getConnection
    }
})()

var connection1 = DbConnection.getConnection()
console.log(connection1)

var connection2 = DbConnection.getConnection()
console.log(connection2)

var connection3 = DbConnection.getConnection()
console.log(connection3)

var connection4 = DbConnection.getConnection()
console.log(connection4)