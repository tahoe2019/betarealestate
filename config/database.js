import mongoose from 'mongoose';



let connected = false;



const connectDb = async () => {

    mongoose.set('strictQuery', true);




    //if the dabase is already connect, don;t connect again

    if(connected){

        console.log('mogose is already connected...');
        return;
    }

    try{

        await mongoose.connect(process.env.MONGODB_DB);
        connected = true;
        console.log('MongoDb connected');
    }catch(error){

        console.log(error);

    }





}

export default  (connectDb);