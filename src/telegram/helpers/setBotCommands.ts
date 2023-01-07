import { Bot } from 'grammy'
import Context from '@/telegram/models/Context'

export default async function (bot: Bot<Context>) {
  await bot.api.deleteMyCommands() // нужно ?
  await bot.api.setMyCommands([{ command: 'start', description: 'старт' }])
}
