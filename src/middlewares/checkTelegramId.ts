import { Context, Next } from 'koa'
import { badRequest } from '@hapi/boom'

export default function checkTelegramId(ctx: Context, next: Next) {
  const user = ctx.state.user

  if (!user.telegramId) return ctx.throw(badRequest('No telegram id'))

  return next()
}
