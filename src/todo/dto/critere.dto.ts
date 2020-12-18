import { TodoStatusEnum } from '../enums/todo-status.enum';
import { IsIn, IsNotEmpty} from 'class-validator';

export class CritereDTO {

    @IsNotEmpty()
    chaine: string;


    @IsIn([
        TodoStatusEnum.actif,
        TodoStatusEnum.waiting,
        TodoStatusEnum.done  
    ])
    statut: TodoStatusEnum
}