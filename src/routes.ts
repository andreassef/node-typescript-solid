import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post('/usuario', (request, response) => {
    return createUserController.handle(request, response);
});

export { router };