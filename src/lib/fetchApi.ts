export const fetchApi= async (endPoint:string) => {
 
  try {
    // https://fakestoreapi.com
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endPoint}`,{
        cache:"no-cache"
    });
    
    const data = await response.json();
   
    
    return data.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}