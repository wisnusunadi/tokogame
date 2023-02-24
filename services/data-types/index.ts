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

}