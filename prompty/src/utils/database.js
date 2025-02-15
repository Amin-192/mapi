import mongoose from 'mongoose';
let isConnected = false;


export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('mongodb is connected')
    } try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:'Prompty',
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
        })
        isConnected = true;
        console.log('mongodb is connected')
    } catch (error){
        console.log(error);
    }
}

export default connectToDb;