import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';
import { User } from './usuarios.entity';
import { UpdateUsuarioDto } from './dto/update-usuario.dto'; // Cambia aquí

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuarioService: UsuariosService) {}

    @Get()
    async getUsuarios(): Promise<User[]> {
        return this.usuarioService.getUsuarios();
    }

    @Get(':id')
    async getUsuario(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.getUsuario(id);
    }

    @Post()
    async createUsuario(@Body() newUsuario: CreateUsuarioDto) {
        return this.usuarioService.createUsuario(newUsuario);
    }

    @Delete(':id')
    async deleteUsuario(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.deleteUsuario(id);
    }

    @Patch(':id')
    async updateUsuario(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUsuarioDto) { // Cambia aquí
        return this.usuarioService.updateUsuario(id, user);
    }
}