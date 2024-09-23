const swaggerJSDoc = require("swagger-jsdoc");
const swaggerjsDoc= require("swagger-jsdoc")
const swaggerUi= require("swagger-ui-express")


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API docs',
        version: '1.0.0',
        descroption: "api docs",
        server:[{
            url: "http://localhost:5000"
        }]
      },
    },
    apis: ['./routes*.js'], 
  };

  const swaggerDocs = swaggerJSDoc(options)

  module.exports= { swaggerUi, swaggerDocs}
  