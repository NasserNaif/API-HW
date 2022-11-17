"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const server = require("fastify")({
    logger: true,
});
const arr = [];
const obj = {
    name: "Nasser",
    password: "a1a1",
    phoneNumber: 67
};
const obj1 = {
    name: "Nasser",
    password: "a1a1",
    phoneNumber: 55
};
const obj2 = {
    name: "ali",
    password: "a1a1",
    phoneNumber: 55
};
arr.push(obj, obj1, obj2);
server.get(`/user`, () => __awaiter(void 0, void 0, void 0, function* () {
    return arr;
}));
server.get(`/profile/ali`, () => __awaiter(void 0, void 0, void 0, function* () {
    return arr[2];
}));
server.listen({ port: 3000 }, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});
