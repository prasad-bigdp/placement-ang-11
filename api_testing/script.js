fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data)=>console.log(data))
    .catch((err) => console.log("error" + err))
async function fun ()
{
    const res = await fetch("https://fakestoreapi.com/products")
   const data= await res.json()
}