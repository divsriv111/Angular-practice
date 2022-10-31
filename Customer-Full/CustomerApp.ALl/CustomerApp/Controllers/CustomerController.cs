using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private static List<Customer> _custList = new List<Customer>();

        [HttpGet("GetAllCustomers")]
        public ActionResult<List<Customer>> GetAllCustomers()
        {
            return Ok(_custList);
        }

        [HttpPost("AddCustomer")]
        public ActionResult<Customer> AddCustomer(Customer cust)
        {
            cust.Id = _custList.Count + 1;
            _custList.Add(cust);
            return Ok(cust);
        }

        [HttpDelete("DeleteCustomer")]
        public ActionResult<Customer> DeleteCustomer(int id)
        {
            var cust = _custList.Where(x => x.Id == id).FirstOrDefault();
            _custList.Remove(cust);
            return Ok(cust);
        }

    }


    public class Customer
    {
        public int Id { get; set; }
        public string? CustomerName { get; set; }
        public string? CustomerCode { get; set; }
        public int Amount { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
    }
}
