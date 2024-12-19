import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
    @ApiProperty({ example: 'usuario123', description: 'Nombre de usuario' })
    @IsString()
    @IsNotEmpty()
    usurname: string;

    @ApiProperty({ example: 'contraseñaSegura123', description: 'Contraseña del usuario' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: 'usuario@ejemplo.com', description: 'Correo electrónico del usuario' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: true, description: 'Estado del usuario (activo/inactivo)' })
    @IsBoolean()
    isActive: boolean;
}