// Remember declare use of pipes in the main.ts
import { IsNotEmpty, IsNumber } from "class-validator";

export class SendUserDto {

    @IsNotEmpty()
    name: string;   

}


// Is not in use. 