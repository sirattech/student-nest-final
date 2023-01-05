const mongoose = require('mongoose');
let url = "mongodb+srv://M_Bilal:bilal456%21%40@cluster0.1bdssl1.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err));

