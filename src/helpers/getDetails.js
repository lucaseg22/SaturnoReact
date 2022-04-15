import db from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

const  getDetails = async () => {
    const itemCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(itemCollection)
    const productsList = productsSnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    } )
    return productsList
}

export default getDetails