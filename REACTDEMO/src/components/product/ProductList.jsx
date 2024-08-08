import React, { useState, useEffect, useRef } from 'react';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';
import Loader from '../loader/Loader';
import {getListProduct} from'/src/services/ProductService'

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const tableRef = useRef(null); // Tham chiếu cho bảng sản phẩm

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListProduct();
      console.log(data);
      setProducts(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleAddClick = () => {
    setSelectedProduct({ id: '', name: '', invoices: false });
    setIsEditing(false);
    setIsModalVisible(true);
  };

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const handleDeleteClick = async (id) => {
    await deleteProduct(id);
    setProducts((prevProducts) => prevProducts.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <table
          ref={tableRef}
          className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden"
        >
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Tên Sản Phẩm</th>
              <th className="px-4 py-2 text-left">Tồn Kho</th>
              <th className="px-4 py-2 text-left">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <ProductItem
                key={item.id}
                product={item}
                onEdit={handleUpdateClick}
                onDelete={handleDeleteClick}
              />
            ))}
          </tbody>
        </table>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        onClick={handleAddClick}
      >
        Thêm Sản Phẩm
      </button>

      {isModalVisible && (
        <ProductModal
          product={selectedProduct}
          isEditing={isEditing}
          onClose={() => setIsModalVisible(false)}
          onSave={() => {
            getListProduct().then(setProducts);
            setIsModalVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default ProductList;
