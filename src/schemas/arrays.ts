import  Joi from "@hapi/joi"

export  const arraySchema = Joi.object({
  id: Joi.number().min(1).max(5).required(),
  it: Joi.number().min(1).max(5).required()
})

