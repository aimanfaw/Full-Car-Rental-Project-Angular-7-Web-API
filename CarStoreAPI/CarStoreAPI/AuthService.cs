using CarStoreAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarStoreAPI
{
    public class AuthService
    {
        public static RegisterUser GetLoginUser(string username, string password)
        {
            using (var db = new CarStoreDataEntities())
            {
                var user = db.RegisterUsers.FirstOrDefault(x => x.UserName == username && x.Password == password);
                return user;

            }
        }
    }
}