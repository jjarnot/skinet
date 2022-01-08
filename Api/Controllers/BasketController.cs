using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Api.Dtos;
using AutoMapper;

namespace Api.Controllers 
{
    public class BasketController : BaseApiController {
        private readonly IBasketRepository _basketRepository;
        private readonly IMapper _mapper;
        public BasketController (IBasketRepository basketRepository, IMapper mapper) {
            _mapper = mapper;
            _basketRepository = basketRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerBasket>> GetBasketById (string id) {
            var basket = await this._basketRepository.GetBasketAsync (id);
            return Ok (basket ?? new Core.Entities.CustomerBasket (id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> UpdateBasktet (CustomerBasketDto basket) {
            var customerBasket = _mapper.Map<CustomerBasketDto, CustomerBasket>(basket);
            var updatedBasket = await _basketRepository.UpdateBasketAsync (customerBasket);
            return Ok (updatedBasket);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteBasketAsync (string id) {
            await _basketRepository.DelteBasketAsync (id);
            return NoContent ();
        }
    }
}