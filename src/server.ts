import 'module-alias/register'
import 'source-map-support/register'

import runApp from '@/helpers/runApp'
import runBot from '@/telegram/bot'
import runMongo from '@/helpers/mongo'

void (async () => {
  console.log('Starting mongo')
  await runMongo()
  console.log('Mongo connected')
  await runApp()
  await runBot()
})()
