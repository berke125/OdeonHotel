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
    public class CustomerController : ApiController
    {
        private HotelDB db = new HotelDB();
 
        // GET: api/Customer
        public List<Customer> GetCustomers()
        {
            return db.Customers.ToList();
        }

        //GET: api/Customer/{id}
        public Customer GetCustomersbyID(int id)
        {
            var arananID = db.Customers.FirstOrDefault(e => e.Id == id);
            if (arananID == null)
                return new Customer();
            else
                return arananID;

        }

        public Customer GetCustomersbyEMail(string email)
        {
            try
            {
                return db.Customers.FirstOrDefault(e => e.EMail == email);
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        public Customer GetLogin(string email, string password)
        {
            var customer = db.Customers.FirstOrDefault(e => e.EMail == email && e.Password == password);
            if (customer == null)
                return new Customer { Id = 0 };
            else
                return customer;
        }

        // PUT: api/Customer/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomer(int id, Customer customer)
        {


            if (id != customer.Id)
            {
                return BadRequest();
            }

            db.Entry(customer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
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
        [ResponseType(typeof(Customer))]
        public IHttpActionResult PostCustomer(Customer customer)
        {
            Customer old = null;
            old=GetCustomersbyEMail(customer.EMail);
            
            if (old==null)
            {          
                db.Customers.Add(customer);
                db.SaveChanges();
            }
            
            return CreatedAtRoute("DefaultApi", new { id = customer.Id }, customer);
        }

        // DELETE: api/Customer/5
        [ResponseType(typeof(Customer))]
        public IHttpActionResult DeleteCustomer(int id)
        {
            Customer customer = db.Customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            db.Customers.Remove(customer);
            db.SaveChanges();

            return Ok(customer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerExists(int id)
        {
            return db.Customers.Count(e => e.Id == id) > 0;
        }
    }
}