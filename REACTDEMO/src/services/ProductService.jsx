const url = 'https://66b41ade9f9169621ea1c6f2.mockapi.io/crud/ap1/sanpham';

export const getListProduct = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addProduct = async (product) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(error);
  }
};
