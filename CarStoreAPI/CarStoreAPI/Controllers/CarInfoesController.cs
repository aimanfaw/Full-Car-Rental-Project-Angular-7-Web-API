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
    public class CarInfoesController : ApiController
    {
        private CarStoreDataEntities db = new CarStoreDataEntities();

        // GET: api/CarInfoes
        public IQueryable<CarInfo> GetCarInfoes()
        {
            return db.CarInfoes;
        }

        // GET: api/CarInfoes/5
        [ResponseType(typeof(CarInfo))]
        public async Task<IHttpActionResult> GetCarInfo(int id)
        {
            CarInfo carInfo = await db.CarInfoes.FindAsync(id);
            if (carInfo == null)
            {
                return NotFound();
            }

            return Ok(carInfo);
        }

        // PUT: api/CarInfoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCarInfo(int id, CarInfo carInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carInfo.CarId)
            {
                return BadRequest();
            }

            db.Entry(carInfo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarInfoExists(id))
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

        // POST: api/CarInfoes
        [ResponseType(typeof(CarInfo))]
        public async Task<IHttpActionResult> PostCarInfo(CarInfo carInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CarInfoes.Add(carInfo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = carInfo.CarId }, carInfo);
        }

        // DELETE: api/CarInfoes/5
        [ResponseType(typeof(CarInfo))]
        public async Task<IHttpActionResult> DeleteCarInfo(int id)
        {
            CarInfo carInfo = await db.CarInfoes.FindAsync(id);
            if (carInfo == null)
            {
                return NotFound();
            }

            db.CarInfoes.Remove(carInfo);
            await db.SaveChangesAsync();

            return Ok(carInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarInfoExists(int id)
        {
            return db.CarInfoes.Count(e => e.CarId == id) > 0;
        }
    }
}