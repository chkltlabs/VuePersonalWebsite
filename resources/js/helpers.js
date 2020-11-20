window.getJWT = function() {
    let jwt = localStorage.getItem('jwt')
    if (!jwt) {
        axios
            //todo replace hard-coded values with something more secure. env can be accessed with process.env.ENV_VAR_IN_ALL_CAPS
            .post('/api/login', {email: 'erik@erikgratz.com', password: '12Characters'})
            .then(response => (storeToken(response)))
            .catch(error => console.log(error))
        jwt = localStorage.getItem('jwt');
    }
    if(!jwt){
        return null;
    }
    return JSON.parse(jwt);
};

window.refreshJWT = function(){
    let jwt = getJWT();
    let headers = jwt.headers;
    if(headers['x-ratelimit-remaining'] < 30){
        axios
            .get('/api/refresh')
            .then(response => (storeToken(response)))
            .catch(error => (console.log(error)))
    }
}

window.storeToken = function(jwtObj){
    if(typeof jwtObj == 'string'){
        jwtObj = JSON.parse(jwtObj);
    }
    localStorage.setItem('jwt', JSON.stringify(jwtObj));
    window.axios.defaults.headers.common['Authorization'] = `bearer ${jwtObj.data.token}`
}

