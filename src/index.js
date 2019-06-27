import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Tabs,
  DatePicker,
  InputNumber,
  Radio,
  Icon,
  Upload
} from "antd";

const { TabPane } = Tabs;
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
class DynamicRule extends React.Component {
  state = {
    checkNick: false
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info("success");
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked
      },
      () => {
        this.props.form.validateFields(["nickname"], { force: true });
      }
    );
  };
  myFunction(x) {
    console.log("ok");
    var elmnt = document.getElementById(`${x}`);
    elmnt.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  render() {
    let mobile = "123";
    let address = "1234";
    let email = "asdfasf";
    let gender = "asfasd";
    let weight = 50;
    let guardian = "";
    let guardianID = "";
    let healthInsuranceNumber = "";
    let healthInsuranceExpired = 0;
    let taxCode = "";
    let jobName = "";
    let positionName = "";
    let companyName = "";
    let medicalHistory = "";
    let isHealthBloodPressure = false;
    let isInfectiousDiseases = false;
    let isDiabetes = false;
    let isProlongedBleeding = false;
    let isStomachAche = false;
    let isBothKidney = false;
    let isPregnant = false;
    let isAllergyAsthma = false;
    let isTakingMedicine = false;
    let otherDiseases = false;
    let groups = [];
    let PIC = "";
    let billAddress = "";
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <div style={{ display: "flex", textAlign: "right" }}>
          <label style={{ width: 129 }} htmlFor="code">
            Mã khách hàng
          </label>
          <Input
            style={{ maxWidth: 373, marginLeft: 24 }}
            placeholder="Nhập hoặc tạo tự động"
            id="code"
          />
        </div>
        <div style={{ display: "flex", marginTop: 20, textAlign: "right" }}>
          <label style={{ width: 129 }} htmlFor="code">
            Tên khách hàng
          </label>
          <Input
            style={{ maxWidth: 373, marginLeft: 24 }}
            placeholder="Nhập tên khách hàng"
            id="code"
          />
        </div>

        <div>
          <Tabs defaultActiveKey="1" className="tabIn">
            <TabPane tab="Thông tin cá nhân" key="1" className="tabIn1">
              <div>
                <Form {...formItemLayout} labelAlign="left">
                  <Form.Item label="mobile">
                    {getFieldDecorator("mobile", {
                      rules: [
                        {
                          pattern: /^[^0]/,
                          message: "chữ cái đầu là 0"
                        },
                        {
                          pattern: /(?!^[0-9]{10,11})/,
                          message: "từ 10 tới 11 chữ số"
                        }
                      ],
                      initialValue: mobile
                    })(
                      <Input
                        className="inp"
                        placeholder="số điện thoại"
                        type={"text"}
                      />
                    )}
                  </Form.Item>

                  <Form.Item label="giới tính ">
                    <RadioGroup>
                      <Radio value="male">Nam</Radio>
                      <Radio value="female">Nữ</Radio>
                    </RadioGroup>
                  </Form.Item>

                  <Form.Item label="Ngày sinh">
                    <InputGroup>
                      <DatePicker className="dayinp" />
                    </InputGroup>
                  </Form.Item>
                  <Form.Item label="cân nặng ">
                    {getFieldDecorator("weight", {
                      initialValue: weight
                    })(<InputNumber placeholder="cân nặng" className="inp " />)}
                  </Form.Item>

                  <Form.Item label="tên người giám hộ">
                    {getFieldDecorator("guardian", {
                      rules: [
                        {
                          required: true,
                          message: "Name can not be blank!"
                        },
                        {
                          pattern: /^[^\s]+/,
                          message: "No white space at beginning"
                        },
                        {
                          pattern: /^[^!@#$%^&*()+\-=\[\]{};':'\\|,.<>\/?]+$/,
                          message: "Do not contains special characters"
                        }
                      ],
                      initialValue: guardian
                    })(
                      <Input placeholder="tên người giám hộ" className="inp " />
                    )}
                  </Form.Item>
                  <Form.Item label="CMND ">
                    {getFieldDecorator("guardianID", {
                      initialValue: guardianID
                    })(<Input placeholder="guardianID" className="inp" />)}
                  </Form.Item>

                  <Form.Item label="địa chỉ">
                    {getFieldDecorator("address", {
                      initialValue: address
                    })(<Input placeholder="Địa chỉ" className="inp" />)}
                  </Form.Item>

                  <Form.Item label="email">
                    {getFieldDecorator("email", {
                      rules: [
                        {
                          type: "email",
                          message: "The input is not valid E-mail!"
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!"
                        }
                      ],
                      initialValue: email
                    })(<Input placeholder="Email" className="inp" />)}
                  </Form.Item>
                </Form>
              </div>
            </TabPane>
            <TabPane
              tab="Thông tin nghề nghiệp"
              key="2"
              className="tabIn2"
              onClick={this.myFunction}
            >
              <Form {...formItemLayout}>
                <Form.Item label="số thẻ BHYT">
                  {getFieldDecorator("healthInsuranceNumber", {
                    initialValue: healthInsuranceNumber
                  })(
                    <Input
                      placeholder="số thẻ BHYT"
                      type={"text"}
                      className="inp"
                    />
                  )}
                </Form.Item>

                <Form.Item label="hạn thẻ BHYT">
                  {getFieldDecorator("healthInsuranceExpired", {
                    initialValue: healthInsuranceExpired
                  })(
                    <InputGroup>
                      <DatePicker placeholder="dd/mm/yy" className="dayinp" />
                    </InputGroup>
                  )}
                </Form.Item>
                <Form.Item label="nghề nghiệp">
                  {getFieldDecorator("jobName", {
                    initialValue: jobName
                  })(
                    <Input
                      className="inp"
                      placeholder="nhập nghề nghiệp"
                      type={"text"}
                    />
                  )}
                </Form.Item>

                <Form.Item label="chức vụ">
                  {getFieldDecorator("positionName", {
                    initialValue: positionName
                  })(
                    <Input
                      className="inp"
                      placeholder="nhập chức vụ"
                      type={"text"}
                    />
                  )}
                </Form.Item>

                <Form.Item label="cơ quan">
                  {getFieldDecorator("companyName", {
                    initialValue: companyName
                  })(
                    <Input
                      className="inp"
                      placeholder="nhập công ty"
                      type={"text"}
                    />
                  )}
                </Form.Item>
              </Form>
            </TabPane>

            <TabPane tab="Bệnh sử y khoa" key="3" className="tabIn3">
              <Form {...formItemLayout}>
                <Form.Item label="bệnh sử y khoa" className="mH">
                  {getFieldDecorator("medicalHistory", {
                    initialValue: medicalHistory
                  })(
                    <RadioGroup>
                      <Radio value={1}>khỏe mạnh</Radio>
                      <Radio value={2}>không rõ</Radio>
                    </RadioGroup>
                  )}
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isHealthBloodPressure">
                    bệnh lý tim mạch, cao huyết áp
                  </Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isInfectiousDiseases">
                    Bệnh truyền nhiễm (Lao, HIV, HBV,...)
                  </Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isDiabetes">Tiểu đường</Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isProlongedBleeding">
                    chảy máy kéo dài
                  </Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isStomachAche">đau bao tử</Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isBothKidney">bênh lý gan, thận</Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isPregnant">đang có thai</Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isAllergyAsthma">dị ứng, suyễn</Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="isTakingMedicine">đang dùng thuốc</Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Checkbox name="otherDiseases">bệnh khác</Checkbox>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                  <Input
                    placeholder="Nhập bệnh sử khác"
                    className="inpOtherDis"
                    type={"text"}
                  />
                </Form.Item>
              </Form>
            </TabPane>

            <div>
              <Upload
                listType="picture-card"
                className="upload-picture"
                onChange={this.readFile}
              >
                {uploadButton}
              </Upload>
            </div>
          </Tabs>
        </div>
        <ul>
          <li>
            <p onClick={() => this.myFunction("qwer")}>1</p>
          </li>
          <li>
            <p onClick={() => this.myFunction("asdf")}>2</p>
          </li>
          <li>
            <p onClick={() => this.myFunction("zxcv")}>2</p>
          </li>
        </ul>
        <div
          id="qwer"
          style={{ height: 500, border: "black 1px solid", marginBottom: 20 }}
        >
          asdfasfd
        </div>
        <div
          id="asdf"
          style={{ height: 500, border: "red 1px solid", marginBottom: 20 }}
        />

        <div
          id="zxcv"
          style={{ height: 500, border: "green 1px solid", marginBottom: 20 }}
        />
      </div>
    );
  }
}

const WrappedDynamicRule = Form.create({ name: "dynamic_rule" })(DynamicRule);
ReactDOM.render(<WrappedDynamicRule />, document.getElementById("container"));
