import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import user from "../assets/user.png"
import mail from "../assets/mail.png"
import eye from "../assets/view.png"



const SignUpCard = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});

  const clicks = () => {
    setIsActive(!isActive);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!isActive && !formData.password) newErrors.password = 'Password is required';
    if (!recaptchaValue) newErrors.recaptcha = 'Please complete the reCAPTCHA';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      ///
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };


  return (

    <form className="bg-white flex items-center flex-col gap-6 w-2/5 text-lg font-medium font-mono py-12 text-black rounded-md">
      <div className={`flex gap-3 border p-1 mb-5 rounded-xl cursor-pointer outline outline-1`} onClick={clicks}><div className={`font-semibold text-2xl ${isActive ? 'bg-white' : 'bg-blue-200'} p-3 rounded-xl`} >Sign Up</div><div className={`font-semibold text-2xl ${isActive ? 'bg-blue-200' : 'bg-white'} p-3 rounded-xl`} onClick={clicks} >Login</div></div>
      <div className="flex gap-10 items-baseline"> <div className="absolute p-3"><img src={user} className="w-5"/></div><div className="bg-gray-300 rounded-md h-12 w-[380px] p-1 px-10"><input required className="bg-gray-100 rounded-md h-10 w-[335px] pl-5 focus:outline-none focus:ring-2 focus:border-stone-500" placeholder="User Name" type="text" name="name" value={formData.name} onChange={handleChange} />{errors.name && <span className="text-red-500">{errors.name}</span>}</div></div>
      <div className="flex gap-10 items-baseline"> <div className="absolute p-3"><img src={mail} className="w-5" /></div><div className="bg-gray-300 rounded-md h-12 w-[380px] p-1 px-10"><input required className="bg-gray-100 rounded-md h-10 w-[335px] pl-5 focus:outline-none focus:ring-2 focus:border-stone-500" placeholder="Email Id" type="email" name="email" value={formData.email} onChange={handleChange} />{errors.email && <span className="text-red-500">{errors.email}</span>}</div><div className={`absolute text-base ml-[235px] mt-14 ${isActive ? 'visible' : 'invisible'}`}>Lost my password</div></div>
      <div className={`flex gap-10 items-baseline ${isActive ? 'invisible' : 'visible'}`}> <div className="absolute p-3"><img src={eye} className="w-5" /></div><div className="bg-gray-300 rounded-md h-12 w-[380px] p-1 px-10"><input required className="bg-gray-100 rounded-md h-10 w-[335px] pl-5 focus:outline-none focus:ring-2 focus:border-stone-500" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange}/> {errors.password && <span className="text-red-500">{errors.password}</span>}</div></div>
      <ReCAPTCHA className={`${isActive ? 'invisible' : 'visible'}`}
        sitekey="6Le8kEUqAAAAABNMPQG35Zirm3cPsBhvaXV2t1mS"
        onChange={handleRecaptchaChange}
      />
          {errors.recaptcha && <span className="text-red-500">{errors.recaptcha}</span>}
      <div className={`flex bg-blue-200 text-xl font-semibold p-3 px-5 rounded-lg cursor-pointer ${isActive ? 'invisible' : 'visible'}`} onClick={handleSubmit} >Sign Up</div>
      <div className={`flex absolute mt-[300px] bg-blue-200 text-xl font-semibold p-3 px-5 rounded-lg cursor-pointer ${isActive ? 'visible' : 'invisible'}`} >Login</div>

    </form>
  )
}

export default SignUpCard
