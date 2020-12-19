import * as Joi from "yup";

const schema = Joi.object().shape({
  title: Joi.string().min(6).max(255).required(),
  description: Joi.string().min(6).max(1024).required(),
  tags: Joi.string().min(3).max(255),
  selectedFile: Joi.string().required(),
});

const data = () => ({
  title: "hello",
  tags: "yes",
  selectedFile: "selected",
});

try {
  schema.isValid(data);
} catch (err) {
  console.log(err);
}
