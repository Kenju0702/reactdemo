import React, { useState, useEffect, useRef } from 'react';
import './product.css'; // Giữ nguyên hoặc bỏ qua nếu bạn dùng Tailwind CSS

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [DSSP, setDSSP] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const tableRef = useRef(null); // Tham chiếu cho bảng sản phẩm
  const url = 'https://66b41ade9f9169621ea1c6f2.mockapi.io/crud/ap1/sanpham';
  const getListProduct = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setDSSP(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListProduct();
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
    try {
      await fetch(url+`/${id}`, {
        method: 'DELETE',
      });
      getListProduct();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const tableElement = tableRef.current;
    const scrollTop = tableElement ? tableElement.scrollTop : 0; // Ghi nhớ vị trí cuộn

    if (isEditing) {
      // Cập nhật sản phẩm
      try {
        await fetch(url+`/${selectedProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(selectedProduct),
        });
        getListProduct(); // Lấy lại danh sách sau khi cập nhật
      } catch (error) {
        console.error(error);
      }
    } else {
      // Thêm sản phẩm
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(selectedProduct),
        });

        const newProduct = await response.json();
        setDSSP(prevDSSP => [newProduct, ...prevDSSP]); // Thêm sản phẩm mới vào đầu danh sách
      } catch (error) {
        console.error(error);
      }
    }

    setIsModalVisible(false);
    setTimeout(() => {
      if (tableElement) {
        tableElement.scrollTop = scrollTop; // Khôi phục vị trí cuộn
      }
    }, 0);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table ref={tableRef} className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white ">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Tên Sản Phẩm</th>
              <th className="px-4 py-2">Tồn Kho</th>
              <th className="px-4 py-2">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {DSSP.map(item => (
              <tr key={item.id} className="border-b min-w-full px-40">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.invoices ? 'Có' : 'Không'}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    onClick={() => handleUpdateClick(item)}
                  >
                    Cập Nhật
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600"
                    onClick={() => handleDeleteClick(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
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
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">{isEditing ? 'Cập Nhật Sản Phẩm' : 'Thêm Sản Phẩm'}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">ID:</label>
                <input
                  type="text"
                  value={selectedProduct.id}
                  readOnly={isEditing}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Tên Sản Phẩm:</label>
                <input
                  type="text"
                  value={selectedProduct.name}
                  onChange={(e) => setSelectedProduct({...selectedProduct, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Tồn Kho:</label>
                <select
                  value={selectedProduct.invoices ? 'Có' : 'Không'}
                  onChange={(e) => setSelectedProduct({...selectedProduct, invoices: e.target.value === 'Có'})}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Có">Có</option>
                  <option value="Không">Không</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {isEditing ? 'Cập Nhật' : 'Thêm'}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => handleDeleteClick(selectedProduct.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
