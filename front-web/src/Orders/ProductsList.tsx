import './styles.css';
import ProductCard from './ProductCard';
import { Product } from './types';
import { checkInSelected } from './helpes';

type Props = {
   products: Product[];
   selectedProducts: Product[];
   onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectProduct }: Props) {
    return (
       <div className="orders-list-container">
          <div className="orders-list-items">
          {products.map(product => (
             <ProductCard 
             key={product.id} 
             product={product}
             onSelectProduct={onSelectProduct}
             isSelected={checkInSelected(selectedProducts, product)}
             />
          ))}
          </div>
       </div>
    )
}

export default ProductsList;