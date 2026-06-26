import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";
import { validateRegisterForm } from "../utils/validators";

import concert from "../assets/images/concert.jpg";

const Register = () => {
  const navigate = useNavigate();

  const setUser = useStore((state) => state.setUser);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateRegisterForm(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    if (!agree) {
  setErrors({
    ...validationErrors,
    checkbox: "Check this box if you want to proceed",
  });
  return;
}
    setErrors({});
    setUser(formData);
    navigate("/category");
  };

  return (
    <div className="min-h-screen bg-black flex overflow-hidden">

      {/* LEFT */}

      <div className="hidden lg:block w-[49%] relative">

        <img
          src={concert}
          alt=""
          className="w-full h-screen object-cover"
        />

        <div className="absolute inset-0 bg-black/15" />

        <div className="absolute left-[48px] bottom-[70px]">

          <h1
            className="
              text-white
              font-black
              text-[52px]
              leading-[74px]
              tracking-[0.01em]
            "
          >
            Discover new things on
            <br />
            Superapp
          </h1>

        </div>

      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-[51%] flex items-center justify-center min-h-screen">

  <form
    onSubmit={handleSubmit}
    className="w-[370px]"
  >

          {/* LOGO */}

          <h1
            className="
              text-center
              text-[#72DB73]
              text-[42px]
              leading-none
            "
            style={{ fontFamily: "Poor Story" }}
          >
            Super app
          </h1>

          {/* SPACE */}

          <div className="h-[16px]" />


          {/* SUBTITLE */}

          <p
            className="
              text-center
              text-white
              text-[17px]
mt-[8px]
            "
          >
            Create your new account
          </p>

          {/* SPACE */}

          <div className="h-[32px]" />

          {/* NAME */}

          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            style={{ paddingLeft: "18px" }}
  className="
    w-full
    h-[46px]
    bg-[#292929]
    rounded-[4px]
    text-[16px]
    text-white
    placeholder:text-[#7C7C7C]
    outline-none
  "
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name}
            </p>
          )}

          <div className="h-[16px]" />

          {/* USERNAME */}

          <input
            type="text"
            placeholder="UserName"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
            style={{ paddingLeft: "18px" }}
  className="
    w-full
    h-[46px]
    bg-[#292929]
    rounded-[4px]
    text-[16px]
    text-white
    placeholder:text-[#7C7C7C]
    outline-none
  "
          />

          {errors.username && (
            <p className="text-red-500 text-sm mt-2">
              {errors.username}
            </p>
          )}

          <div className="h-[16px]" />

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            style={{ paddingLeft: "18px" }}
  className="
    w-full
    h-[46px]
    bg-[#292929]
    rounded-[4px]
    text-[16px]
    text-white
    placeholder:text-[#7C7C7C]
    outline-none
  "
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email}
            </p>
          )}

          <div className="h-[16px]" />

          {/* MOBILE */}

          <input
            type="text"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                mobile: e.target.value,
              })
            }
            style={{ paddingLeft: "18px" }}
  className="
    w-full
    h-[46px]
    bg-[#292929]
    rounded-[4px]
    text-[16px]
    text-white
    placeholder:text-[#7C7C7C]
    outline-none
  "
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-2">
              {errors.mobile}
            </p>
          )}

          <div className="h-[26px]" />

                    {/* CHECKBOX */}

          <div className="flex items-center gap-4">

            <input
  type="checkbox"
  checked={agree}
  onChange={(e) => setAgree(e.target.checked)}
  className="w-[18px] h-[18px] accent-[#72DB73] cursor-pointer"
/>

            <p
              className="
                text-[#7C7C7C]
                text-[15px]
                tracking-[0.02em]
              "
            >
              Share my registration data with Superapp
            </p>

          </div>
          {errors.checkbox && (
  <p className="text-red-500 text-[15px] mt-2 ml-8">
    {errors.checkbox}
  </p>
)}

          <div className="h-[30px]" />

          {/* BUTTON */}

          <button
            type="submit"
            className="
              w-full
              h-[44px]
              rounded-full
              bg-[#72DB73]
              hover:bg-[#62d563]
              transition-all
              duration-300
              text-white
              font-semibold
              text-[18px]
              tracking-wide
              cursor-pointer
            "
          >
            SIGN UP
          </button>

          <div className="h-[18px]" />

          {/* TERMS */}

          <div
            className="
              text-[#7C7C7C]
              text-[13px]
              leading-[22px]
              font-medium
            "
          >

            <p>

              By clicking on Sign up, you agree to Superapp{" "}

              <span className="text-[#72DB73]">
                Terms and Conditions of Use
              </span>

            </p>

            <div className="h-[10px]" />

            <p>

              To learn more about how Superapp
              collects, uses, shares and protects
              your personal data please head
              Superapp{" "}

              <span className="text-[#72DB73]">
                Privacy Policy
              </span>

            </p>

          </div>

        </form>

      </div>

    </div>

  );
};

export default Register;