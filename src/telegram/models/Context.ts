import { Context as BaseContext } from 'grammy'
import { DocumentType } from '@typegoose/typegoose'
import { User } from '@/models/User'

class Context extends BaseContext {
  dbuser!: DocumentType<User>
}

export default Context
