import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import {
  Button,
  Checkbox,
  Image,
  Modal,
  Space,
  Switch,
  Table,
  Tooltip,
} from "antd";
import { handleGetProductsRedux } from "../../../redux/actions/productAction";
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import CreateProduct from "./components/create/create-product";
import apiConfig from "../../../apis/apiConfig";
import ModalDetail from "./components/modal/modal-detail";
import moment from "moment";

const ProductManagement = () => {
  const columns = [
    {
      title: <div className="text-nowrap">STT</div>,
      sorter: true,
      render: (text, record, index) => (
        <span className="text-nowrap">{index + 1}</span>
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap">ID</div>,
      dataIndex: "id",
      sorter: true,
      render: (id) => (
        <span className="badge bg-primary text-nowrap">{id}</span>
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Code ID</div>,
      dataIndex: "code",
      sorter: true,
      render: (codeId) => (
        <span className="badge bg-success text-nowrap">{codeId}</span>
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Tên sản phẩm</div>,
      dataIndex: "name",
      sorter: true,
      render: (name) => <span className="text-nowrap">{name}</span>,
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Giá nhập</div>,
      dataIndex: "importPrice",
      sorter: true,
      render: (importPrice) => (
        <span className="text-nowrap">{importPrice}</span>
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Giá bán</div>,
      dataIndex: "price",
      sorter: true,
      render: (price) => <span className="text-nowrap">{price}</span>,
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Thuế</div>,
      dataIndex: "tax",
      sorter: true,
      render: (tax) => <span className="text-nowrap">{tax}</span>,
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Giảm giá</div>,
      dataIndex: "discount",
      sorter: true,
      render: (discount) => <span className="text-nowrap">{discount}</span>,
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Ảnh</div>,
      dataIndex: "thumbnail",
      sorter: true,
      render: (thumbnail) => (
        <Image
          style={{ width: "80px", objectFit: "contain" }}
          src={apiConfig.baseUrl + thumbnail}
        />
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Sản phẩm mới</div>,
      dataIndex: "new",
      sorter: true,
      render: (newFlag) => (
        <div className="text-center">
          <Checkbox checked={newFlag} />
        </div>
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Sản phẩm nóng</div>,
      dataIndex: "hot",
      sorter: true,
      render: (hotFlag) => (
        <div className="text-center">
          <Checkbox checked={hotFlag} />
        </div>
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Tạo lúc</div>,
      dataIndex: "createdAt",
      sorter: true,
      render: (createdAt) => (
        <div className="text-center">
          {moment(createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </div>
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap">Cập nhật</div>,
      dataIndex: "updatedAt",
      sorter: true,
      render: (updatedAt) => (
        <div className="text-center">
          {moment(updatedAt).format("YYYY-MM-DD HH:mm:ss")}
        </div>
      ),
      width: "20%",
    },
    {
      title: <div className="text-nowrap text-center">Thao tác</div>,
      dataIndex: "actions",
      fixed: "left",
      render: (data, record) => (
        <>
          <Space>
            <Tooltip title="Chi tiết">
              <ModalDetail record={record} />
            </Tooltip>
            <Tooltip title="Sửa">
              <Button
                shape="circle"
                type="primary"
                icon={<EditOutlined />}
                className="d-flex justify-content-center align-items-center"
              />
            </Tooltip>
            <Tooltip title="Xóa">
              <Button
                shape="circle"
                type="primary"
                icon={<DeleteOutlined />}
                danger
                className="d-flex justify-content-center align-items-center"
              />
            </Tooltip>
          </Space>
        </>
      ),
    },
  ];
  const { isLoading, isError, products } = useSelector((state) => {
    return state.product;
  });
  console.log({ isLoading, isError, products });
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const { current, pageSize } = tableParams.pagination;
    dispatch(handleGetProductsRedux(current, pageSize));
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: products && products.total,
      },
    });
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };
  return (
    <div className="product">
      <div className="product__handle d-flex justify-content-start align-items-center">
        <CreateProduct />
        <div className="product__handle-themes d-flex">
          <label className="mx-2">Chế độ: </label>
          <Switch defaultChecked />
        </div>
      </div>
      <div className="responsive-table">
        <Table
          style={{ maxWidth: "100%" }}
          columns={columns}
          pagination={tableParams.pagination}
          loading={isLoading}
          dataSource={products && products.data}
          onChange={handleTableChange}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};
export default ProductManagement;
