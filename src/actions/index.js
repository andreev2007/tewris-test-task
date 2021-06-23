import axios from 'axios'

const baseUrl = "https://randomuser.me/api/"

export const getMale = () => {
    return (dispatch) => {
        return axios.get(baseUrl + "?results=10&gender=male&inc=gender,name,picture").then(response => {
            dispatch(changeMale(response.data.results))
        })
    }
}

export const getFemale = () => {
    return (dispatch) => {
        return axios.get(baseUrl + "?results=10&gender=female&inc=gender,name,picture").then(response => {
           dispatch(changeFemale(response.data.results))
        })
    }
}

export const getAll = () => {
    return (dispatch) => {
        dispatch(getMale())
        dispatch(getFemale())
    }
}

export const changeMale = male => {
    return {
        type: "GOT_MALE",
        male: male
    }
}

export const changeFemale = female => {
    return {
        type: "GOT_FEMALE",
        female: female
    }
}
