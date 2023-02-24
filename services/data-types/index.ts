export interface Category {
    _id: string;
    name: string;
    __v: number;

}
export interface GameItemTypes {
    _id: string;
    name: string;
    status: string;
    thumbnail: string;
    category: Category
}
export interface SignInTypes {
    email: string;
    password: string;

}
export interface UserTypes {
    id: string,
    name: string,
    username: string,
    email: string,
    avatar: string

}
export interface JWTPayloadTypes {
    player: UserTypes,
    iat: number
}