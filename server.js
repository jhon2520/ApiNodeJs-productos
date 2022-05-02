require("dotenv").config();
const app = require("./app");
const config = require("./config");
const {appConfig,dbConfig} = config;
const connectDb = require("./db/mongodb")

// console.log(dbConfig);


const initApp = (appConfig,dbConfig)=>{
    

    try{
        
        connectDb(dbConfig)
        app.listen(appConfig.port,()=>{
            console.log(`Listen on ${appConfig.port}`)
        })

    }catch(e){
        console.error(e);
        process.exit(0);
    }

}

initApp(appConfig,dbConfig);