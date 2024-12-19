import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @ApiProperty({ example: 'nuevoUsuario123', description: 'Nombre de usuario', required: false })
    @IsString()
    @IsOptional()
    usurname?: string;

    @ApiProperty({ example: 'nuevaContraseñaSegura123', description: 'Contraseña del usuario', required: false })
    @IsString()
    @IsOptional()
    password?: string;

    @ApiProperty({ example: 'nuevoUsuario@ejemplo.com', description: 'Correo electrónico del usuario', required: false })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({ example: false, description: 'Estado del usuario (activo/inactivo)', required: false })
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}