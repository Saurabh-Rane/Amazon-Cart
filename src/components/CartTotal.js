import React from 'react';
import './CartTotal.css';

function CartTotal({ items }) {
	const getTotalPrice = () => {
		let total = 0;
		for (let item in items) {
			total = items[item].price * items[item].quantity + total;
		}
		return total;
	};

	return (
		<div className="CartTotal">
			<h3>
				Subtotal({items.length} items):
				<span className="CartTotal-price">${getTotalPrice()}</span>
			</h3>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default CartTotal;
