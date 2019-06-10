using CarStoreAPI.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace CarStoreAPI.Controllers
{
    public class ImagesController : ApiController
    {
        [HttpPost]
        [Route("api/Uploading")]
        public HttpResponseMessage UploadImage()
        {

         string imageName = null;
          var httpRequest = HttpContext.Current.Request;

          //uploading

          var postedFile = httpRequest.Files["ImageName"];

          //create custome filename

          imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
          imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
          var filePath = HttpContext.Current.Server.MapPath("/CarsImages/" + imageName);
          postedFile.SaveAs(filePath);

          //save it to DB 
          using (CarStoreDataEntities db = new CarStoreDataEntities())
          {
              CarsImage images = new CarsImage()
              {

                  CarModel= httpRequest["CarModel"],
                  ImageName = imageName
              };
              db.CarsImages.Add(images);
              db.SaveChanges();
          }
          return Request.CreateResponse(HttpStatusCode.Created);
      }
  }
  }
    

