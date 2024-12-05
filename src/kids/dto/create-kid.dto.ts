import { IsBoolean, IsDefined, IsString } from "class-validator";

export class CreateKidDto {
    @IsDefined({
        message: "Name field must be filled!"
    })
    @IsString()
    name : string
    @IsDefined({
        message: "Address field must be filled!"
    })
    @IsString()
    address : string
    @IsDefined({
        message: "WasGood field must be filled!"
    })
    @IsBoolean()
    wasGood : boolean

}
