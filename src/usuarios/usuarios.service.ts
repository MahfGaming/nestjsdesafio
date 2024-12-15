import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './usuarios.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { updateUsuarioDto } from './dto/update-usuario.dto'

@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(User) private usuarioRepository: Repository<User>) {}

    async createUsuario(user: CreateUsuarioDto) {
    const userFound = await this.usuarioRepository.findOne({
            where: {
                usurname: user.usurname
            }
        })

        if (userFound) {
            return new HttpException('Usuario ya existe', HttpStatus.CONFLICT)
        }

        const newUser  = this.usuarioRepository.create(user);
        return this.usuarioRepository.save(newUser );
    }

    async getUsuarios() {
        return this.usuarioRepository.find();
    }


    async getUsuario(id: number) {
        const userFound = await this.usuarioRepository.findOne({where: {id}})

        if (!userFound){
            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        return userFound;
    }


    async deleteUsuario(id: number) {
        const result = await this.usuarioRepository.delete({ id });

        if (result.affected === 0) {

            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    async updateUsuario(id: number, user: updateUsuarioDto) {
        const userFound = await this.usuarioRepository.findOne({where: {id}})

        if (!userFound) {
            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }

        const updateUsuario = Object.assign(userFound, user)
        return this.usuarioRepository.save(updateUsuario)
    }

}