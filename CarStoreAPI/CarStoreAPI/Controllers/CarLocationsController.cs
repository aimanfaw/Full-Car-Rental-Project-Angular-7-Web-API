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
    public class CarLocationsController : ApiController
    {
        private CarStoreDataEntities db = new CarStoreDataEntities();

        // GET: api/CarLocations
        public IQueryable<CarLocation> GetCarLocations()
        {
            return db.CarLocations;
        }

        // GET: api/CarLocations/5
        [ResponseType(typeof(CarLocation))]
        public async Task<IHttpActionResult> GetCarLocation(int id)
        {
            CarLocation carLocation = await db.CarLocations.FindAsync(id);
            if (carLocation == null)
            {
                return NotFound();
            }

            return Ok(carLocation);
        }

        // PUT: api/CarLocations/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCarLocation(int id, CarLocation carLocation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carLocation.Id)
            {
                return BadRequest();
            }

            db.Entry(carLocation).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarLocationExists(id))
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

        // POST: api/CarLocations
        [ResponseType(typeof(CarLocation))]
        public async Task<IHttpActionResult> PostCarLocation(CarLocation carLocation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CarLocations.Add(carLocation);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = carLocation.Id }, carLocation);
        }

        // DELETE: api/CarLocations/5
        [ResponseType(typeof(CarLocation))]
        public async Task<IHttpActionResult> DeleteCarLocation(int id)
        {
            CarLocation carLocation = await db.CarLocations.FindAsync(id);
            if (carLocation == null)
            {
                return NotFound();
            }

            db.CarLocations.Remove(carLocation);
            await db.SaveChangesAsync();

            return Ok(carLocation);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarLocationExists(int id)
        {
            return db.CarLocations.Count(e => e.Id == id) > 0;
        }
    }
}