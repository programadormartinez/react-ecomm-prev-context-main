import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const test = useContext(CartContext);
    console.log(test.cartList.length);
    return (
        <Badge badgeContent={test.cartList.length} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;