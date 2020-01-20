using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelWebAPI.Models
{
    public class RoomPoco
    {
        public string OdaNo { get; set; }
        public string OdaTip { get; set; }
        public int No { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string Agency { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}