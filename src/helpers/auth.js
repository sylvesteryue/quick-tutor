import {auth} from "../services/firebase";

export function signup(email, password) {
    console.log(email);
    console.log(password);
    return auth().createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}
