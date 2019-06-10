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
    public class CarsImagesDataController : ApiController
    {
        private CarStoreDataEntities db = new CarStoreDataEntities();

        // GET: api/CarsImagesData
        public IQueryable<CarsImage> GetCarsImages()
        {
            return db.CarsImages;
        }

        // GET: api/CarsImagesData/5
        [ResponseType(typeof(CarsImage))]
        public async Task<IHttpActionResult> GetCarsImage(int id)
        {
            CarsImage carsImage = await db.CarsImages.FindAsync(id);
            if (carsImage == null)
            {
                return NotFound();
            }

            return Ok(carsImage);
        }

        // PUT: api/CarsImagesData/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCarsImage(int id, CarsImage carsImage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carsImage.CarId)
            {
                return BadRequest();
            }

            db.Entry(carsImage).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarsImageExists(id))
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

        // POST: api/CarsImagesData
        [ResponseType(typeof(CarsImage))]
        public async Task<IHttpActionResult> PostCarsImage(CarsImage carsImage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CarsImages.Add(carsImage);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = carsImage.CarId }, carsImage);
        }

        // DELETE: api/CarsImagesData/5
        [ResponseType(typeof(CarsImage))]
        public async Task<IHttpActionResult> DeleteCarsImage(int id)
        {
            CarsImage carsImage = await db.CarsImages.FindAsync(id);
            if (carsImage == null)
            {
                return NotFound();
            }

            db.CarsImages.Remove(carsImage);
            await db.SaveChangesAsync();

            return Ok(carsImage);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarsImageExists(int id)
        {
            return db.CarsImages.Count(e => e.CarId == id) > 0;
        }
    }
}