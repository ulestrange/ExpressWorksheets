import { Schema, model } from 'mongoose';
import { z } from 'zod';

import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
 
extendZodWithOpenApi(z);


export const createCarZSchema = z.object({
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().min(1950).optional(),
}).openapi("CreateCarInput");



export type CreateCarInput = z.infer<typeof createCarZSchema>;


const carSchema = new Schema<ICar>(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number,  min: 1950 },
  },
  { timestamps: true }
);


export interface ICar {
  make: string;
  model: string;
  year?: number;

}


export const CarModel = model<ICar>('Car', carSchema);