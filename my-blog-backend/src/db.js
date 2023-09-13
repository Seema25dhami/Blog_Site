
import { MongoClient } from 'mongodb';
let db;
async function connectToDb(cb){
    const client = new MongoClient(`mongodb+srv://node-server:9o8GroZu6zWHrQnA@cluster0.tqko0nh.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();


    db = client.db('react-blog-db');
    cb();

}
export {
    db,
    connectToDb,
};