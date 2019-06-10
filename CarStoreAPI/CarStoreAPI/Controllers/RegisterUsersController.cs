using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using CarStoreAPI.Models;

namespace CarStoreAPI.Controllers
{
    public class RegisterUsersController : ApiController
    {
        private CarStoreDataEntities db = new CarStoreDataEntities();

        // GET: api/RegisterUsers
        public IQueryable<RegisterUser> GetRegisterUsers()
        {
            return db.RegisterUsers;
        }

        // GET: api/RegisterUsers/5
        [ResponseType(typeof(RegisterUser))]
        public async Task<IHttpActionResult> GetRegisterUser(int id)
        {
            RegisterUser registerUser = await db.RegisterUsers.FindAsync(id);
            if (registerUser == null)
            {
                return NotFound();
            }

            return Ok(registerUser);
        }

        // PUT: api/RegisterUsers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRegisterUser(int id, RegisterUser registerUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != registerUser.Id)
            {
                return BadRequest();
            }

            db.Entry(registerUser).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegisterUserExists(id))
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

        // POST: api/RegisterUsers
        [ResponseType(typeof(RegisterUser))]
        public async Task<IHttpActionResult> PostRegisterUser(RegisterUser registerUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }





            registerUser.RoleId = 1;
            db.RegisterUsers.Add(registerUser);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = registerUser.Id }, registerUser);
        }

        // DELETE: api/RegisterUsers/5
        [ResponseType(typeof(RegisterUser))]
        public async Task<IHttpActionResult> DeleteRegisterUser(int id)
        {
            RegisterUser registerUser = await db.RegisterUsers.FindAsync(id);
            if (registerUser == null)
            {
                return NotFound();
            }

            db.RegisterUsers.Remove(registerUser);
            await db.SaveChangesAsync();

            return Ok(registerUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RegisterUserExists(int id)
        {
            return db.RegisterUsers.Count(e => e.Id == id) > 0;
        }
    }
}