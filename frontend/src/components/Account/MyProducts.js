import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "../../Styles/Account/AccountProductİnformation.css";
import data from "../../data/db.json";
import axios from "axios";

function myProducts() {
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mysql-emporium-deploy1.onrender.com/product/getUserProduct",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userProduct = response.data.mergedResult;

      console.log("Kullanıcı verileri başarıyla alındı :", response.data);
    } catch (error) {
      // Hata durumunda kullanıcıya bilgi verilebilir veya hata işlenebilir
      console.error("Kullanıcı  hatası:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
}

export default myProducts;
