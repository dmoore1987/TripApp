using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TripApp.Data.Models
{
    public class Friend
    {
        [Key]
        public int FriendshipId { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User Id1 {get; set;}

        public string FriendUserId { get; set; }
        [ForeignKey("FriendUserId")]
        public virtual User Id2 { get; set; }

        public string NickName { get; set; }
       
        

    }
}
