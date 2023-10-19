import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiGoogle, SiFacebook } from "react-icons/si";
import { toast } from "react-hot-toast";
import { Field, Form, Formik, useFormik } from "formik";
import logoxl from "../assets/asset-xl/logo-xl.png";
import * as Yup from "yup";
import clickedLogo from "../assets/clicked.gif";
import { ForgotPasswordService, SignInService } from "../service";

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().required("Required").trim().email("Invalid email"),
});

const ForgetPasswordScreen = () => {
  const [isClicked, setisClicked] = useState(false);
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-[#410068] flex justify-center items-center font-montserrat ">
      <div className="bg-[#5e0098] lg:min-h-[556px] min-h-screen lg:min-w-[1016px] min-w-full flex items-center justify-center lg:flex-row sm:flex-row flex-col">
        <div className="flex sm:hidden text-white self-start p-4">Sign in</div>
        <div className="lg:min-w-[508px] lg:min-h-[556px] sm:min-w-[254px] min-w-full flex justify-center items-center grow">
          <img src={logoxl} alt="brand-logo" className="sm:flex hidden" />
          <div className="sm:hidden flex  flex-col justify-end self-end flex-1  p-5 text-white">
            <h1 className="font-poppins-bold text-2xl">Welcome back!</h1>
            <h1 className="text-sm">Enter email to continue</h1>
          </div>
        </div>
        <div className="bg-white min-h-[656px] lg:min-h-[556px]   lg:min-w-[508px] sm:min-w-[254px] min-w-full grow">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ForgetPasswordSchema}
            onSubmit={(values) => {
              ForgotPasswordService(values, nav);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex justify-start items-start flex-col lg:min-h-[556px]  p-8 gap-4">
                <h1 className="text-2xl font-semibold">
                  Enter email in to continue
                </h1>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
                  placeholder="Email"
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

                <button
                  className={`${"bg-[#5e0098]"} h-12 text-[#ffffff] border-white border-2 sm:w-1/2 lg:min-w-[500px] min-w-full w-[90%] p-3 flex items-center justify-center self-center`}
                  about="Signup"
                  disabled={isClicked}
                  type="submit"
                  // onClick={() => {
                  //   console.log("clicked");
                  // }}
                >
                  {isClicked ? (
                    <>
                      <img src={clickedLogo} alt="" className="h-24" />
                    </>
                  ) : (
                    <>Send</>
                  )}
                </button>

                {isClicked ? (
                  ""
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
                      Got here by mistake ?
                      <Link className="text-[#4C1D95] ml-1" to={"/"}>
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

export default ForgetPasswordScreen;
