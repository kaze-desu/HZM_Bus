import axios from "axios";
import {useSessionStore} from '@/store/Session';
import { Snackbar } from '@varlet/ui';

export default function()
{
    /**
     * Login function
     * @param username the username
     * @param password the password
     */
    function login(username: string, password: string)
    {
        if(username.length<8 || password.length<8)
        {
            Snackbar["error"]("Username and password must be at least 8 characters long.");
        }
        else
        {
            axios.post("http://localhost:8000/api/login", { username, password }).then((response) =>
                {
                    let status = response.data['status'];
                    if(status)
                    {
                        useSessionStore().username = username;
                        useSessionStore().password = password;
                        useSessionStore().status = status;
                        Snackbar["success"]("Login successfully.");
                    }
                    else
                    {
                        Snackbar["error"]("Invalid password.");
                    }
                }).catch((error) =>
                {
                    Snackbar["error"]("Oops! Something went wrong: "+error);
                });
        }

    }
    return { login };
}