import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Recipes } from "./Recipes";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  Text: String;

  @Column({})
  Name: String;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Recipes)
  @JoinColumn()
  recipe: Recipes;
}
