import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiGoogle, SiFacebook } from "react-icons/si";
import { toast } from "react-hot-toast";
import logoXl from "../assets/asset-xl/logo-xl.png";
import clickedLogo from "../assets/clicked.gif";
import { Formik, Form, Field, useFormikContext } from "formik";
import { CountryData } from "../data/csd";
import DatePicker from "react-datepicker";

import * as Yup from "yup";
import { SignUpService } from "../service";

const SignUpSchema = Yup.object().shape({
  fname: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .required("Required"),
  lname: Yup.string().required("Required").max(20, "too long"),
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string().required("Required"),
  cnfPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
  country: Yup.string().required("Required"),
  states: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  dob: Yup.date().required("Required"),
  mobileNumber: Yup.string()
    .required("Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Enter Valid Phone number"
    ),
  gender: Yup.string().required("required"),
});
const SignUpScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [cnfPassword, setCnfPassword] = useState("");
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  // const [gender, setGender] = useState("male");
  const [isChecked, setisChecked] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [countryName, setcountryName] = useState("");
  const [statesName, setstatesName] = useState("");
  const [dob, setdob] = useState("");
  const nav = useNavigate();

  const signUpHandler = (d) => {
    try {
      // SignUpService(d, nav);
      toast.success("Sign In Succesfull");
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-[#410068] flex justify-center items-center font-montserrat ">
      <div className="bg-[#5e0098] lg:min-h-[556px] min-h-screen lg:min-w-[516px] min-w-full flex items-center justify-center lg:flex-row sm:flex-row flex-col">
        <div className="flex sm:hidden text-white self-start p-4">Sign up</div>
        <div className=" lg:hidden sm:hidden min-w-full flex justify-center items-center grow">
          {/* <img src={logoXl} alt="brand-logo" className="sm:flex hidden" /> */}
          <div className="sm:hidden flex flex-col justify-end self-end flex-1  p-5 text-white">
            <h1 className="font-poppins-bold text-2xl">Welcome</h1>
            <h1 className="text-sm">Sign up to continue</h1>
          </div>
        </div>
        <div className="bg-white lg:min-h-[556px]   lg:min-w-[508px] sm:min-w-[254px] min-w-full grow">
          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
              password: "",
              cnfPassword: "",
              country: "",
              city: "",
              states: "",
              dob: "",
              mobileNumber: "",
              gender: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values, { reset }) => {
              signUpHandler(values);
              // setisClicked(true);
              console.log(values);
            }}
          >
            {({ errors, touched, setFieldValue, resetForm }) => (
              <Form className="flex justify-start items-start flex-col lg:min-h-[556px]  p-8 gap-4">
                <h1 className="text-2xl font-semibold">Sign up to continue</h1>

                <Field
                  type="text"
                  id="fName"
                  className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
                  placeholder="First Name"
                  name="fname"
                />
                {errors.fname && touched.fname && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.fname}
                  </div>
                )}
                <Field
                  type="text"
                  id="lName"
                  className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
                  placeholder="Last Name"
                  name="lname"
                />
                {errors.lname && touched.lname && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.lname}
                  </div>
                )}
                <Field
                  type="number"
                  id="mobileNumber"
                  className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
                  placeholder="PhoneNumber"
                  name="mobileNumber"
                />
                {errors.mobileNumber && touched.mobileNumber && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.mobileNumber}
                  </div>
                )}
                <Field
                  type="text"
                  id="email"
                  className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
                  placeholder="Email"
                  name="email"
                />
                {errors.email && touched.email && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.email}
                  </div>
                )}
                <Field
                  type="password"
                  id="password"
                  className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
                  placeholder="Password"
                  name="password"
                />
                {errors.password && touched.password && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.password}
                  </div>
                )}
                <Field
                  type="password"
                  id="cnfPassword"
                  className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
                  placeholder="Confirm password"
                  name="cnfPassword"
                />
                {errors.cnfPassword && touched.cnfPassword && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.cnfPassword}
                  </div>
                )}
                <div className=" flex justify-between items-center min-w-full  p-2">
                  <div>Gender</div>
                  <div
                    className="flex gap-20 "
                    onChange={(e) => {
                      setFieldValue("gender", e.target.value);
                    }}
                  >
                    <label htmlFor="male" className="flex gap-1">
                      Male
                      <input type="radio" name="gender" id="" value="male" />
                    </label>
                    <label htmlFor="female" className="flex gap-1">
                      Female
                      <input type="radio" name="gender" id="" value="female" />
                    </label>
                  </div>
                  {errors.gender && touched.gender && (
                    <div
                      className="text-red-700 
                  text-sm 
                  "
                    >
                      {errors.gender}
                    </div>
                  )}
                </div>
                <label
                  id="country"
                  className="flex justify-between items-center shadow-sm min-w-full h-[38px] rounded-md p-2"
                >
                  Country
                  <Field
                    as="select"
                    name="country"
                    id="country"
                    className="bg-[#5e00982d] shadow-sm p-2 px-2 w-48"
                    onChange={(e) => {
                      setFieldValue("country", e.target.value);
                      setcountryName(e.target.value);
                    }}
                  >
                    <option value="" key=""></option>
                    {CountryData.map((e) => (
                      <option value={e.name} key={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </Field>
                </label>
                {errors.country && touched.country && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.country}
                  </div>
                )}
                <label
                  id="states"
                  className="flex justify-between items-center shadow-sm min-w-full h-[38px] rounded-md p-2"
                >
                  States
                  <Field
                    as="select"
                    name="states"
                    id="states"
                    className="bg-[#5e00982d] shadow-sm p-2 px-2 w-48"
                    onChange={(e) => {
                      setFieldValue("states", e.target.value);
                      setstatesName(e.target.value);
                    }}
                  >
                    {CountryData.filter((e) => e.name == countryName)[0] ? (
                      <>
                        <option value="" key=""></option>

                        {CountryData.filter(
                          (e) => e.name == countryName
                        )[0].states.map((e) => (
                          <option value={e.name} key={e.id}>
                            {e.name}
                          </option>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </Field>
                </label>
                {errors.states && touched.states && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.states}
                  </div>
                )}
                <label
                  id="states"
                  className="flex justify-between items-center shadow-sm min-w-full h-[38px] rounded-md p-2"
                >
                  City
                  <Field
                    as="select"
                    name="city"
                    id="city"
                    className="bg-[#5e00982d] shadow-sm p-2 px-2 w-48"
                    onChange={(e) => {
                      setFieldValue("city", e.target.value);
                    }}
                  >
                    <option value="" key=""></option>

                    {CountryData.filter((e) => e.name == countryName)[0] &&
                    CountryData.filter(
                      (e) => e.name == countryName
                    )[0].states.filter((e) => e.name == statesName)[0] ? (
                      <>
                        {CountryData.filter((e) => e.name == countryName)[0]
                          .states.filter((e) => e.name == statesName)[0]
                          .cities.map((e) => (
                            <option value={e.name} key={e.id}>
                              {e.name}
                            </option>
                          ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </Field>
                </label>
                {errors.city && touched.city && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.city}
                  </div>
                )}

                <label
                  id="country"
                  className="flex justify-between items-center shadow-sm min-w-full h-[38px] rounded-md p-2"
                >
                  DOB
                  <input
                    type="date"
                    as="date"
                    name="dob"
                    id="dob"
                    className="bg-[#5e00982d] shadow-sm p-2 px-2 w-48"
                    onChange={(e) => {
                      setFieldValue("dob", e.target.value);
                      setdob(e.target.value);
                    }}
                  />
                </label>
                {errors.dob && touched.dob && (
                  <div
                    className="text-red-700 
                  text-sm 
                  "
                  >
                    {errors.dob}
                  </div>
                )}

                <label id="privacy">
                  {" "}
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    className="mr-2"
                    onClick={() => {
                      setisChecked(!isChecked);
                    }}
                  />
                  I accept{" "}
                  <span className="text-[#4C1D95] font-semibold">
                    Terms of Use
                  </span>{" "}
                  &{" "}
                  <span className="text-[#4C1D95] font-semibold">
                    Privacy Policy
                  </span>
                </label>

                <button
                  className={`${
                    isChecked ? "bg-[#5e0098]" : "bg-[#9a3dd4]"
                  } text-[#ffffff] h-12 border-white border-2 sm:w-1/2 lg:min-w-[500px] min-w-full w-[90%] p-3 flex items-center justify-center self-center`}
                  about="Signup"
                  disabled={!isChecked}
                  type="submit"
                >
                  {isClicked ? (
                    <>
                      <img
                        src={require("../assets/clicked.gif")}
                        alt=""
                        className="h-24"
                      />
                    </>
                  ) : (
                    <>Sign up</>
                  )}
                </button>

                {isClicked ? (
                  <></>
                ) : (
                  <>
                    <div className="flex items-center justify-center min-w-full gap-2">
                      <div className="h-[1px] bg-[#E5E7EB] w-[40%]"></div>
                      <span className="text-[#9CA3AF]">or</span>
                      <div className="h-[1px] bg-[#E5E7EB] w-[40%]"></div>
                    </div>
                    <div className="flex self-center gap-3">
                      <SiFacebook size={24} />
                      <SiGoogle size={24} />
                    </div>
                    <h1 className="flex self-center mt-auto text-[#6B7280]">
                      Already have an account?
                      <Link className="text-[#4C1D95] ml-1" to={"/signin"}>
                        {" "}
                        Sign in
                      </Link>
                    </h1>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
