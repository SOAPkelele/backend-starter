import { NextFunction } from 'grammy'
import { findOrCreateTelegramUser } from '@/models/User'
import Context from '@/telegram/models/Context'

export default async function attachUser(ctx: Context, next: NextFunction) {
  if (!ctx.from) {
    throw new Error('No from field found')
  }
  const user = await findOrCreateTelegramUser({
    telegramUsername: ctx.from.username,
    telegramId: ctx.from.id,
  })
  if (!user) {
    throw new Error('User not found')
  }
  ctx.dbuser = user
  return next()
}
