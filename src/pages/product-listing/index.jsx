import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getProductListingRequest } from "../../../store/reducers/productListingReducer";
import { Table, Spin } from "antd";

export default function ProductListingPage(props) {
  const dispatch = useDispatch();
  const { productListing, loading } = useSelector(
    (state) => state.productListing
  );

  const [productListingLocal, setProductListingLocal] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [loadingLocal, setLoadingLocal] = useState(false);

  useEffect(() => {
    if (productListing) {
      setProductListingLocal(productListing);
    }
  }, [productListing]);

  useEffect(() => {
    if (loading) {
      setLoadingLocal(loading);
    }
  }, [loading]);

  // const getProductListing = async (page = 1, pageSize = 10) => {
  //   try {
  //     setLoading(true);
  //     const result = await dispatch(getProductListingRequest());
  //     unwrapResult(result);
  //   } catch (error) {
  //     console.log("ERROR IN API", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getProductListing = (page = 1, pageSize = 10) => {
    try {
      dispatch(getProductListingRequest())
        .then(unwrapResult)
        .catch((error) => {
          console.log("ERROR IN API", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductListing(pagination.current, pagination.pageSize);
  }, [pagination]);

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];

  return (
    <div>
      <h1>Product Listing</h1>
      {loading ? (
        <Spin />
      ) : (
        <Table
          dataSource={productListingLocal}
          columns={columns}
          pagination={pagination}
          onChange={handleTableChange}
        />
      )}
    </div>
  );
}
