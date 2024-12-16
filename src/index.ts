import { Hono } from 'hono'

const app = new Hono()

// middlewares

async function Auth(c:any,next:any){

  if(c.req.header("Authorization")){
    //logic
    next()
  }else{
    c.json({msg:"not authenticated"})
  }

}

app.post('/', Auth,async (c) => {
  //req,res,headers,body,query parameters,middlewere,connection to db

  const body = await c.req.json()  //body whenever you convert code into json need await
  console.log("body",body)
  console.log("req headers",c.req.header("Authorization")) // headers
  console.log("queryParams",c.req.query("param"))  // query params

  return c.text('Hello Hono!')
  // return c.json({}) response
})

export default app
