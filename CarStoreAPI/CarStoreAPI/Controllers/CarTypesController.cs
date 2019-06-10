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
    public class CarTypesController : ApiController
    {
        private CarStoreDataEntities db = new CarStoreDataEntities();

        // GET: api/CarTypes
        public IQueryable<CarType> GetCarTypes()
        {
            return db.CarTypes;
        }

        // GET: api/CarTypes/5
        [ResponseType(typeof(CarType))]
        public async Task<IHttpActionResult> GetCarType(int id)
        {
            CarType carType = await db.CarTypes.FindAsync(id);
            if (carType == null)
            {
                return NotFound();
            }

            return Ok(carType);
        }

        // PUT: api/CarTypes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCarType(int id, CarType carType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carType.CarId)
            {
                return BadRequest();
            }

            db.Entry(carType).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarTypeExists(id))
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

        // POST: api/CarTypes
        [ResponseType(typeof(CarType))]
        public async Task<IHttpActionResult> PostCarType(CarType carType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CarTypes.Add(carType);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = carType.CarId }, carType);
        }

        // DELETE: api/CarTypes/5
        [ResponseType(typeof(CarType))]
        public async Task<IHttpActionResult> DeleteCarType(int id)
        {
            CarType carType = await db.CarTypes.FindAsync(id);
            if (carType == null)
            {
                return NotFound();
            }

            db.CarTypes.Remove(carType);
            await db.SaveChangesAsync();

            return Ok(carType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarTypeExists(int id)
        {
            return db.CarTypes.Count(e => e.CarId == id) > 0;
        }
    }
}