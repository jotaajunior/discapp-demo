import { Command, BaseCommand, Argument } from 'discapp'

@Command('greet')
export default class GreetCommand extends BaseCommand {
  @Argument()
  public name: string

  public execute() {
    return `Hello, ${this.name}`
  }
}
