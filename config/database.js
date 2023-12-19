import mongoose from "mongoose";

mongoose.set('strictQuery', false)
mongoose.connect( process.env.MONGO)
    .then( () => console.log('DB Connected !!'))
    .catch( (error) => console.log(error))