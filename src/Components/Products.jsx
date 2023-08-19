import React, { useState } from "react";
import "./styling.css";

let flag = false;
let idx = "";

const Products = () => {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState("Add");

  const [proName, setproName] = useState("");
  const [proQuan, setproQuan] = useState("");

  //func to add products
  let add = () => {
    if (flag) {
      let obj = {
        name: proName,
        qty: proQuan,
      };
      arr.splice(idx, 1, obj);
      setArr([...arr]);
    } else {
      if (proName === "" || proQuan === "") {
        alert("Please fill all the fields !");
      } else {
        let obj = {
          name: proName,
          qty: proQuan,
        };
        setArr([...arr, obj]);
      }
    }
    flag = false;
    setName("Add");
    setproName("");
    setproQuan("");
  };
  // func to edit products
  const edited = (event) => {
    let index = event.target.closest("tr").id;
    idx = index;
    flag = true;

    setproName(arr[index].name);
    setproQuan(arr[index].qty);
    setName("Update");
  };

  // func to delete products
  const deleted = (event) => {
    let index = event.target.closest("tr").id;
    arr.splice(index, 1);
    setArr([...arr]);
  };

  return (
    <center>
      <table class="table1">
        <tr>
          <td>Product Name</td>
          <td>
            {" "}
            <input
              id="name"
              type="text"
              value={proName}
              onChange={(e) => setproName(e.target.value)}
            />{" "}
          </td>
        </tr>

        <tr>
          <td>Product Quantity</td>
          <td>
            {" "}
            <input
              id="qty"
              type="number"
              min="0"
              value={proQuan}
              onChange={(e) => setproQuan(e.target.value)}
            />{" "}
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <button id="btn" type="submit" onClick={add}>
              {" "}
              {name} Product{" "}
            </button>{" "}
          </td>
        </tr>
      </table>

      <table id="done">
        <thead class="head">
          <td>Product Name</td>
          <td>Quantity</td>
          <td colSpan={2}>Actions</td>
        </thead>
        <tbody id="body">
          {arr.length != 0 &&
            arr.map((product, index) => {
              return (
                <tr id={index}>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td
                    style={{ color: "green", cursor: "pointer" }}
                    onClick={edited}
                  >
                    Edit
                  </td>
                  <td
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={deleted}
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </center>
  );
};

export default Products;
