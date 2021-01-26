import path from 'path'
import { DiscappConfig } from 'discapp'

export const config: DiscappConfig = {
  /**
   * Commands directory path
   *
   * Defines the path which the commands will be imported from.
   */
  commandsDirectory: path.resolve(__dirname, './commands'),

  /**
   * The Discord token
   */
  token: String(process.env.DISCORD_TOKEN),

  /**
   * The message prefix.
   *
   * Leave it empty for no prefix.
   */
  prefix: '!',

  /**
   * Discapp hooks
   */
  hooks: {
    beforeCommand: [],
    afterCommand: [],
  },
}
