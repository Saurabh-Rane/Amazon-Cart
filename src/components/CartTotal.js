import React from 'react';
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal({ items }) {
	const getTotalPrice = () => {
		let total = 0;
		for (let item in items) {
			total = items[item].price * items[item].quantity + total;
		}
		return total;
	};

	const getCartItems = () => {
		let total = 0;
		items.forEach((item) => {
			total += parseInt(item.quantity);
		});
		return total;
	};

	return (
		<div className="CartTotal">
			<h3>
				Subtotal({getCartItems()} items):
				<span className="CartTotal-price">
					<NumberFormat
						value={getTotalPrice()}
						decimalScale={2}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'$'}
					/>
				</span>
			</h3>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default CartTotal;
