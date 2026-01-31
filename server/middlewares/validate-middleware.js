const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const message = err.issues[0].message; 
    console.log(message);
    return res.status(400).json({ msg: message });
  }
};

module.exports = validate;
