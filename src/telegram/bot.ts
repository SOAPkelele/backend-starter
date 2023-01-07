import 'module-alias/register'
import 'reflect-metadata'
import 'source-map-support/register'

import { Bot } from 'grammy'
import { run } from '@grammyjs/runner'
import { sequentialize } from 'grammy-middlewares'
import Context from '@/telegram/models/Context'
import attachUser from '@/telegram/middlewares/attachUser'
import env from '@/helpers/env'
import setBotCommands from '@/telegram/helpers/setBotCommands'
import start from '@/telegram/handlers/start'

export const bot = new Bot<Context>(env.TELEGRAM_LOGIN_TOKEN, {
  ContextConstructor: Context,
})

export default async function runBot() {
  console.log('Starting bot...')
  bot
    // Middlewares
    .use(sequentialize())
    .use(attachUser)
  // Commands
  bot.command('start', start)

  // Errors
  bot.catch(console.error)
  // Start bot
  await bot.init()
  await setBotCommands(bot)

  run(bot)

  console.info(`Bot ${bot.botInfo.username} is up and running`)
}
