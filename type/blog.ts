import { User } from "./user"

export type Blog = {
    _id: string,
    content: string,
    user: User,
    title: string,
    desc: string,
    tags: string[],
    category: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    status: string,
    views: number,
    likes: string[]
}