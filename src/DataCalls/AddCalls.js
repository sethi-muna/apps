
import * as BaseDataCall from '../DataCalls/BaseDataCall';
import Urls from '../Config/Urls.json';

export const AddDataCall = (empObject,EmpCallBack) => {

    BaseDataCall.Autheticate();
    let token = '';
    if (document.cookie !== '') {
        token = document.cookie.split('=')[1];
    }
    if (token !== "" || Urls.IsProd) {
        fetch(Urls.IsProd?Urls.EmployeeGetProd:Urls.EmployeeAddServer, {
            method: "post",
            headers: {
                //'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Urls.IsProd?'':'Bearer ' + token
            },

            body: JSON.stringify({
                firstName: empObject.firstName,
                lastName: empObject.lastName,
                phoneNumber: empObject.phoneNumber,
                email: empObject.email,
                dateOfBirth: empObject.dateOfBirth
            })
        })
            .then((response) => {
                console.log(response);
                EmpCallBack(response);
            })
            .catch((ex) => {
                console.log()
            })
    }
}