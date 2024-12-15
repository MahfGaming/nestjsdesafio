import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usurname: string;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @Column()
    isAtive: boolean; 
}