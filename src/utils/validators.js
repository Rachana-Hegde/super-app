export const validateRegisterForm = (formData) => {
  const errors = {};

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const mobileRegex =
    /^[0-9]{10}$/;

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.username.trim()) {
    errors.username = "Username is required";
  }

  if (!emailRegex.test(formData.email)) {
    errors.email = "Invalid Email";
  }

  if (!mobileRegex.test(formData.mobile)) {
    errors.mobile =
      "Mobile must be 10 digits";
  }

  return errors;
};