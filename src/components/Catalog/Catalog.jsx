import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../CardList/CardList';
import Categories from '../Categories/Categories';
import Preloader from '../Preloader/Preloader';
import { request } from '../../redux/catalog/catalogSlice';
import { changeGS } from '../../redux/globalSettings/globalSettingsSlice';

export default function Catalog({ text, showSearchField }) {
  const {
    items,
    loading,
    error,
    recieveOffset,
    recievedCount,
    itemsOffset,
  } = useSelector((state) => state.catalog);
  const categories = useSelector((state) => state.categories);
  const { searchString } = useSelector((state) => state.globalSettings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request({
      q: searchString.trim(),
    }));
    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (categoryId) => {
    dispatch(request({
      categoryId,
      q: searchString.trim(),
    }));
  };

  const handleLoadMore = () => {
    const category = categories.find((o) => o.selected);
    dispatch(request({
      categoryId: category ? category.id : null,
      offset: items.length,
      q: searchString.trim(),
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const category = categories.find((o) => o.selected);
    dispatch(request({
      categoryId: category ? category.id : null,
      q: searchString.trim(),
    }));
  };

  const handleChange = (evt) => {
    dispatch(changeGS({ searchString: evt.target.value }));
  };

  return (
    <section className="catalog">
      { text && <h2 className="text-center">{text}</h2> }
      {(showSearchField) && (
        <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
          <input className="form-control" placeholder="Поиск" value={searchString} onChange={handleChange} />
        </form>
      )}
      <Categories onClick={handleClick} />
      <CardList items={items} />
      {(loading || error) && <Preloader />}
      {((!loading && !error) && (items.length === 0)) && (<h2 className="text-center">Ничего не найдено! =(</h2>) }
      {(!loading && !error) && (recievedCount === recieveOffset) && (itemsOffset === true) && (
        <div className="text-center">
          <button type="button" className="btn btn-outline-primary" onClick={handleLoadMore}>Загрузить ещё</button>
        </div>
      )}
    </section>
  );
}

Catalog.defaultProps = {
  text: 'Каталог',
  showSearchField: true,
};

Catalog.propTypes = {
  text: PropTypes.string,
  showSearchField: PropTypes.bool,
};
