import { Router } from 'express';
import { CarController } from '../controllers/cars';

import {validate} from '../middleware/validate.middleware';
import {createCarZSchema, getCarParamsSchema, updateCarZSchema}  from '../models/cars';
//import { authenticateKey } from '../middleware/auth.middleware';

const router = Router();
const carController = new CarController();

router.get('/',  carController.getCars);

router.get('/:id', validate(getCarParamsSchema),carController.getCarById);
router.post('/', validate(createCarZSchema), carController.createCar);
router.put('/:id', validate(getCarParamsSchema), validate(updateCarZSchema), carController.updateCar);
router.delete('/:id', validate(getCarParamsSchema), carController.deleteCar);

export default router;