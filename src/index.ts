const server = require("fastify")({
  logger: true,
});


interface Iuser{
    name:string,
    password:string,
    phoneNumber:Number
}

const arr :any=[]

const obj:Iuser ={
    name:"Nasser",
    password:"a1a1",
    phoneNumber:67
} 

const obj1:Iuser ={
    name:"Nasser",
    password:"a1a1",
    phoneNumber:55
} 
const obj2:Iuser ={
    name:"ali",
    password:"a1a1",
    phoneNumber:55
} 

arr.push(obj,obj1,obj2)

server.get(`/user`, async () => {
  return arr
});

server.get(`/profile/ali`, async () => {
    return arr[2]
  });



server.listen({ port: 3000 }, (err: any) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
