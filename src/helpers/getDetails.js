import { productsDb } from "./productsDb"; 
 
 const  getDetails = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            return (resolve(productsDb))
        },2000);
    })  
}

export default getDetails