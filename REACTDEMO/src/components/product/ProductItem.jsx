import React from 'react';
import PropTypes from 'prop-types';
import Button from '../buttom/Buttom';

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2">{product.id}</td>
      <td className="px-4 py-2">{product.name}</td>
      <td className="px-4 py-2">{product.invoices ? 'Có' : 'Không'}</td>
      <td className="px-4 py-2 flex space-x-2">
        <Button
          className="bg-yellow-500 hover:bg-yellow-600"
          onClick={() => onEdit(product)}
        >
          Cập Nhật
        </Button>
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={() => onDelete(product.id)}
        >
          Xóa
        </Button>
      </td>
    </tr>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductItem;
