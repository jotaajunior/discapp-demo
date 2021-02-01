import 'dotenv/config'

import { Application } from 'discapp'

import { config } from './config'

export const app = new Application(config).start()
