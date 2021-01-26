import 'dotenv/config'

import { Application } from 'discapp'

import { config } from './config'

new Application().withConfig(config).bootstrap().ignite()
