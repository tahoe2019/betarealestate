import connectDb from "@/config/database";
import Property  from "@/models/Property";
// GET /api/properties
export const GET = async (request) => {
    try {

        await connectDb();
        
        const properties = await Property.find({

        });



        return new Response (JSON.stringify(properties), {status: 200});

    }catch(error){
        return new Response('Something is wrong',{
            status: 500
        });
    }
}