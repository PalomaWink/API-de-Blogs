const validationNewRegister = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (displayName.length <= 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (!validation.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  if (password.length <= 5) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = validationNewRegister;