import { Router }from "express";
import { 
    getUsers, 
    deleteUser, 
    createUser, 
    testAPI
} from "../../modules/users/users.controller.js";

export const router = Router()

router.get("/test", testAPI);

router.get("/", getUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);
