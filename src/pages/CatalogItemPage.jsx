import React from 'react';
import { useParams } from 'react-router-dom'

// import PropTypes from 'prop-types';
import CatalogItem from '../components/CatalogItem/CatalogItem';

export default function CatalogItemPage() {
  const { id } = useParams()

  return <CatalogItem id={id} />;
}
