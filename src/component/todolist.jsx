
import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [product, setProduct] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [isProductEdit, setIsProductEdit] = useState(null);

  const addProduct = () => {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue === '') {
      alert('Please Add Product')
    } else if (inputData && !toggleBtn) {
      setProduct(
        product.map((elem) => {
          if (elem.id === isProductEdit) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleBtn(true);
      setInputData("");
      setIsProductEdit(null);
    } else {
      const allInput = { id: new Date().getTime().toString(), name: inputData };
      setProduct([...product, allInput]);
      setInputData("");
    }
  };

  const deleteProduct = (index) => {
    const updatedProductList = product.filter((item) => {
      return index !== item.id;
    });
    setProduct(updatedProductList);
  };

  const removeAllList = () => {
    setProduct([]);
  };

  const updateProduct = (id) => {
    const editedItem = product.find((item) => {
      return id === item.id;
    });

    setInputData(editedItem.name);
    setToggleBtn(false);
    setIsProductEdit(id);
  };
  return (
    <>
      <div className="todoApp my-5 text-center">
        <i className="fa fa-file fa-2xl" aria-hidden="true"></i>
        <div className="card">
          <p className="title">Add Your Product List Here...</p>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Product"
              id="inputValue"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                {toggleBtn ? (
                  <i
                    className="fa-solid fa-plus"
                    title="Add Product"
                    onClick={addProduct}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-pen-to-square"
                    title="Update Product"
                    onClick={addProduct}
                  ></i>
                )}
              </button>
            </div>
          </div>

          <div className="showList">
            {product.map((item) => (
              <p className="productName" key={item.id}>
                {item.name}{" "}
                <i
                  className="fa-solid fa-pen-to-square edit-icon"
                  title="Update Product"
                  onClick={() => updateProduct(item.id)}
                ></i>
                <i
                  className="fa-solid fa-trash delete-icon"
                  title="Delete Product"
                  onClick={() => deleteProduct(item.id)}
                ></i>
              </p>
            ))}
          </div>

          <div className="text-center mt-3">
            <button
              className="btn remove-btn btn-primary"
              onClick={removeAllList}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;