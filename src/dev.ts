import 'dotenv/config'
import 'reflect-metadata'

import path from 'path'
import chokidar from 'chokidar'
import { Storage } from 'discapp'

import { config } from './config'
import { app } from './'

/**
 * Sets the Storage to work on development mode,
 * this way is possible to dinamically replace
 * commands
 */
Storage.__DEV_MODE = true

/**
 * Watches changes on the command directory and
 * reloads or add comand when needed
 */
const devLogger = app.getLogger().scope('dev')

chokidar
  .watch(config.commandsDirectory, {
    ignoreInitial: true,
  })
  .on('change', (commandPath) => {
    delete require.cache[require.resolve(commandPath)]
    require(commandPath)
    devLogger.info("'%s' file was reloaded", path.basename(commandPath))
  })
  .on('add', (commandPath) => {
    require(commandPath)
    devLogger.info(
      "'%s' file was added and registered",
      path.basename(commandPath)
    )
  })
