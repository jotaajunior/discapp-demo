import { Command, BaseCommand, Argument, Author } from 'discapp'
import { User } from 'discord.js'

@Command('greet')
export default class GreetCommand extends BaseCommand {
  @Argument({
    isRequired: false,
  })
  public name!: string

  @Author()
  public author!: User

  public execute() {
    return `Hello, ${this.name ? this.name : `<@${this.author.id}>`}`
  }
}
