import { Document, Model } from 'mongoose'

export type TFullName = {
  firstName: string
  lastName: string
}

export type TAddress = {
  street: string
  city: string
  country: string
}

export type TOrder = {
  productName: string
  price: number
  quantity: number
}

export type TUser = Document & {
  userId: number
  username: string
  password: string
  fullName: TFullName
  age: number
  email: string
  isActive: boolean
  isDeleted: boolean
  hobbies: string[]
  address: TAddress
  orders: TOrder[]
}

export interface UserModel extends Model<TUser> {
  isUserExists(id: number): Promise<TUser | null>
}
