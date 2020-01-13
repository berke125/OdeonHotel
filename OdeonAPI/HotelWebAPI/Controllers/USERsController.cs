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

namespace HotelWebAPI.Controllers
{
    public class USERsController : ApiController
    {
        private CESTUREntities db = new CESTUREntities();

        // GET: api/Customer
        public List<USER> GetUsers()
        {
            return db.USERS.ToList();
        }

        //GET: api/Customer/{id}
        public USER GetUsersbyCode(string code)
        {
            var searchingCode = db.USERS.FirstOrDefault(e => e.CODE == code);
            if (searchingCode == null)
                return new USER();
            else
                return searchingCode;

        }

        //public USER GetCustomersbyEMail(string email)
        //{
        //    try
        //    {
        //        return db.USERS.FirstOrDefault(e => e.EMAIL == email);
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //    }

        //}
        public USER GetLogin(string code, string password)
        {
            var user = db.USERS.FirstOrDefault(e => e.CODE == code && e.PASSW == password);
            if (user == null)
                return new USER();
            else
                return user;
        }

        // PUT: api/Customer/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(string code, USER user)
        {


            if (code != user.CODE)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(code))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Customer
        [ResponseType(typeof(USER))]
        public IHttpActionResult PostUser(USER user)
        {
            USER old = null;
            old = GetUsersbyCode(user.CODE);

            if (old == null)
            {
                db.USERS.Add(user);
                db.SaveChanges();
            }

            return CreatedAtRoute("DefaultApi", new { code = user.CODE }, user);
        }

        // DELETE: api/Customer/5
        [ResponseType(typeof(USER))]
        public IHttpActionResult DeleteUser(string code)
        {
            USER user = db.USERS.Find(code);
            if (user == null)
            {
                return NotFound();
            }

            db.USERS.Remove(user);
            db.SaveChanges();

            return Ok(user);
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