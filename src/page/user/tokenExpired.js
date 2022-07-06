// api
import {token} from '../../api/token'
import { Redirect } from 'react-router-dom';

export function checkToken () {
    if (!token.user_id) {
        return <Redirect to='/' />;
    }
}