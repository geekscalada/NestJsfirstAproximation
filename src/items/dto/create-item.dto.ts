// Remember declare use of pipes in the main.ts
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateItemDto {

    @IsNotEmpty()
    name: string;

    @IsNumber()
    price: number;

    @IsNotEmpty()
    description: string

}
