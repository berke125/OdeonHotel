using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using HotelWebAPI.Models;
using System.Web.Mvc;
using System.Web;
using HotelWebAPI.LINQ;

namespace HotelWebAPI.Controllers
{
    public class USERsController : ApiController
    {
        private dbLINQDataContext db = new dbLINQDataContext();
        public UserPoco GetLogin(string code, string password)
        {
            var userdb = db.USERS.FirstOrDefault(e => e.CODE == code && e.PASSW == password);
            if (userdb == null)
                return new UserPoco { IsLogin=false };
            else
            {
                UserPoco userpoco = new UserPoco
                {
                    IsLogin = true,
                    LoginTime = DateTime.Now,
                    Code = userdb.CODE,
                    ProfileId = Convert.ToInt32(userdb.PROFILEID),                   
                };
                var musteridb = db.MUSTERI.FirstOrDefault(e => e.MUSNO == userpoco.ProfileId);
                if (musteridb != null)
                {
                    userpoco.FirstName = musteridb.FIRSTNAME;
                    userpoco.LastName = musteridb.LASTNAME;
                }
                return userpoco;
            }
        }
 
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerExists(string code)
        {
            return db.USERS.Count(e => e.CODE == code) > 0;
        }
    }
}