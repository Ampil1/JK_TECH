import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length, Max } from 'class-validator';

export class UserCreateDTO {
	_id: string
	@ApiProperty()
	@IsString()
	fullName: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	email: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@Length(6, 15)
	password: string;

    role: string;
    salt:string;
}
export class UpdateProfile {
	_id: string
	@ApiProperty()
	fullName: string;

	@ApiProperty()
	password: string
	salt?: string
}

export class LoginDTO {
	@ApiProperty()
	@IsNumber()
	email: string;

	@ApiProperty()
	@IsString()
	password: string;
}

export class LoginResponseDTO {
	@ApiProperty()
	@IsString()
	token: string;

	@ApiProperty()
	@IsString()
	role: string;

	@ApiProperty()
	@IsString()
	id: string;
}

export class ResponseLogin {
	@ApiProperty()
	@IsString()
	response_code: string;

	@ApiProperty()
	response_data: LoginResponseDTO;
}
export class ResponseSuccessMessage {
	@ApiProperty()
	@IsString()
	response_code: string;


	@ApiProperty()
	@IsString()
	response_data: string;
}

export class ResponseBadRequestMessage {

	@ApiProperty()
	@IsNumber()
	status: number;

	@ApiProperty()
	errors: Array<string>;

}
export class ResponseErrorMessage {

	@ApiProperty()
	@IsNumber()
	status: number;

	@ApiProperty()
	@IsString()
	message: string;
}

export class SocialDTO {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	token: string;
}