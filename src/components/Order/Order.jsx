import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { clear } from '../../redux/cart/cartSlice';
import { reset, setAddress, setPhone, submitRequest } from '../../redux/order/orderSlice';

export default function Order() {
  const {
    loading,
    error,
    success,
    phone,
    address,
  } = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);

  const [agreementChecked, changeArgeementChecked] = useState(false);

  const dispatch = useDispatch();

  const handleArgeementClick = (evt) => changeArgeementChecked(evt.target.checked);
  const handlePhoneChange = (evt) => dispatch(setPhone(evt.target.value));
  const handleAddressChange = (evt) => dispatch(setAddress(evt.target.value));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitRequest({
      owner: {
        phone,
        address,
      },
      items: cart.map((o) => ({
        id: o.item.id,
        price: o.item.price,
        count: o.quantity,
      })),
    }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => (() => dispatch(reset())), []); 

  useEffect(() => {
    if (success) dispatch(clear());
    return () => {};
  }, [dispatch, success]);

  return (
    <>
      {loading && <Preloader />}
      {(!loading && !error && success) && (
        <h3 className="text-center">Заказ оформлен!</h3>
      )}
      {(!loading && !error && !success && cart.length > 0) && (
        <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  className="form-control"
                  id="phone"
                  placeholder="Ваш телефон"
                  onChange={handlePhoneChange}
                  value={phone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  className="form-control"
                  id="address"
                  placeholder="Адрес доставки"
                  onChange={handleAddressChange}
                  value={address}
                />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="agreement" onChange={handleArgeementClick} />
                <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-secondary"
                disabled={!agreementChecked}
              >
                Оформить
              </button>
            </form>
          </div>
        </section>
      )}
      {error && <h3 className="text-center">{`Ошибка: ${error.message}`}</h3>}
    </>
  );
}
