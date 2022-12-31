
import * as BaseDataCall from '../DataCalls/BaseDataCall';
import Urls from '../Config/Urls.json';

export const EmployeeGetCall = (EmpCallback) =>{

    BaseDataCall.Autheticate();

    var token = "";
        if (document.cookie !== '') {
            token = document.cookie.split('=')[1];
        }
        if (token !== "" || Urls.IsProd || Urls.IsNoAuthOn) {
            fetch(Urls.IsProd?Urls.EmployeeGetProd:
                Urls.IsLocal?Urls.EmployeeAddLocal:
                Urls.EmployeeAddServer,
                {
                    headers: Urls.IsProd?{}:{
                        'Authorization': 'Bearer ' + token
                    }
                }
            ) //http://localhost:5001/authentication  //http://localhost/employeeApp/api/employee
                .then(response => response.json())
                .then(data => {
                    EmpCallback(data);
                })
        }

}