
import { useEffect, useState } from "react";
import logo from "../../../../assets/img/logo-login.svg";
import key from "../../../../assets/img/key.svg";
import { Row, Col, Button, Form, Input,notification} from "antd";
import { useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import axios from "axios";


const NewPassword = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const param = useParams();
  	const [validUrl, setValidUrl] = useState(false);

    const openNotificationWithIcon = (type) => {
      notification[type]({
        message: "Looks like something went wrong",
        description: `password reset failed`,
      });
    };
  

    const verifyUrl =  () => {
        if (param.token){
          setValidUrl(true)
        }
    }

    useEffect(() => {
      
      verifyUrl();
    }, );

    
  
    const onFinish = (values) => {
        console.log("Success:", values);
    setLoading(true)

    axios.put(`https://app.themindinterest.com/admin/reset-password`,{
      token:param.token,
      password:values.password
    }).then((res)=>{
      if (res.status === 200) {
        setLoading(false)
        history.push({
          pathname: `${AUTH_PREFIX_PATH}/Reset`,
    
        });
      
      }else{
        openNotificationWithIcon("error");
        setLoading(false)


      }
    }).catch(()=>{
      setLoading(false)
      openNotificationWithIcon('error')


    })
        
  
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

  return (
    <div> 
    {validUrl ? (
			 <div>
    <div className="pt-3 pl-4">
      <img src={logo} alt="" />
    </div>
    <section className="login-page">
      <Row>

      <Col md={24} className="t-center">
          <img src={key} alt=""  />
        </Col>
        <Col md={24}>
          <h6 className="welcome-back">Set new password</h6>
        </Col>

        <Col md={24}>
          <p className="emailPassword">
          Your new password must be different to <br/> previously used passwords.
          </p>
        </Col>

        <Col span={14} className="centered">
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
                 <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password   className="login-password"/>
      </Form.Item>


      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password  className="login-password" />
      </Form.Item>
  
        
            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
              Reset password
              </Button>
            </Form.Item>
          </Form>

          <Row> 
          
          <Col md={24} className="t-center">
              <p onClick={()=>{
               history.push(`${AUTH_PREFIX_PATH}/login` );
              }}>  <ArrowLeftOutlined /> Back to log in</p>
          </Col>
          </Row>
        </Col>
      </Row>
    </section>
  </div>
			) : (
				<h1>404 Not Found</h1>
			)}
    </div>

   
  )
}

export default NewPassword