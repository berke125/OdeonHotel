using HotelWebAPI.LINQ;
using HotelWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HotelWebAPI.Controllers
{
    public class RoomViewController : ApiController
    {
        private dbLINQDataContext db = new dbLINQDataContext();

        public List<RoomPoco> GetRoom()
        {
            List<ROOMVIEW> roomdblist = (from x in db.ROOMVIEW

                                         orderby x.ODANO
                                         select x).ToList();

            List<RoomPoco> roomlistPoco = new List<RoomPoco>();
            foreach (var roomdb in roomdblist)
            {
                string odano = roomdb.ODANO;
                RoomPoco roomPoco = new RoomPoco
                {
                    OdaNo = roomdb.ODANO,
                    OdaTip = roomdb.ODATIP,
                    No = Convert.ToInt32(roomdb.NO),
                    Title = roomdb.TITLE,
                    FirstName = roomdb.FIRSTNAME,
                    LastName = roomdb.LASTNAME,
                    FromDate = roomdb.FROMDATE,
                    ToDate = roomdb.TODATE
                };

                roomlistPoco.Add(roomPoco);
            }


            return roomlistPoco;
        }
        public List<RoomPoco> GetRoomsByFilter(string roomsfilter)
        {
            List<ROOMVIEW> roomdblist = new List<ROOMVIEW>();
            switch (roomsfilter)
            {
                case "1":
                    roomdblist = (from x in db.ROOMVIEW 
                                  orderby x.ODANO
                                  select x).ToList();
                    break;
                case "2":
                    roomdblist = (from x in db.ROOMVIEW
                                  where  (x.LASTNAME == "" || x.LASTNAME == null)
                                  orderby x.ODANO
                                  select x).ToList();
                    break;
                case "3":
                    roomdblist = (from x in db.ROOMVIEW
                                  where (x.LASTNAME != "" || x.LASTNAME != null)
                                  orderby x.ODANO
                                  select x).ToList();
                    break;
            }
             
            List<RoomPoco> roomlistPoco = new List<RoomPoco>();
            foreach (var roomdb in roomdblist)
            {
                string odano = roomdb.ODANO;
                RoomPoco roomPoco = new RoomPoco
                {
                    OdaNo = roomdb.ODANO,
                    OdaTip = roomdb.ODATIP,
                    No = Convert.ToInt32(roomdb.NO),
                    Title = roomdb.TITLE,
                    FirstName = roomdb.FIRSTNAME,
                    LastName = roomdb.LASTNAME,
                    FromDate = roomdb.FROMDATE,
                    ToDate = roomdb.TODATE
                };

                roomlistPoco.Add(roomPoco);
            }


            return roomlistPoco;
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
