

var instanceId ="thor";
var devConnectionString = ()=> { return 'mongodb://localhost:27017/'+instanceId };
var prodConnectionString = ()=> { return 'mongodb+srv://mukul:pv3018tu@cluster0-349un.mongodb.net/'+instanceId+'?retryWrites=true'};
var isProduction = ()=> { return process.env.NODE_ENV === 'production'; }
module.exports = { 
    instanceId:instanceId,
    isProduction : isProduction(),
    connectionString: () => { return  isProduction() ? prodConnectionString() :  devConnectionString()  }
} 