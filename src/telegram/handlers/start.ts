import Context from '@/telegram/models/Context'

export default function handleStart(ctx: Context) {
  return ctx.reply(`твой MongoId: ${ctx.dbuser.id}`)
}
