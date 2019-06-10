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
    public class RentTablesController : ApiController
    {
        private CarStoreDataEntities db = new CarStoreDataEntities();

        // GET: api/RentTables
        public IQueryable<RentTable> GetRentTables()
        {
            return db.RentTables;
        }



        // GET: api/RentTables/5
        [ResponseType(typeof(RentTable))]
        public async Task<IHttpActionResult> GetRentTable(int id)
        {
            
            RentTable rentTable = await db.RentTables.FindAsync(id);
            if (rentTable == null)
            {
                return NotFound();
            }

            return Ok(rentTable);
        }

        // PUT: api/RentTables/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRentTable(int id, RentTable rentTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rentTable.Id)
            {
                return BadRequest();
            }

            db.Entry(rentTable).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentTableExists(id))
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

        // POST: api/RentTables
        [ResponseType(typeof(RentTable))]
        public async Task<IHttpActionResult> PostRentTable(RentTable rentTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RentTables.Add(rentTable);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = rentTable.Id }, rentTable);
        }

        // DELETE: api/RentTables/5
        [ResponseType(typeof(RentTable))]
        public async Task<IHttpActionResult> DeleteRentTable(int id)
        {
            RentTable rentTable = await db.RentTables.FindAsync(id);
            if (rentTable == null)
            {
                return NotFound();
            }

            db.RentTables.Remove(rentTable);
            await db.SaveChangesAsync();

            return Ok(rentTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RentTableExists(int id)
        {
            return db.RentTables.Count(e => e.Id == id) > 0;
        }
    }
}