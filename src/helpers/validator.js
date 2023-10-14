const validateEmail = (email) => {
  // Sử dụng regular expression để kiểm tra định dạng email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
export { validateEmail };
