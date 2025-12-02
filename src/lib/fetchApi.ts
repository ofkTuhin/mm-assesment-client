export const fetchApi= async (endPoint:string) => {
  console.log({endPoint})
  try {
    // https://fakestoreapi.com
    const response = await fetch(`http://localhost:5001/api/v1/${endPoint}`,{
        cache:"no-cache"
    });
    
    const data = await response.json();
   
    
    return data.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}