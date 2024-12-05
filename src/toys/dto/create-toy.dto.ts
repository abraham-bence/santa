import { Decimal } from "@prisma/client/runtime/library";
import { Equals, IsAlphanumeric, IsDecimal, IsDefined, IsIn, IsNumber, IsString } from "class-validator";

export class CreateToyDto {
    @IsDefined({
        message: "Name field must be filled!"
    })
    @IsString()
    name: string
    @IsDefined({
        message: "Material must be filled!"
    })
    @IsString()
    @IsIn(["wood", "metal", "plastic", "other"],{
        message : "Material field has to match [wood, metal, plastic, other]"
    })
    material: string
    @IsDefined({
        message: "Weight field must be filled!"
    })
    @IsNumber({maxDecimalPlaces:2})
    weight: Decimal
}
