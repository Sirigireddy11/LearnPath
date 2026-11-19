import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
const $ = id => document.getElementById(id);
let signup = false;
const params = new URLSearchParams(location.search);
const rawNext = params.get("next") || "index.html";
const next = /^[a-zA-Z0-9_-]+\.html(?:#[a-zA-Z0-9_-]+)?$/.test(rawNext) ? rawNext : "index.html";
function message(text, error=false){ $("status").textContent=text; $("status").style.color=error?"#b42318":"#187344"; }
function updateMode(){ $("title").textContent=signup?"Create your account":"Welcome back"; $("subtitle").textContent=signup?"Sign up to start learning.":"Sign in to continue learning."; $("nameBox").hidden=!signup; $("confirmBox").hidden=!signup; $("name").required=signup; $("confirm").required=signup; $("password").autocomplete=signup?"new-password":"current-password"; $("submit").textContent=signup?"Create Account":"Sign In"; $("toggle").textContent=signup?"I already have an account":"Create a new account"; $("reset").hidden=signup; message(""); }
$("toggle").addEventListener("click",()=>{signup=!signup;updateMode();});
$("form").addEventListener("submit",async e=>{e.preventDefault();message("");$("submit").disabled=true;try{
const email=$("email").value.trim(), password=$("password").value;
if(signup){if(password!==$("confirm").value){message("Passwords do not match.",true);return;}const cred=await createUserWithEmailAndPassword(auth,email,password);await updateProfile(cred.user,{displayName:$("name").value.trim()});}
else{await signInWithEmailAndPassword(auth,email,password);}
location.replace(next);
}catch(err){const messages={"auth/email-already-in-use":"This email already has an account. Please sign in.","auth/invalid-email":"Enter a valid email address.","auth/weak-password":"Use at least 6 characters for the password.","auth/invalid-credential":"Email or password is incorrect.","auth/too-many-requests":"Too many attempts. Wait a little and try again.","auth/network-request-failed":"Check your internet connection."};message(messages[err.code]||"Could not sign in or sign up. Check Firebase settings and try again.",true);}finally{$("submit").disabled=false;}});
$("reset").addEventListener("click",async()=>{const email=$("email").value.trim();if(!email){message("Enter your email first.",true);$("email").focus();return;}try{await sendPasswordResetEmail(auth,email);message("If the account exists, a password-reset email has been sent.");}catch{message("Could not send reset email. Check the email address and Firebase settings.",true);}});
onAuthStateChanged(auth,user=>{if(user)location.replace(next);});
