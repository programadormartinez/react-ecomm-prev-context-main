import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, ButtonContainer, ProductTotals } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);
    console.log(test);
    return (
        <WrapperCart>
            <TitleCart>Tu carrito de compras</TitleCart>
            <ContentCart>
                {
                    test.cartList.map(item => (
                        <Product key={item.id}>
                            <ProductDetail>
                                <ImageCart src={item.image} />
                                <Details>
                                    <span>
                                        <b>Producto:</b> {item.name}
                                    </span>
                                    <ButtonContainer onClick={() => test.deletedProduct(item.id)} className="">Eliminar producto
                                    </ButtonContainer>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount> {item.qty} items / $ {item.cost} each</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {item.costProduct}</ProductPrice>
                            </PriceDetail>
                    </Product>
                    ))
                }
                
            </ContentCart>
            {
                    test.cartList.length ?
                        <ProductTotals>
                            <h1>Productos totales</h1>
                            <h3>$ {test.costTotal}</h3>
                        </ProductTotals>
                    : <h1>No hay productos</h1>
                }
        </WrapperCart>
    );
}

export default Cart;