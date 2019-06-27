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

  myFunction(e) {
    console.log(e);
    var elmnt = document.getElementById(e);
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
          <Tabs defaultActiveKey="2" onChange={this.myFunction}>
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />1
                </span>
              }
              key="qwer"
            />
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />2
                </span>
              }
              key="asdf"
            />
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />3
                </span>
              }
              key="zxcv"
            />
          </Tabs>

          {/* <ul>
            <li>
              <p onClick={() => this.myFunction("qwer")}>1</p>
            </li>
            <li>
              <p onClick={() => this.myFunction("asdf")}>2</p>
            </li>
            <li>
              <p onClick={() => this.myFunction("zxcv")}>2</p>
            </li>
          </ul> */}
          <div
            id="qwer"
            style={{ height: 500, border: "black 1px solid", marginBottom: 20 }}
          />
          <div
            id="asdf"
            style={{ height: 500, border: "red 1px solid", marginBottom: 20 }}
          />
          <div
            id="zxcv"
            style={{ height: 500, border: "green 1px solid", marginBottom: 20 }}
          />
        </div>
      </div>
    );
  }
}

const WrappedDynamicRule = Form.create({ name: "dynamic_rule" })(DynamicRule);
ReactDOM.render(<WrappedDynamicRule />, document.getElementById("container"));
