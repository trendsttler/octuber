import axios from 'axios';
const Base_Url = 'http://localhost:8080/'


export function loggin(userdetail) {

    return axios.post(Base_Url + 'login', {
        email: userdetail.email,
        password: userdetail.password
    })
}

export function forget(userdetail) {
    console.log('userdetail for for get password', userdetail)
    return axios.post(Base_Url + 'forgot-password', {
        email: userdetail.email,

    })
}
export function getPayment(userdetail) {
    console.log('userdetail', userdetail)
    var header = {
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + userdetail.token
    }
    return axios.post(Base_Url + 'user/createcustomer/record', {
        id: userdetail.id
    }, { headers: header })
}

export function getSubDetail(userdetail) {
    console.log('check subscription', userdetail.token)
    var header = {
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + userdetail.token
    }
    return axios.get(Base_Url + 'user/allusers', { headers: header })
}

export function userUpdate(userdetail) {
    console.log('userdetail', userdetail)
    var header = {
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + userdetail.token
    }
    return axios.post(Base_Url + 'user/update/profile', {
        email: userdetail.email,
        first_name: userdetail.first_name,
        last_name: userdetail.last_name,
        city: userdetail.city,
        birthday: userdetail.birthday
    }, { headers: header })
}
export function setPassword(userdetail) {
    console.log('reset password', userdetail)
    //   var header = {
    //       'Content-Type': 'application/json',
    //       'authorization': 'bearer ' + userdetail.token
    //   }
    return axios.post(Base_Url + 'reset-password', {
        token: userdetail.resettoken,
        password: userdetail.password
    })
}
export function getUpdateToken(userdetail) {

    //   var header = {
    //       'Content-Type': 'application/json',
    //       'authorization': 'bearer ' + userdetail.token
    //   }
    return axios.post(Base_Url + 'refresh-token', {
        refresh_token: userdetail.refresh_token,

    })
}

export function signup(userdetail) {
    console.log('check signup detail', userdetail);
    return axios.post(Base_Url + 'signup', {
        city: userdetail.city,
        last_name: userdetail.last_name,
        first_name: userdetail.first_name,
        email: userdetail.email,
        password: userdetail.password,
        code: userdetail.code,
        birthday: userdetail.birthday,
        subscribe_partners: false,

    });
}