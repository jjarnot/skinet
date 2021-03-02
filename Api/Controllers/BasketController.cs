using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class BasketController : ControllerBase {
        private readonly IBasketRepository _basketRepository;
        public BasketController (IBasketRepository basketRepository) {
            this._basketRepository = basketRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerBasket>> GetBasketById(string id)
        {
            var basket = await this._basketRepository.GetBasketAsync(id);
            return Ok(basket ?? new Core.Entities.CustomerBasket(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> UpdateBasktet(CustomerBasket basket)
        {
            var updatedBasket = await _basketRepository.UpdateBasketAsync(basket);
            return Ok(updatedBasket);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteBasketAsync(string id)
        {
            await _basketRepository.DelteBasketAsync(id);
            return NoContent();
        }
    }
}