declare global {
    /** this function we used to change the date into string so we can used it to dioplay */
    function dateFormate(date: Date): string
    interface Window {
        /**This globle varable which we user  we extend the existing module */
        MY_VAL: string
    }
}
export { }