import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getSiteListingRequest } from "../../../store/reducers/siteReducer";

export default function Sitepage(props) {
  const dispatch = useDispatch();
  const sites = useSelector((state) => state.site);

  const [siteListing, setSiteListing] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

  useEffect(() => {
    if (sites) {
      setSiteListing(sites.data);
    }
  }, [sites]);

  const getSiteListing = (page = 1, pageSize = 10) => {
    try {
      dispatch(
        getSiteListingRequest({
          search: "",
          status: "",
          page,
          size: pageSize,
        })
      )
        .then(unwrapResult)
        .catch((error) => {
          console.log("ERROR IN API", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSiteListing(pagination.current, pagination.pageSize);
  }, [pagination]);

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  console.log("aaa", siteListing);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Unique_Id",
      dataIndex: "unique_id",
      key: "unique_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Company_Name",
      dataIndex: "company_name",
      key: "company_name",
    },
  ];

  return (
    <div>
      <Table
        dataSource={siteListing}
        columns={columns}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </div>
  );
}
