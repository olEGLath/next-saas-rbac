'use server'

export default function signInWithEmailAndPassword(data: FormData) {
    console.log(Object.fromEntries(data))
}