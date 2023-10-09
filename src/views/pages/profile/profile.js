import React, { useEffect, useState } from "react";
import "./scss/profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleProfileRedux } from "../../../redux/actions/userAction";
import { toast } from "react-toastify";
import { PlusOutlined } from "@ant-design/icons";
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
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
export default function Profile() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  //   const { username } = useSelector((state) => state.user.account);
  const user = useSelector((state) => state.user.account);
  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      toast.error("Lỗi xác thực !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    dispatch(handleProfileRedux(accessToken));
  }, []);
  console.log({ user, profile });
  return (
    <div className="profile container">
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Giới tính">
          <Radio.Group defaultValue="male">
            <Radio value="male"> Nam </Radio>
            <Radio value="female">Nữ</Radio>
            <Radio value="another"> Khác </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên">
          <Input defaultValue="Long" />
        </Form.Item>
        <Form.Item label="Họ">
          <Input defaultValue="Nguyễn" />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input defaultValue="0366741741" />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input defaultValue="số 118 - Hà Nội" />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [
                  {
                    title: "Bamboo",
                    value: "bamboo",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
      </Form>
      Hello {user.username} <br />
      <h1>Profile:{JSON.stringify(profile)}</h1>
    </div>
  );
}
