import { PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetCategoriesRedux,
  handleGetSubCategoriesRedux,
} from "../../../../../redux/actions/categoryAction";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function CreateProductForm() {
  const { isLoading, isError, categories, subCategories } = useSelector(
    (state) => {
      return state.category;
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetCategoriesRedux());
  }, []);

  const handleChooseCategory = (categoryId) => {
    dispatch(handleGetSubCategoriesRedux(categoryId));
  };
  const handleChooseSubCategory = (categoryId) => {};
  return (
    <>
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 15,
        }}
        layout="horizontal"
      >
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form.Item
              label="Tên sản phẩm"
              name="name"
              htmlFor="name"
              rules={[
                { required: true, message: "Vui lòng nhập tên sản phẩm !" },
              ]}
            >
              <Input id="name" />
            </Form.Item>
            <Form.Item
              label="Mã sản phẩm"
              name="code"
              htmlFor="code"
              rules={[
                { required: true, message: "Vui lòng nhập mã sản phẩm !" },
              ]}
            >
              <Input id="code" />
            </Form.Item>
            <Form.Item
              label="Giá nhập"
              name="importPrice"
              htmlFor="importPrice"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập giá nhập của sản phẩm !",
                },
              ]}
            >
              <InputNumber
                min={1} // Giá trị tối thiểu
                id="importPrice"
              />
            </Form.Item>
            <Form.Item
              label="Giá bán"
              name="price"
              htmlFor="price"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập giá bán của sản phẩm !",
                },
              ]}
            >
              <InputNumber
                id="price"
                min={1} // Giá trị tối thiểu
              />
            </Form.Item>
            <Form.Item label="Thuế (%)" htmlFor="tax">
              <InputNumber
                id="tax"
                min={0.1} // Giá trị tối thiểu
                max={100} // Giá trị tối đa
                step={0.1}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace("%", "")}
              />
            </Form.Item>
            <Form.Item label="Giảm giá (%)" htmlFor="discount">
              <InputNumber
                id="discount"
                min={0.1} // Giá trị tối thiểu
                max={100} // Giá trị tối đa
                step={0.1}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace("%", "")}
              />
            </Form.Item>
            <Form.Item label="Mô tả" htmlFor="description">
              <TextArea rows={4} id="description" />
            </Form.Item>
          </div>
          <div className="col-12 col-lg-6">
            <Form.Item label="Sản phẩm hot" htmlFor="hot">
              <Checkbox id="hot"></Checkbox>
            </Form.Item>
            <Form.Item label="Sản phẩm mới" htmlFor="new">
              <Checkbox id="new"></Checkbox>
            </Form.Item>
            <Form.Item
              label="Ảnh đại diện"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              htmlFor="thumbnail"
            >
              <Upload
                action="/upload.do"
                listType="picture-card"
                id="thumbnail"
                multiple={false}
                maxCount={1}
              >
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Thumbnail
                  </div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item label="Danh mục tổng" htmlFor="category">
              <Select id="category" onChange={handleChooseCategory}>
                {categories &&
                  categories.map((category) => (
                    <Select.Option key={category.id} value={category.id}>
                      {category.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
            {subCategories && (
              <Form.Item label="Danh mục chi tiết" htmlFor="category">
                <Select id="category" onChange={handleChooseSubCategory}>
                  {subCategories &&
                    subCategories.map((category) => (
                      <Select.Option key={category.id} value={category.id}>
                        {category.name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            )}
          </div>
        </div>
        <Form.Item className="d-flex justify-content-center">
          <Button>Create</Button>
        </Form.Item>
      </Form>
    </>
  );
}
