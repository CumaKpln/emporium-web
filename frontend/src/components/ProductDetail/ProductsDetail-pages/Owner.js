import React, { useState, useEffect } from "react";
import axios from "axios";

function Owner() {
  const token = localStorage.getItem("token");
  const [ownerData, setOwnerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mysql-emporium-deploy1.onrender.com/user/userInfo",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOwnerData(response.data.userinfo);
        console.log(response.data.userinfo.phoneNumber);

      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div
      className="mt-5"
      style={{
        maxHeight: "200px",
        minWidth: "250px",
        border: "1px solid gray",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      {ownerData ? (
        <>
          <h5>Kullanıcı Adı: {ownerData.username}</h5>
          <div
            className="mt-2"
            style={{
              backgroundColor: "lightGray",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <div>
              İş :{" "}
              <span className="float-center">
                {ownerData.phoneNumber}
              </span>
            </div>
            <hr />
            <div>
              Cep : {" "}
              <span className="float-center">
                {ownerData.phoneNumber}
              </span>
            </div>
      </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Owner;
