import { Command, BaseCommand } from 'discapp'

@Command('ping')
export default class PingCommand extends BaseCommand {
  public execute() {
    return 'Pong'
  }
}
