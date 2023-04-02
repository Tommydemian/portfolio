export const classNames = (...classes:Array<string | undefined | null>) => {
    return classes.filter(Boolean).join(' ')

}