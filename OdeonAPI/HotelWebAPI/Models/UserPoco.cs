using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelWebAPI.Models
{
    public class UserPoco
    {
        public string Code { get; set; }
        public int ProfileId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsLogin { get; set; }
        public DateTime LoginTime { get; set; }
    }
}