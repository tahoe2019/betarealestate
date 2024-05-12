const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN ;


//fecht all properties
async function fetchproperties(){

    try {

      //handle the case where the domain is not availbale yet
      
      if(!apiDomain){
        return [];
      }
      someth
  
      const res = await fetch(`${apiDomain}/properties`);
  
      if(!res.ok){
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    }catch (error){
  
      console.log(error);
      return [];
      
    }
  }

  //fetch single 

  async function fetchProperty(id){

    try {

      //handle the case where the domain is not availbale yet
      
      if(!apiDomain){
        return null;
      }
      
  
      const res = await fetch(`${apiDomain}/properties/${id}`);
  
      if(!res.ok){
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    }catch (error){
  
      console.log(error);
      return null;
      
    }
  }

  export {fetchproperties,fetchProperty};

