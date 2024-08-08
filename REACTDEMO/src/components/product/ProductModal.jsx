import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addProduct, updateProduct } from '../../services/ProductService';

const ProductModal = ({ product, isEditing, onClose, onSave }) => {
  const [formData, setFormData] = useState(product);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateProduct(formData.id, formData);
    } else {
      await addProduct(formData);
    }
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? 'Cập Nhật Sản Phẩm' : 'Thêm Sản Phẩm'}
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">ID:</label>
            <input
              type="text"
              value={formData.id}
              readOnly={isEditing}
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) =>
                setFormData({ ...formData, id: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tên Sản Phẩm:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tồn Kho:</label>
            <select
              value={formData.invoices}
              onChange={(e) =>
                setFormData({ ...formData, invoices: e.target.value === 'true' })
              }
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value={true}>Có</option>
              <option value={false}>Không</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isEditing ? 'Cập Nhật' : 'Thêm'}
          </button>
        </form>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProductModal;
