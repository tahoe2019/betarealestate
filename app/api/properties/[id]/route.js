import connectDb from "@/config/database";
import Property  from "@/models/Property";
// GET /api/properties
export const GET = async (request, { params }) => {
    try {

        await connectDb();
        
        const property = await Property.findById(params.id);

        if(!property) return new Response('Property not Found',{status:404});



        return new Response (JSON.stringify(property), {status: 200});

    }catch(error){
        return new Response('Something is wrong',{
            status: 500
        });
    }
}