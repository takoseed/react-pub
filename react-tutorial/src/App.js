import './App.css';
import Sidebar from './components/SiderBar/Sidebar';
import Header from './components/HomePage/Header';
import { useState } from 'react';
import { Route,Routes,Link } from 'react-router-dom';

import Mail from './pages/Mail';

function App() {
  const initialValues = {username:"",mailAddress:"",password:""}
  const [formValues,setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit ,setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const{name,value} = e.target;
    setFormValues({...formValues,[name]:value});
    //.log(formValues);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues))
  //   setIsSubmit(true);
  // }

  // const validate = (values)=> {
  //   const errors= {};
  //   const regex  = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
  //   if(!values.username){
  //     errors.username = "ユーザ名を入力してください"
  //   }
  //   if(!values.mailAddress){
  //     errors.mailAddress= "メールアドレスを入力してください"
  //   }else if(!regex.test(values.mailAddress)){
  //     errors.mailAddress= "正しいメールアドレスを入力してください"
  //   }
  //   if(!values.password){
  //     errors.password = "パスワードを入力してください"
  //   }else if (values.password.length < 4){
  //     errors.password = "4文字以上15文字以下のパスワードを入力してください"
  //   }else if (values.password.length > 15){
  //     errors.password = "4文字以上15文字以下のパスワードを入力してください"
  //   }
  //   return errors;
  // }

  return (
    <div className="App">
      {/* <Sidebar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/mail' element={<Mail/>}/>
      </Routes> */}
      <Header/>
    </div>
  );
}
export default App;
