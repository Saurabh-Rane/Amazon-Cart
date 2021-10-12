import React from 'react';
import './CartItems.css';
import CartItem from './CartItem';

function CartItems({ items, setCartItems }) {
	const changeItemQuantity = (e, index) => {
		const newItems = [ ...items ];
		newItems[index].quantity = e.target.value;
		setCartItems(newItems);
	};

	return (
		<div className="CartItems">
			<h1>Shopping Cart</h1>
			<hr />
			<div className="CartItems-items">
				{items.map((item, index) => (
					<CartItem index={index} item={item} key={index} changeItemQuantity={changeItemQuantity} />
				))}
			</div>
		</div>
	);
}

export default CartItems;
